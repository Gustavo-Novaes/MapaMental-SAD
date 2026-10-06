/*
 * Base curricular: Matriz 2022.1 — OBBGSIN — IFMG Campus Ouro Branco.
 * Relações "mercado" são associações didáticas deste projeto, não equivalências
 * oficiais do IFMG. Edite este arquivo para atualizar ou ampliar o mapa.
 */
const disciplines = [
  // 1º período
  {id:"d01",period:1,code:"OBBGSIN.044",name:"Ética e Legislação",level:"foundation",categories:["gestao"],summary:"Fundamentos éticos, legais e profissionais ligados à atuação em tecnologia.",skills:["ética profissional","legislação","responsabilidade digital"],careers:["Analista de Sistemas","Gestor de TI","Consultor de TI"],tech:["LGPD","governança","compliance"],x:145,y:105},
  {id:"d02",period:1,code:"OBBGSIN.085",name:"Introdução à Programação",level:"foundation",categories:["programacao"],summary:"Primeiro contato com lógica, algoritmos e construção de programas.",skills:["lógica","variáveis","condicionais","laços","funções"],careers:["Desenvolvedor Backend","Desenvolvedor Full Stack","Desenvolvedor de Jogos"],tech:["Python","JavaScript","Java","C"],x:145,y:220},
  {id:"d03",period:1,code:"OBBGSIN.001",name:"Introdução a Sistemas de Informação",level:"foundation",categories:["gestao"],summary:"Visão sistêmica de tecnologia, organizações, informação e processos.",skills:["sistemas","processos","organizações","TIC"],careers:["Analista de Sistemas","Product Manager","Consultor de TI"],tech:["ERP","BPM","ITSM"],x:145,y:335},
  {id:"d04",period:1,code:"OBBGSIN.007",name:"Português Instrumental I",level:"foundation",categories:["gestao"],summary:"Comunicação escrita aplicada ao contexto acadêmico e profissional.",skills:["documentação","comunicação","escrita técnica"],careers:["Analista de Sistemas","Tech Lead","Product Manager"],tech:["Markdown","documentação técnica"],x:145,y:450},
  {id:"d05",period:1,code:"OBBGSIN.101",name:"Pré-Cálculo",level:"foundation",categories:["dados"],summary:"Base matemática para conteúdos quantitativos do curso.",skills:["funções","álgebra","modelagem"],careers:["Engenheiro de Dados","Cientista de Dados"],tech:["Python","NumPy"],x:145,y:565},
  {id:"d06",period:1,code:"OBBGSIN.011",name:"Princípios da Administração I",level:"foundation",categories:["gestao"],summary:"Fundamentos de administração aplicados às organizações.",skills:["gestão","processos","planejamento"],careers:["Gestor de TI","Product Manager","Analista de Negócios"],tech:["ERP","BPM"],x:350,y:105},

  // 2º período
  {id:"d07",period:2,code:"OBBGSIN.009",name:"Algoritmos e Estrutura de Dados I",level:"core",categories:["programacao","dados"],summary:"Estruturas fundamentais para organizar dados e resolver problemas eficientemente.",skills:["listas","pilhas","filas","árvores","complexidade"],careers:["Desenvolvedor Backend","Engenheiro de Software","Cientista de Dados"],tech:["Python","Java","C++"],x:350,y:220},
  {id:"d08",period:2,code:"OBBGSIN.012",name:"Cálculo Diferencial e Integral I",level:"foundation",categories:["dados"],summary:"Ferramentas matemáticas para modelagem, otimização e análise.",skills:["derivadas","integrais","modelagem"],careers:["Cientista de Dados","Engenheiro de ML"],tech:["Python","NumPy","SciPy"],x:350,y:335},
  {id:"d09",period:2,code:"OBBGSIN.003",name:"Inglês Instrumental I",level:"foundation",categories:["gestao"],summary:"Leitura e compreensão de materiais técnicos em inglês.",skills:["leitura técnica","vocabulário","documentação"],careers:["Todas as carreiras de TI"],tech:["MDN","GitHub","Stack Overflow"],x:350,y:450},
  {id:"d10",period:2,code:"OBBGSIN.002",name:"Métodos e Técnicas de Pesquisa",level:"foundation",categories:["dados"],summary:"Métodos para investigar problemas, produzir conhecimento e avaliar evidências.",skills:["pesquisa","metodologia","evidências"],careers:["Pesquisador","Cientista de Dados","Engenheiro de Software"],tech:["Jupyter","LaTeX"],x:350,y:565},
  {id:"d11",period:2,code:"OBBGSIN.010",name:"Programação Orientada a Objetos I",level:"core",categories:["programacao"],summary:"Modelagem de software usando classes, objetos e abstrações.",skills:["classes","herança","polimorfismo","encapsulamento"],careers:["Desenvolvedor Backend","Desenvolvedor Java","Engenheiro de Software"],tech:["Java","C#","C++","Python"],x:555,y:220},
  {id:"d12",period:2,code:"OBBGSIN.013",name:"Sistemas Digitais e Circuitos Combinacionais",level:"foundation",categories:["infra"],summary:"Base de representação digital e funcionamento lógico de hardware.",skills:["lógica booleana","circuitos","representação binária"],careers:["Engenheiro de Sistemas","IoT Developer","Robótica"],tech:["Arduino","FPGA","C"],x:555,y:450},

  // 3º período
  {id:"d13",period:3,code:"OBBGSIN.015",name:"Algoritmos e Estrutura de Dados II",level:"core",categories:["programacao","dados"],summary:"Estruturas e técnicas mais avançadas para problemas computacionais.",skills:["árvores","grafos","hash","recursão","complexidade"],careers:["Engenheiro de Software","Desenvolvedor Backend","Engenheiro de Dados"],tech:["Java","C++","Python"],x:555,y:105},
  {id:"d14",period:3,code:"OBBGSIN.024",name:"Arquitetura e Organização de Computadores",level:"core",categories:["infra"],summary:"Como processadores, memória e componentes executam software.",skills:["CPU","memória","assembly","I/O"],careers:["Engenheiro de Sistemas","DevOps","Embedded Developer"],tech:["Linux","Assembly","C"],x:760,y:105},
  {id:"d15",period:3,code:"OBBGSIN.016",name:"Banco de Dados I",level:"core",categories:["dados"],summary:"Modelagem, SQL e fundamentos de armazenamento e consulta de dados.",skills:["modelagem","SQL","normalização","transações"],careers:["Backend Developer","DBA","Engenheiro de Dados"],tech:["PostgreSQL","MySQL","SQL Server"],x:555,y:335},
  {id:"d16",period:3,code:"OBBGSIN.018",name:"Contabilidade",level:"foundation",categories:["gestao"],summary:"Noções contábeis aplicadas ao funcionamento das organizações.",skills:["custos","patrimônio","indicadores"],careers:["Analista de Negócios","Gestor de TI","Empreendedor"],tech:["ERP","BI"],x:555,y:565},
  {id:"d17",period:3,code:"OBBGSIN.017",name:"Engenharia de Software I",level:"core",categories:["programacao","gestao"],summary:"Processos, requisitos e práticas para construir software de forma organizada.",skills:["requisitos","processos","modelagem","versionamento"],careers:["Engenheiro de Software","Analista de Sistemas","Tech Lead"],tech:["Git","UML","Jira"],x:760,y:335},

  // 4º período
  {id:"d18",period:4,code:"OBBGSIN.021",name:"Álgebra Linear e Geometria Analítica",level:"foundation",categories:["dados","ia"],summary:"Base matemática especialmente útil para computação gráfica e aprendizado de máquina.",skills:["vetores","matrizes","transformações"],careers:["Engenheiro de ML","Cientista de Dados","Computer Vision"],tech:["NumPy","PyTorch","TensorFlow"],x:760,y:565},
  {id:"d19",period:4,code:"OBBGSIN.020",name:"Matemática Discreta",level:"core",categories:["programacao","dados"],summary:"Fundamentos matemáticos para lógica computacional, conjuntos, relações e grafos.",skills:["lógica","conjuntos","grafos","combinatória"],careers:["Engenheiro de Software","Criptografia","Cientista de Dados"],tech:["Python","C++"],x:980,y:105},
  {id:"d20",period:4,code:"OBBGSIN.022",name:"Programação Orientada a Objetos II",level:"core",categories:["programacao"],summary:"Aprofundamento de orientação a objetos e construção de sistemas maiores.",skills:["padrões","arquitetura","abstração"],careers:["Backend Developer","Software Architect","Tech Lead"],tech:["Java","C#","Spring"],x:980,y:220},
  {id:"d21",period:4,code:"OBBGSIN.023",name:"Programação Web",level:"core",categories:["web","programacao"],summary:"Construção de aplicações para a Web, do navegador ao servidor.",skills:["HTTP","frontend","backend","APIs"],careers:["Frontend Developer","Backend Developer","Full Stack Developer"],tech:["HTML","CSS","JavaScript","React","Node.js"],x:980,y:335},
  {id:"d22",period:4,code:"OBBGSIN.030",name:"Sistemas Operacionais",level:"core",categories:["infra","programacao"],summary:"Processos, memória, arquivos e recursos gerenciados pelo sistema operacional.",skills:["processos","threads","memória","sistemas de arquivos"],careers:["DevOps","SRE","Backend Developer"],tech:["Linux","Docker","Bash"],x:980,y:450},

  // 5º período
  {id:"d23",period:5,code:"OBBGSIN.041",name:"Engenharia de Software II",level:"specialization",categories:["programacao","gestao"],summary:"Práticas avançadas para qualidade, arquitetura e evolução de software.",skills:["arquitetura","testes","integração","manutenção"],careers:["Engenheiro de Software","Software Architect","Tech Lead"],tech:["GitHub Actions","Docker","JUnit"],x:980,y:565},
  {id:"d24",period:5,code:"OBBGSIN.019",name:"Governança e Gestão de Informação",level:"specialization",categories:["gestao","dados"],summary:"Governança, qualidade e uso estratégico da informação.",skills:["governança","qualidade de dados","processos"],careers:["Data Governance","IT Manager","Analista de BI"],tech:["Power BI","ITIL","COBIT"],x:1200,y:105},
  {id:"d25",period:5,code:"OBBGSIN.031",name:"Probabilidade e Estatística",level:"core",categories:["dados","ia"],summary:"Ferramentas estatísticas para análise, inferência e modelagem.",skills:["distribuições","inferência","regressão","testes"],careers:["Cientista de Dados","Analista de Dados","Engenheiro de ML"],tech:["Python","Pandas","R"],x:1200,y:220},
  {id:"d26",period:5,code:"OBBGSIN.029",name:"Redes de Computadores I",level:"core",categories:["infra"],summary:"Fundamentos de comunicação de dados e redes.",skills:["TCP/IP","roteamento","DNS","HTTP"],careers:["Network Engineer","DevOps","Cloud Engineer"],tech:["Linux","Wireshark","Cisco"],x:1200,y:335},
  {id:"d27",period:5,code:"OPT-I",name:"Optativa I",level:"specialization",categories:["programacao","dados"],summary:"Espaço de especialização curricular. O projeto permite relacionar a optativa escolhida à trilha profissional.",skills:["especialização","autonomia"],careers:["Especialista de TI"],tech:["A definir pelo aluno"],x:1200,y:450},

  // 6º período
  {id:"d28",period:6,code:"OBBGSIN.039",name:"Programação para Dispositivos Móveis",level:"specialization",categories:["programacao","web"],summary:"Desenvolvimento de aplicações para smartphones e dispositivos móveis.",skills:["UI mobile","APIs","estado","publicação"],careers:["Mobile Developer","Full Stack Developer"],tech:["Kotlin","Swift","Flutter","React Native"],x:1200,y:565},
  {id:"d29",period:6,code:"OBBGSIN.038",name:"Projeto e Análise de Algoritmos",level:"specialization",categories:["programacao","dados"],summary:"Análise formal de eficiência e projeto de algoritmos.",skills:["complexidade","otimização","paradigmas"],careers:["Software Engineer","Backend Developer","Competitive Programmer"],tech:["C++","Python","Java"],x:1420,y:105},
  {id:"d30",period:6,code:"OBBGSIN.036",name:"Sistemas de Apoio a Decisão",level:"specialization",categories:["dados","gestao"],summary:"Sistemas que transformam dados em informação para apoiar decisões.",skills:["BI","indicadores","modelagem analítica"],careers:["BI Analyst","Data Analyst","Product Analyst"],tech:["Power BI","SQL","Python"],x:1420,y:220},
  {id:"d31",period:6,code:"OBBGSIN.037",name:"Sistemas Distribuídos",level:"specialization",categories:["infra","programacao"],summary:"Sistemas compostos por múltiplos computadores que trabalham de forma coordenada.",skills:["concorrência","serviços","consistência","escalabilidade"],careers:["Backend Engineer","Cloud Engineer","Distributed Systems Engineer"],tech:["Docker","Kubernetes","Kafka","gRPC"],x:1420,y:335},
  {id:"d32",period:6,code:"OPT-II",name:"Optativa II",level:"specialization",categories:["programacao","dados"],summary:"Segundo espaço de especialização curricular.",skills:["especialização","projeto"],careers:["Especialista de TI"],tech:["A definir pelo aluno"],x:1420,y:450},

  // 7º período
  {id:"d33",period:7,code:"OBBGSIN.040",name:"Gestão de Projetos",level:"specialization",categories:["gestao"],summary:"Planejamento, execução e acompanhamento de projetos.",skills:["escopo","cronograma","riscos","agilidade"],careers:["Project Manager","Scrum Master","Tech Lead"],tech:["Jira","Trello","Azure DevOps"],x:1420,y:565},
  {id:"d34",period:7,code:"OBBGSIN.034",name:"Inteligência Artificial",level:"specialization",categories:["ia","dados","programacao"],summary:"Fundamentos de técnicas de inteligência artificial e sistemas inteligentes.",skills:["busca","aprendizado","classificação","modelos"],careers:["ML Engineer","AI Engineer","Data Scientist"],tech:["Python","scikit-learn","PyTorch","TensorFlow"],x:1640,y:105},
  {id:"d35",period:7,code:"OBBGSIN.026",name:"Interface Humano Computador",level:"specialization",categories:["web"],summary:"Projeto e avaliação da interação entre pessoas e sistemas.",skills:["UX","usabilidade","acessibilidade","prototipação"],careers:["UX Designer","Product Designer","Frontend Developer"],tech:["Figma","HTML","CSS","JavaScript"],x:1640,y:220},
  {id:"d36",period:7,code:"OBBGSIN.091",name:"Trabalho de Conclusão de Curso I",level:"specialization",categories:["gestao","dados"],summary:"Etapa de definição, pesquisa e desenvolvimento do trabalho final.",skills:["pesquisa","planejamento","projeto"],careers:["Pesquisador","Software Engineer","Empreendedor"],tech:["Git","GitHub","LaTeX"],x:1640,y:335},
  {id:"d37",period:7,code:"OPT-III",name:"Optativa III",level:"specialization",categories:["programacao","dados"],summary:"Terceiro espaço de especialização curricular.",skills:["especialização","autonomia"],careers:["Especialista de TI"],tech:["A definir pelo aluno"],x:1640,y:450},

  // 8º período
  {id:"d38",period:8,code:"OBBGSIN.102",name:"Empreendedorismo",level:"specialization",categories:["gestao"],summary:"Criação, avaliação e gestão de iniciativas e negócios.",skills:["produto","modelo de negócio","inovação"],careers:["Founder","Product Manager","Tech Entrepreneur"],tech:["Lean Canvas","MVP","analytics"],x:1640,y:565},
  {id:"d39",period:8,code:"OBBGSIN.103",name:"Qualidade de Software",level:"specialization",categories:["programacao","gestao"],summary:"Práticas para garantir confiabilidade, manutenibilidade e qualidade.",skills:["testes","métricas","qualidade","CI/CD"],careers:["QA Engineer","Software Engineer","DevOps"],tech:["JUnit","Cypress","GitHub Actions"],x:1640,y:680},
  {id:"d40",period:8,code:"OBBGSIN.092",name:"Trabalho de Conclusão de Curso II",level:"specialization",categories:["gestao","programacao"],summary:"Implementação, avaliação e apresentação do trabalho final.",skills:["entrega","validação","apresentação"],careers:["Pesquisador","Software Engineer","Empreendedor"],tech:["GitHub","Docker","documentação"],x:1420,y:680},
  {id:"d41",period:8,code:"OPT-IV",name:"Optativa IV",level:"specialization",categories:["programacao","dados"],summary:"Quarto espaço de especialização curricular.",skills:["especialização","autonomia"],careers:["Especialista de TI"],tech:["A definir pelo aluno"],x:1200,y:680},

  // carreira
  {id:"c01",type:"career",period:"carreira",code:"CAREER",name:"Frontend Developer",level:"career",categories:["web","programacao"],summary:"Constrói interfaces web, experiências de usuário e aplicações executadas no navegador.",skills:["HTML","CSS","JavaScript","acessibilidade","componentização"],careers:[],tech:["HTML","CSS","JavaScript","React","TypeScript"],x:1430,y:850},
  {id:"c02",type:"career",period:"carreira",code:"CAREER",name:"Backend Developer",level:"career",categories:["programacao","dados"],summary:"Constrói APIs, regras de negócio, integrações e serviços no lado do servidor.",skills:["APIs","bancos","arquitetura","segurança"],careers:[],tech:["Java","Python","Node.js","PostgreSQL","Docker"],x:1160,y:850},
  {id:"c03",type:"career",period:"carreira",code:"CAREER",name:"Data / BI Analyst",level:"career",categories:["dados","gestao"],summary:"Transforma dados em análises, indicadores e decisões de negócio.",skills:["SQL","estatística","visualização","modelagem"],careers:[],tech:["SQL","Power BI","Python","Pandas"],x:890,y:850},
  {id:"c04",type:"career",period:"carreira",code:"CAREER",name:"AI / ML Engineer",level:"career",categories:["ia","dados","programacao"],summary:"Desenvolve, treina e coloca modelos de aprendizado de máquina em produção.",skills:["ML","dados","modelagem","MLOps"],careers:[],tech:["Python","PyTorch","scikit-learn","MLflow"],x:620,y:850},
  {id:"c05",type:"career",period:"carreira",code:"CAREER",name:"DevOps / Cloud",level:"career",categories:["infra","programacao"],summary:"Automatiza entrega, infraestrutura, observabilidade e operação de sistemas.",skills:["Linux","CI/CD","containers","cloud","observabilidade"],careers:[],tech:["Docker","Kubernetes","AWS","GitHub Actions"],x:350,y:850}
];

const edges = [
  ["d02","d07"],["d07","d13"],["d13","d19"],["d19","d29"],
  ["d02","d11"],["d11","d20"],["d20","d23"],["d23","d39"],
  ["d15","d30"],["d15","d24"],["d25","d30"],["d25","d34"],
  ["d26","d31"],["d22","d31"],["d14","d22"],["d31","c05"],
  ["d21","d28"],["d21","d35"],["d21","c01"],["d28","c01"],
  ["d11","c02"],["d15","c02"],["d17","c02"],["d31","c02"],
  ["d25","c03"],["d30","c03"],["d16","c03"],
  ["d18","d34"],["d34","c04"],["d25","c04"],["d13","c04"],
  ["d17","d23"],["d17","d33"],["d33","d38"],
  ["d03","d17"],["d06","d24"],["d09","d21"],["d10","d36"],
  ["d35","c01"],["d39","c02"],["d39","c05"],
  ["d34","d36"],["d36","d40"],["d38","d40"]
];

const periodMeta = [
  {n:1,label:"1º período"},{n:2,label:"2º período"},{n:3,label:"3º período"},{n:4,label:"4º período"},
  {n:5,label:"5º período"},{n:6,label:"6º período"},{n:7,label:"7º período"},{n:8,label:"8º período"}
];
