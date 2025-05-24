
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users, Calendar, Plus, Search, TrendingUp, Clock } from "lucide-react";

const Collaboration = () => {
  const forums = [
    {
      id: 1,
      title: "Metodologias Ativas",
      description: "Discussões sobre implementação de metodologias ativas em sala de aula",
      members: 1247,
      posts: 856,
      lastActivity: "2 min atrás"
    },
    {
      id: 2,
      title: "Tecnologia na Educação",
      description: "Compartilhe experiências com ferramentas digitais educacionais",
      members: 934,
      posts: 623,
      lastActivity: "15 min atrás"
    },
    {
      id: 3,
      title: "Educação Infantil",
      description: "Especial para profissionais da educação infantil",
      members: 789,
      posts: 445,
      lastActivity: "1 hora atrás"
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Como vocês trabalham gamificação em matemática?",
      author: "Ana Silva",
      authorRole: "Professora de Matemática",
      replies: 23,
      views: 145,
      timeAgo: "3 horas atrás",
      tags: ["gamificação", "matemática", "engajamento"]
    },
    {
      id: 2,
      title: "Experiências com aulas híbridas pós-pandemia",
      author: "Carlos Mendes",
      authorRole: "Coordenador Pedagógico",
      replies: 47,
      views: 289,
      timeAgo: "5 horas atrás",
      tags: ["ensino híbrido", "tecnologia", "adaptação"]
    },
    {
      id: 3,
      title: "Estratégias para inclusão de alunos com TEA",
      author: "Maria Costa",
      authorRole: "Professora Especialista",
      replies: 31,
      views: 198,
      timeAgo: "1 dia atrás",
      tags: ["inclusão", "TEA", "estratégias"]
    }
  ];

  const events = [
    {
      id: 1,
      title: "Workshop: Inteligência Emocional na Educação",
      date: "25 de Janeiro",
      time: "19:00",
      participants: 156,
      type: "Workshop"
    },
    {
      id: 2,
      title: "Webinar: Avaliação Formativa Digital",
      date: "28 de Janeiro",
      time: "20:00",
      participants: 89,
      type: "Webinar"
    },
    {
      id: 3,
      title: "Mesa Redonda: O Futuro da Educação",
      date: "2 de Fevereiro",
      time: "15:00",
      participants: 234,
      type: "Mesa Redonda"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Área Colaborativa
          </h1>
          <p className="text-gray-600">
            Conecte-se com educadores, compartilhe experiências e construa conhecimento juntos
          </p>
        </div>

        <Tabs defaultValue="forums" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="forums">Fóruns</TabsTrigger>
            <TabsTrigger value="discussions">Discussões</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
          </TabsList>

          {/* Forums Tab */}
          <TabsContent value="forums" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Buscar fóruns..." className="pl-10 w-80" />
                </div>
              </div>
              <Button className="bg-edu-primary hover:bg-edu-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Criar Fórum
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forums.map((forum) => (
                <Card key={forum.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{forum.title}</span>
                      <Users className="h-5 w-5 text-edu-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{forum.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>{forum.members} membros</span>
                      <span>{forum.posts} posts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{forum.lastActivity}</span>
                      <Button size="sm" variant="outline">
                        Participar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Iniciar Nova Discussão</h3>
              <div className="space-y-4">
                <Input placeholder="Título da discussão..." />
                <Textarea placeholder="Descreva sua dúvida ou compartilhe sua experiência..." rows={4} />
                <div className="flex justify-between">
                  <Input placeholder="Tags (separadas por vírgula)" className="w-1/2" />
                  <Button className="bg-edu-primary hover:bg-edu-primary/90">
                    Publicar Discussão
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-edu-primary cursor-pointer">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{discussion.author}</p>
                            <p className="text-xs text-gray-500">{discussion.authorRole}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {discussion.replies}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            {discussion.views}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {discussion.timeAgo}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Próximos Eventos</h3>
              <Button className="bg-edu-primary hover:bg-edu-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Propor Evento
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{event.type}</Badge>
                      <Calendar className="h-5 w-5 text-edu-primary" />
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Data:</span>
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Horário:</span>
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Participantes:</span>
                        <span className="font-medium">{event.participants} inscritos</span>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Inscrever-se
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Collaboration;
