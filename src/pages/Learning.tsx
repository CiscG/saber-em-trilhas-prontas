
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Clock, Users, Star, Play, CheckCircle, BookOpen, Trophy, Lightbulb, Target, Zap } from "lucide-react";

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const tracks = [
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

  const categories = [
    { name: "Todos", value: "all", count: tracks.length, icon: "📋" },
    { name: "Básico", value: "Básico", count: 1, icon: "🚀" },
    { name: "Biblioteca", value: "Biblioteca", count: 1, icon: "📚" },
    { name: "IA", value: "IA", count: 1, icon: "🤖" },
    { name: "Colaboração", value: "Colaboração", count: 1, icon: "🤝" },
    { name: "Analytics", value: "Analytics", count: 1, icon: "📊" },
    { name: "Integração", value: "Integração", count: 1, icon: "🔗" }
  ];

  const achievements = [
    { name: "Primeiro Login", icon: "🎯", unlocked: true, description: "Fez seu primeiro acesso" },
    { name: "Explorador", icon: "🗺️", unlocked: true, description: "Completou trilha básica" },
    { name: "Colaborador", icon: "👥", unlocked: false, description: "Participou de 5 projetos" },
    { name: "Expert da Plataforma", icon: "🏆", unlocked: false, description: "Completou todas as trilhas" },
    { name: "Mentor", icon: "🎓", unlocked: false, description: "Ajudou 10 usuários" },
    { name: "Inovador", icon: "💡", unlocked: false, description: "Criou 50 recursos únicos" }
  ];

  const filteredTracks = selectedCategory === "all" 
    ? tracks 
    : tracks.filter(track => track.category === selectedCategory);

  const getProgressColor = (progress: number) => {
    if (progress === 0) return "bg-gray-200";
    if (progress < 50) return "bg-yellow-500";
    if (progress < 100) return "bg-blue-500";
    return "bg-green-500";
  };

  const getProgressText = (progress: number) => {
    if (progress === 0) return "Não iniciado";
    if (progress < 100) return "Em andamento";
    return "Concluído";
  };

  const totalProgress = Math.round(tracks.reduce((acc, track) => acc + track.progress, 0) / tracks.length);
  const completedTracks = tracks.filter(track => track.progress === 100).length;
  const inProgressTracks = tracks.filter(track => track.progress > 0 && track.progress < 100).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎓 Trilhas de Capacitação da Plataforma
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aprenda a usar todas as funcionalidades da nossa plataforma educacional. 
            Do básico ao avançado, temos trilhas para todos os níveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.value}
                    value={category.value}
                    className="data-[state=active]:bg-edu-primary data-[state=active]:text-white flex items-center gap-2"
                  >
                    <span>{category.icon}</span>
                    {category.name} ({category.count})
                  </TabsTrigger>
                ))}
              </div>

              <TabsContent value={selectedCategory} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTracks.map((track) => (
                    <Card key={track.id} className="hover:shadow-lg transition-shadow bg-white">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl">{track.image}</div>
                            <div>
                              <CardTitle className="text-lg mb-1">{track.title}</CardTitle>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                {track.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{track.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {track.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {track.modules} módulos
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {track.students.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{track.rating}</span>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${
                              track.level === 'Iniciante' ? 'bg-green-100 text-green-700' :
                              track.level === 'Intermediário' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}
                          >
                            {track.level}
                          </Badge>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Progresso</span>
                            <span className="text-sm text-gray-500">{track.progress}%</span>
                          </div>
                          <Progress value={track.progress} className="h-2" />
                          <span className="text-xs text-gray-500 mt-1">
                            {getProgressText(track.progress)}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {track.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs bg-gray-50">
                              {skill}
                            </Badge>
                          ))}
                          {track.skills.length > 2 && (
                            <Badge variant="outline" className="text-xs bg-gray-50">
                              +{track.skills.length - 2} mais
                            </Badge>
                          )}
                        </div>

                        <Button 
                          className="w-full"
                          variant={track.progress === 0 ? "default" : "outline"}
                        >
                          {track.progress === 0 && (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Iniciar Trilha
                            </>
                          )}
                          {track.progress > 0 && track.progress < 100 && (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Continuar
                            </>
                          )}
                          {track.progress === 100 && (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Revisar
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Summary */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <GraduationCap className="h-5 w-5" />
                  Meu Progresso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{totalProgress}%</div>
                    <p className="text-sm text-blue-700">Progresso Geral</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-700">Trilhas Iniciadas</span>
                      <span className="font-medium text-blue-800">{inProgressTracks + completedTracks}/{tracks.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-700">Trilhas Concluídas</span>
                      <span className="font-medium text-blue-800">{completedTracks}/{tracks.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-700">Horas de Capacitação</span>
                      <span className="font-medium text-blue-800">18h</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-blue-200">
                    <div className="flex items-center gap-2 text-sm text-blue-700 mb-2">
                      <Target className="h-4 w-4" />
                      Próximo Objetivo
                    </div>
                    <p className="text-xs text-blue-600">
                      Complete mais 2 trilhas para desbloquear o badge "Expert da Plataforma"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Lightbulb className="h-5 w-5" />
                  Dicas Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-700">
                      Comece pela trilha básica mesmo se já usa a plataforma
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-700">
                      Pratique cada funcionalidade durante a trilha
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-700">
                      Participe dos fóruns de discussão para tirar dúvidas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-edu-primary" />
                  Conquistas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        achievement.unlocked 
                          ? 'bg-green-50 border border-green-200 shadow-sm' 
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="text-2xl">
                        {achievement.unlocked ? achievement.icon : '🔒'}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          achievement.unlocked ? 'text-green-700' : 'text-gray-500'
                        }`}>
                          {achievement.name}
                        </p>
                        <p className={`text-xs ${
                          achievement.unlocked ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Sequência de Aprendizado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                  <p className="text-sm text-green-700 mb-4">dias consecutivos</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          i < 5 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {i < 5 ? '✓' : '·'}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-green-600 mt-2">
                    Continue por mais 2 dias para quebrar seu recorde!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
