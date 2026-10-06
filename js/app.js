const App = (() => {
  const detailPanel = document.getElementById("detailPanel");
  const detailContent = document.getElementById("detailContent");

  function showDetail(d) {
    detailPanel.classList.add("open");
    const linked = edges.filter(e=>e.includes(d.id)).flatMap(e=>e.filter(id=>id!==d.id))
      .map(id=>disciplines.find(x=>x.id===id)).filter(Boolean);
    detailContent.innerHTML = `
      <div class="detail-title">
        <div class="code">${d.type === "career" ? "TRILHA PROFISSIONAL" : `${d.code} · ${d.period}º PERÍODO`}</div>
        <h3>${d.name}</h3>
        <p>${d.summary}</p>
      </div>
      <div class="detail-section">
        <h4>Competências</h4>
        <div class="chips">${d.skills.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
      </div>
      <div class="detail-section">
        <h4>${d.type === "career" ? "Stack frequente" : "Tecnologias relacionadas"}</h4>
        <div class="chips">${d.tech.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
      </div>
      ${d.careers.length ? `<div class="detail-section"><h4>Onde isso aparece no mercado</h4>${d.careers.map(c=>`<div class="career-card"><strong>${c}</strong><p>Competências desta disciplina podem contribuir para atividades dessa função.</p></div>`).join("")}</div>` : ""}
      ${linked.length ? `<div class="detail-section"><h4>Conexões na árvore</h4><div class="linked-list">${linked.map(x=>`<div class="linked-item" data-linked="${x.id}">${x.name}</div>`).join("")}</div></div>` : ""}
      <div class="detail-section"><h4>Nota</h4><p style="font-size:9px;color:var(--muted);line-height:1.6">As relações com carreiras e tecnologias são uma proposta didática para exploração do curso. Elas não significam que uma disciplina, isoladamente, habilite para uma profissão.</p></div>
    `;
    detailContent.querySelectorAll("[data-linked]").forEach(el => el.addEventListener("click",()=>SkillTree.select(el.dataset.linked)));
  }
  function clearDetail() {
    detailPanel.classList.remove("open");
    detailContent.innerHTML = `<div class="detail-empty"><div class="big-icon">✦</div><span class="section-kicker">COMECE A EXPLORAR</span><h3>Escolha uma disciplina</h3><p>O painel mostrará o que você aprende, onde esse conhecimento aparece no mercado e quais tecnologias estão relacionadas.</p></div>`;
  }
  function init() {
    document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click",()=>{
      document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active"); SkillTree.setFilter(btn.dataset.filter);
    }));
    document.getElementById("searchInput").addEventListener("input",e=>SkillTree.setSearch(e.target.value));
    document.addEventListener("keydown",e=>{
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();document.getElementById("searchInput").focus();}
      if(e.key==="Escape") clearDetail();
    });
    document.getElementById("closeDetail").addEventListener("click",clearDetail);
    document.getElementById("resetView").addEventListener("click",SkillTree.reset);
    document.getElementById("zoomIn").addEventListener("click",()=>SkillTree.zoom(.1));
    document.getElementById("zoomOut").addEventListener("click",()=>SkillTree.zoom(-.1));
    document.getElementById("themeToggle").addEventListener("click",()=>document.body.classList.toggle("light"));
    const list=document.getElementById("periodList");
    periodMeta.forEach(p=>{
      const b=document.createElement("button"); b.className="period-button";
      b.innerHTML=`<span>${p.label}</span><span>${disciplines.filter(d=>d.period===p.n).length}</span>`;
      b.addEventListener("click",()=>{
        const active=b.classList.contains("active");
        document.querySelectorAll(".period-button").forEach(x=>x.classList.remove("active"));
        SkillTree.setPeriod(active?null:p.n);
        if(!active)b.classList.add("active");
        document.getElementById("treeTitle").textContent=active?"Visão geral do curso":p.label;
      });
      list.appendChild(b);
    });
    SkillTree.initPan(); SkillTree.render();
  }
  return {init,showDetail,clearDetail};
})();
window.App=App;
document.addEventListener("DOMContentLoaded",App.init);