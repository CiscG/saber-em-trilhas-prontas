
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Clock, Users, Star, Play, CheckCircle, BookOpen, Trophy } from "lucide-react";

const Learning = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Metodologias Ativas na Prática",
      description: "Aprenda a implementar metodologias ativas que engajam e motivam os estudantes",
      duration: "4 semanas",
      modules: 12,
      students: 2341,
      rating: 4.9,
      level: "Intermediário",
      category: "Metodologia",
      progress: 0,
      instructor: "Prof. Ana Silva",
      skills: ["Gamificação", "Aprendizagem Baseada em Projetos", "Sala de Aula Invertida"],
      image: "🎯"
    },
    {
      id: 2,
      title: "Tecnologia Educacional Eficaz",
      description: "Domine ferramentas digitais para criar experiências de aprendizagem impactantes",
      duration: "3 semanas", 
      modules: 9,
      students: 1876,
      rating: 4.8,
      level: "Básico",
      category: "Tecnologia",
      progress: 65,
      instructor: "Prof. Carlos Tech",
      skills: ["Plataformas LMS", "Criação de Conteúdo Digital", "Avaliação Online"],
      image: "💻"
    },
    {
      id: 3,
      title: "Gestão de Sala de Aula",
      description: "Estratégias para criar um ambiente de aprendizagem positivo e produtivo",
      duration: "2 semanas",
      modules: 6,
      students: 1523,
      rating: 4.7,
      level: "Básico",
      category: "Gestão",
      progress: 100,
      instructor: "Prof. Maria Educar",
      skills: ["Disciplina Positiva", "Comunicação Eficaz", "Resolução de Conflitos"],
      image: "🏫"
    },
    {
      id: 4,
      title: "Avaliação Formativa Digital",
      description: "Técnicas modernas de avaliação que promovem o aprendizado contínuo",
      duration: "3 semanas",
      modules: 8,
      students: 987,
      rating: 4.6,
      level: "Avançado",
      category: "Avaliação",
      progress: 25,
      instructor: "Prof. João Avaliar",
      skills: ["Feedback Eficaz", "Rubricas Digitais", "Autoavaliação"],
      image: "📊"
    }
  ];

  const categories = [
    { name: "Todos", count: tracks.length },
    { name: "Metodologia", count: 1 },
    { name: "Tecnologia", count: 1 },
    { name: "Gestão", count: 1 },
    { name: "Avaliação", count: 1 }
  ];

  const achievements = [
    { name: "Primeiro Módulo", icon: "🎯", unlocked: true },
    { name: "Estudante Dedicado", icon: "📚", unlocked: true },
    { name: "Colaborador Ativo", icon: "👥", unlocked: false },
    { name: "Expert em Metodologias", icon: "🏆", unlocked: false }
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Trilhas de Formação
          </h1>
          <p className="text-gray-600">
            Desenvolva suas competências pedagógicas com cursos práticos e aplicáveis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.name}
                    value={category.name.toLowerCase()}
                    className="data-[state=active]:bg-edu-primary data-[state=active]:text-white"
                  >
                    {category.name} ({category.count})
                  </TabsTrigger>
                ))}
              </div>

              <TabsContent value="todos" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tracks.map((track) => (
                    <Card key={track.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl">{track.image}</div>
                            <div>
                              <CardTitle className="text-lg mb-1">{track.title}</CardTitle>
                              <Badge variant="outline">{track.category}</Badge>
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
                            {track.students}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{track.rating}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">{track.level}</Badge>
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
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {track.skills.length > 2 && (
                            <Badge variant="outline" className="text-xs">
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-edu-primary" />
                  Meu Progresso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-edu-primary">47%</div>
                    <p className="text-sm text-gray-600">Progresso Geral</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Trilhas Iniciadas</span>
                      <span className="font-medium">3/4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Trilhas Concluídas</span>
                      <span className="font-medium">1/4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Horas de Estudo</span>
                      <span className="font-medium">24h</span>
                    </div>
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
                      className={`flex items-center gap-3 p-2 rounded-lg ${
                        achievement.unlocked ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl">
                        {achievement.unlocked ? achievement.icon : '🔒'}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${
                          achievement.unlocked ? 'text-green-700' : 'text-gray-500'
                        }`}>
                          {achievement.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card>
              <CardHeader>
                <CardTitle>Sequência de Estudos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-edu-primary mb-2">7</div>
                  <p className="text-sm text-gray-600">dias consecutivos</p>
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-6 h-6 rounded-full bg-edu-primary flex items-center justify-center"
                      >
                        <span className="text-xs text-white">✓</span>
                      </div>
                    ))}
                  </div>
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
