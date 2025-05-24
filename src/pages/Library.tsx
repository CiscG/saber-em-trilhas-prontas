
import { useState } from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Download, Heart, Star, BookOpen, FileText, Video, Image } from "lucide-react";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "matematica", name: "Matemática", count: 245 },
    { id: "portugues", name: "Português", count: 189 },
    { id: "ciencias", name: "Ciências", count: 156 },
    { id: "historia", name: "História", count: 134 },
    { id: "geografia", name: "Geografia", count: 98 },
    { id: "artes", name: "Artes", count: 87 }
  ];

  const resources = [
    {
      id: 1,
      title: "Plano de Aula: Frações no Cotidiano",
      description: "Atividade prática para ensinar frações usando situações do dia a dia dos alunos.",
      category: "Matemática",
      type: "Plano de Aula",
      level: "Ensino Fundamental II",
      downloads: 1234,
      rating: 4.8,
      liked: false,
      author: "Prof. Ana Silva",
      icon: FileText
    },
    {
      id: 2,
      title: "Vídeo: Sistema Solar Interativo",
      description: "Apresentação animada sobre os planetas do sistema solar com atividades interativas.",
      category: "Ciências",
      type: "Vídeo",
      level: "Ensino Fundamental I",
      downloads: 856,
      rating: 4.9,
      liked: true,
      author: "Prof. Carlos Mendes",
      icon: Video
    },
    {
      id: 3,
      title: "Jogo: Descobrindo o Brasil Colonial",
      description: "Jogo educativo para explorar o período colonial brasileiro de forma lúdica.",
      category: "História",
      type: "Atividade",
      level: "Ensino Médio",
      downloads: 567,
      rating: 4.7,
      liked: false,
      author: "Prof. Maria Costa",
      icon: Image
    },
    {
      id: 4,
      title: "Apostila: Interpretação de Textos",
      description: "Material completo com estratégias e exercícios para desenvolver interpretação textual.",
      category: "Português",
      type: "Material",
      level: "Ensino Fundamental II",
      downloads: 2341,
      rating: 4.6,
      liked: true,
      author: "Prof. João Santos",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Biblioteca de Recursos Pedagógicos
          </h1>
          <p className="text-gray-600">
            Descubra milhares de materiais prontos para enriquecer suas aulas
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar recursos, temas, autores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtros Avançados
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant="secondary"
                className="cursor-pointer hover:bg-edu-primary hover:text-white transition-colors"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filtros</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="type" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="type">Tipo</TabsTrigger>
                    <TabsTrigger value="level">Nível</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="type" className="space-y-2 mt-4">
                    {["Plano de Aula", "Atividade", "Vídeo", "Material", "Avaliação"].map((type) => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="level" className="space-y-2 mt-4">
                    {["Educação Infantil", "Ensino Fundamental I", "Ensino Fundamental II", "Ensino Médio"].map((level) => (
                      <label key={level} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{level}</span>
                      </label>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Mostrando {resources.length} de 1.247 recursos
              </p>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Mais relevantes</option>
                <option>Mais baixados</option>
                <option>Melhor avaliados</option>
                <option>Mais recentes</option>
              </select>
            </div>

            <div className="space-y-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-edu-light rounded-lg flex items-center justify-center">
                              <Icon className="h-6 w-6 text-edu-primary" />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900 hover:text-edu-primary cursor-pointer">
                                  {resource.title}
                                </h3>
                                <Button variant="ghost" size="sm">
                                  <Heart className={`h-4 w-4 ${resource.liked ? 'fill-red-500 text-red-500' : ''}`} />
                                </Button>
                              </div>
                              
                              <p className="text-gray-600 mb-3">
                                {resource.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="outline">{resource.category}</Badge>
                                <Badge variant="outline">{resource.type}</Badge>
                                <Badge variant="outline">{resource.level}</Badge>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span>Por {resource.author}</span>
                                  <div className="flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span>{resource.rating}</span>
                                  </div>
                                  <span>{resource.downloads} downloads</span>
                                </div>
                                
                                <Button size="sm" className="bg-edu-primary hover:bg-edu-primary/90">
                                  <Download className="h-4 w-4 mr-2" />
                                  Baixar
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Anterior</Button>
                <Button variant="outline" size="sm" className="bg-edu-primary text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Próximo</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
