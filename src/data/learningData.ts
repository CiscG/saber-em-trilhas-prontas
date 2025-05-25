
export const tracks = [
  {
    id: 1,
    title: "Primeiros Passos na Plataforma",
    description: "Aprenda o básico para começar a usar todas as funcionalidades da plataforma",
    duration: "1 semana",
    modules: 5,
    students: 3240,
    rating: 4.9,
    level: "Iniciante",
    category: "Básico",
    progress: 0,
    instructor: "Equipe Suporte",
    skills: ["Navegação", "Configuração de Perfil", "Primeiro Upload"],
    image: "🚀",
    lessons: [
      "Criando sua conta e configurando perfil",
      "Navegando pela interface principal", 
      "Fazendo seu primeiro upload de recurso",
      "Organizando sua biblioteca pessoal",
      "Configurações básicas de privacidade"
    ]
  },
  {
    id: 2,
    title: "Biblioteca Digital Avançada",
    description: "Domine todas as funcionalidades da biblioteca para organizar e compartilhar recursos",
    duration: "2 semanas", 
    modules: 8,
    students: 2876,
    rating: 4.8,
    level: "Intermediário",
    category: "Biblioteca",
    progress: 45,
    instructor: "Prof. Ana Digital",
    skills: ["Organização", "Compartilhamento", "Tags e Filtros"],
    image: "📚",
    lessons: [
      "Sistema de tags e categorização",
      "Criando coleções temáticas",
      "Compartilhamento inteligente",
      "Filtros avançados de busca",
      "Sincronização entre dispositivos",
      "Backup e recuperação",
      "Colaboração em tempo real",
      "Métricas de engajamento"
    ]
  },
  {
    id: 3,
    title: "Gerador de Conteúdo IA",
    description: "Aprenda a usar nossa IA para criar conteúdos educacionais personalizados",
    duration: "2 semanas",
    modules: 7,
    students: 1923,
    rating: 4.9,
    level: "Intermediário",
    category: "IA",
    progress: 0,
    instructor: "Dr. Carlos IA",
    skills: ["Prompts Eficazes", "Personalização", "Revisão de Conteúdo"],
    image: "🤖",
    lessons: [
      "Introdução à IA educacional",
      "Criando prompts eficazes",
      "Personalizando para sua audiência",
      "Gerando avaliações automáticas",
      "Adaptando conteúdo por nível",
      "Revisão e refinamento",
      "Integração com biblioteca"
    ]
  },
  {
    id: 4,
    title: "Colaboração e Comunidade",
    description: "Maximize o networking e colaboração com outros educadores",
    duration: "1 semana",
    modules: 4,
    students: 1654,
    rating: 4.7,
    level: "Intermediário",
    category: "Colaboração",
    progress: 100,
    instructor: "Prof. Maria Social",
    skills: ["Networking", "Projetos Colaborativos", "Mentoria"],
    image: "🤝",
    lessons: [
      "Encontrando colaboradores ideais",
      "Criando projetos em equipe",
      "Sistema de mentoria",
      "Participando de comunidades"
    ]
  },
  {
    id: 5,
    title: "Analytics e Métricas",
    description: "Entenda o impacto dos seus recursos através de dados e analytics",
    duration: "1 semana",
    modules: 6,
    students: 987,
    rating: 4.6,
    level: "Avançado",
    category: "Analytics",
    progress: 25,
    instructor: "Dr. João Dados",
    skills: ["Interpretação de Dados", "Otimização", "ROI Educacional"],
    image: "📊",
    lessons: [
      "Dashboard de métricas principais",
      "Analisando engajamento estudantil",
      "Métricas de eficácia pedagógica",
      "Relatórios personalizados",
      "Otimização baseada em dados",
      "Compartilhando insights"
    ]
  },
  {
    id: 6,
    title: "Integração com Outras Ferramentas",
    description: "Conecte a plataforma com suas ferramentas favoritas de ensino",
    duration: "1 semana",
    modules: 5,
    students: 756,
    rating: 4.5,
    level: "Avançado",
    category: "Integração",
    progress: 0,
    instructor: "Tech Team",
    skills: ["APIs", "Automação", "Workflows"],
    image: "🔗",
    lessons: [
      "Conectando com LMS populares",
      "Integração com Google Classroom",
      "Automação de workflows",
      "APIs e webhooks básicos",
      "Sincronização de dados"
    ]
  }
];

export const categories = [
  { name: "Todos", value: "all", count: tracks.length, icon: "📋" },
  { name: "Básico", value: "Básico", count: 1, icon: "🚀" },
  { name: "Biblioteca", value: "Biblioteca", count: 1, icon: "📚" },
  { name: "IA", value: "IA", count: 1, icon: "🤖" },
  { name: "Colaboração", value: "Colaboração", count: 1, icon: "🤝" },
  { name: "Analytics", value: "Analytics", count: 1, icon: "📊" },
  { name: "Integração", value: "Integração", count: 1, icon: "🔗" }
];

export const achievements = [
  { name: "Primeiro Login", icon: "🎯", unlocked: true, description: "Fez seu primeiro acesso" },
  { name: "Explorador", icon: "🗺️", unlocked: true, description: "Completou trilha básica" },
  { name: "Colaborador", icon: "👥", unlocked: false, description: "Participou de 5 projetos" },
  { name: "Expert da Plataforma", icon: "🏆", unlocked: false, description: "Completou todas as trilhas" },
  { name: "Mentor", icon: "🎓", unlocked: false, description: "Ajudou 10 usuários" },
  { name: "Inovador", icon: "💡", unlocked: false, description: "Criou 50 recursos únicos" }
];
