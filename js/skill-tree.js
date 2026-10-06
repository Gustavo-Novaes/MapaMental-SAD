const SkillTree = (() => {
  const state = { filter:"all", search:"", period:null, selected:null, scale:1 };
  const canvas = document.getElementById("treeCanvas");
  const content = document.getElementById("treeContent");
  const svg = document.getElementById("connections");
  const viewport = document.getElementById("treeViewport");
  const empty = document.getElementById("emptyState");

  function matches(d) {
    const hay = [d.name,d.code,d.summary,...d.skills,...d.careers,...d.tech,...d.categories].join(" ").toLowerCase();
    const searchOk = !state.search || hay.includes(state.search.toLowerCase());
    const filterOk = state.filter === "all" || d.categories.includes(state.filter);
    const periodOk = state.period === null || d.period === state.period || d.type === "career";
    return searchOk && filterOk && periodOk;
  }

  function render() {
    content.innerHTML = "";
    svg.innerHTML = "";
    const visible = disciplines.filter(matches);
    empty.classList.toggle("hidden", visible.length > 0);
    document.getElementById("visibleCount").textContent = visible.length;
    document.getElementById("disciplineCount").textContent = disciplines.filter(d => !d.type).length;

    disciplines.forEach(d => {
      const node = document.createElement("button");
      node.className = `tree-node node-${d.level} ${d.type === "career" ? "career-node" : ""}`;
      node.dataset.id = d.id;
      node.style.left = `${d.x}px`;
      node.style.top = `${d.y}px`;
      if (!matches(d)) node.classList.add("dim");
      if (state.selected === d.id) node.classList.add("selected");
      node.innerHTML = `
        <div class="node-period">${d.type === "career" ? "CARREIRA" : `${d.period}º PERÍODO · ${d.code}`}</div>
        <div class="node-name">${d.name}</div>
        <div class="node-meta">${d.tech.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      `;
      node.addEventListener("click", () => select(d.id));
      content.appendChild(node);
    });

    edges.forEach(([a,b]) => {
      const da = disciplines.find(d=>d.id===a), db = disciplines.find(d=>d.id===b);
      if (!da || !db) return;
      const path = document.createElementNS("http://www.w3.org/2000/svg","path");
      const active = state.selected && (state.selected===a || state.selected===b || connectedToSelected(a,b));
      path.setAttribute("class", `connection ${active ? "active" : ""}`);
      const midX = (da.x + db.x) / 2;
      path.setAttribute("d", `M ${da.x} ${da.y} C ${midX} ${da.y}, ${midX} ${db.y}, ${db.x} ${db.y}`);
      svg.appendChild(path);
    });
    applyTransform();
  }

  function connectedToSelected(a,b) {
    if (!state.selected) return false;
    return edges.some(e => (e[0]===state.selected && (e[1]===a||e[1]===b)) || (e[1]===state.selected && (e[0]===a||e[0]===b)));
  }

  function select(id) {
    state.selected = id;
    const d = disciplines.find(x=>x.id===id);
    if (d && window.App) window.App.showDetail(d);
    render();
  }

  function setFilter(filter) { state.filter=filter; render(); }
  function setSearch(value) { state.search=value; render(); }
  function setPeriod(period) { state.period=period; render(); }

  function zoom(delta) {
    state.scale = Math.max(.65, Math.min(1.45, +(state.scale + delta).toFixed(2)));
    applyTransform();
    document.getElementById("zoomLabel").textContent = `${Math.round(state.scale*100)}%`;
  }
  function reset() {
    state.filter="all"; state.search=""; state.period=null; state.selected=null; state.scale=1;
    document.getElementById("searchInput").value="";
    document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));
    document.querySelectorAll(".period-button").forEach(b=>b.classList.remove("active"));
    applyTransform();
    viewport.dispatchEvent(new Event("reset-pan"));
    render();
    if(window.App) window.App.clearDetail();
  }
  function applyTransform() {
    canvas.style.transform = `translate(-50%,-50%) scale(${state.scale})`;
  }
  function initPan() {
    let dragging = false;
    let moved = false;
    let sx = 0, sy = 0;
    let panX = 0, panY = 0;

    function applyPan() {
      canvas.style.left = `calc(50% + ${panX}px)`;
      canvas.style.top = `calc(50% + ${panY}px)`;
    }

    viewport.addEventListener("pointerdown", e => {
      if (e.target.closest(".tree-node")) return;
      dragging = true;
      moved = false;
      sx = e.clientX;
      sy = e.clientY;
      viewport.classList.add("dragging");
      viewport.setPointerCapture(e.pointerId);
    });

    viewport.addEventListener("pointermove", e => {
      if (!dragging) return;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;

      if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;

      panX += dx;
      panY += dy;
      sx = e.clientX;
      sy = e.clientY;
      applyPan();
    });

    viewport.addEventListener("pointerup", () => {
      dragging = false;
      viewport.classList.remove("dragging");
    });

    viewport.addEventListener("pointercancel", () => {
      dragging = false;
      viewport.classList.remove("dragging");
    });

    viewport.addEventListener("reset-pan", () => {
      panX = 0;
      panY = 0;
      applyPan();
    });

    viewport.addEventListener("wheel", e => {
      e.preventDefault();
      zoom(e.deltaY > 0 ? -.05 : .05);
    }, {passive:false});

    applyPan();
  }
  return {render, select, setFilter, setSearch, setPeriod, zoom, reset, initPan};
})();
