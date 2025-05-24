
import { useState } from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Download, Heart, Star, Upload, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const disciplinas = [
    "Matemática", "Língua Portuguesa", "História", "Geografia", 
    "Ciências", "Educação Física", "Artes", "Inglês"
  ];

  const anos = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano", "6º ano", "7º ano", "8º ano", "9º ano"];

  const resources = [
    {
      id: 1,
      nome: "Frações na Prática do Dia a Dia",
      descricao: "Material completo sobre frações com exemplos práticos usando situações cotidianas como receitas, divisão de pizza e medidas.",
      autor: "Prof. Ana Silva",
      disciplina: "Matemática",
      ano: "4º ano",
      tipo: "Gratuito",
      downloads: 1234,
      rating: 4.8,
      liked: false,
      dataUpload: "15/05/2024"
    },
    {
      id: 2,
      nome: "Sistema Solar Interativo",
      descricao: "Apresentação com atividades práticas sobre os planetas, incluindo experimentos simples e observação astronômica.",
      autor: "Prof. Carlos Mendes",
      disciplina: "Ciências",
      ano: "5º ano",
      tipo: "Gratuito",
      downloads: 856,
      rating: 4.9,
      liked: true,
      dataUpload: "12/05/2024"
    },
    {
      id: 3,
      nome: "Brasil Colonial - Jogos Educativos",
      descricao: "Conjunto de jogos e atividades lúdicas para ensinar sobre o período colonial brasileiro de forma interativa.",
      autor: "Prof. Maria Costa",
      disciplina: "História",
      ano: "7º ano",
      tipo: "Pago",
      downloads: 567,
      rating: 4.7,
      liked: false,
      dataUpload: "10/05/2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Biblioteca de Recursos Pedagógicos
              </h1>
              <p className="text-gray-600">
                Materiais prontos para o Ensino Fundamental (1º ao 9º ano)
              </p>
            </div>
            
            <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
              <DialogTrigger asChild>
                <Button className="bg-edu-primary hover:bg-edu-primary/90">
                  <Upload className="h-4 w-4 mr-2" />
                  Enviar Recurso
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Cadastrar Novo Recurso Pedagógico</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div>
                    <Label htmlFor="nome">Nome do Recurso *</Label>
                    <Input id="nome" placeholder="Digite o nome de identificação do recurso" />
                  </div>
                  
                  <div>
                    <Label htmlFor="descricao">Descrição Detalhada (Opcional)</Label>
                    <Textarea 
                      id="descricao" 
                      placeholder="Descreva detalhadamente as informações do recurso..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="disciplina">Disciplina *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a disciplina" />
                        </SelectTrigger>
                        <SelectContent>
                          {disciplinas.map((disciplina) => (
                            <SelectItem key={disciplina} value={disciplina.toLowerCase()}>
                              {disciplina}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="ano">Ano *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o ano" />
                        </SelectTrigger>
                        <SelectContent>
                          {anos.map((ano) => (
                            <SelectItem key={ano} value={ano}>
                              {ano}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="tipo">Tipo de Material *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gratuito">Gratuito</SelectItem>
                        <SelectItem value="pago">Pago</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="arquivo">Arquivo do Material</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Clique para enviar ou arraste o arquivo aqui
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX, PPT, PPTX até 50MB</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setIsUploadOpen(false)}>
                      Cancelar
                    </Button>
                    <Button className="bg-edu-primary hover:bg-edu-primary/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Cadastrar Recurso
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="md:col-span-2">
              <Label htmlFor="search">Buscar por nome ou descrição</Label>
              <div className="relative mt-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Digite o nome do recurso ou palavras-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="filter-disciplina">Disciplina</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Todas as disciplinas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as disciplinas</SelectItem>
                  {disciplinas.map((disciplina) => (
                    <SelectItem key={disciplina} value={disciplina.toLowerCase()}>
                      {disciplina}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="filter-ano">Ano</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Todos os anos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os anos</SelectItem>
                  {anos.map((ano) => (
                    <SelectItem key={ano} value={ano}>
                      {ano}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="filter-tipo">Tipo de Material</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Todos os tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os tipos</SelectItem>
                  <SelectItem value="gratuito">Gratuito</SelectItem>
                  <SelectItem value="pago">Pago</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="filter-autor">Autor</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Todos os autores" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os autores</SelectItem>
                  <SelectItem value="ana">Prof. Ana Silva</SelectItem>
                  <SelectItem value="carlos">Prof. Carlos Mendes</SelectItem>
                  <SelectItem value="maria">Prof. Maria Costa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Aplicar Filtros
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Mostrando {resources.length} de 347 recursos disponíveis
              </p>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Mais relevantes</option>
                <option>Mais baixados</option>
                <option>Melhor avaliados</option>
                <option>Mais recentes</option>
              </select>
            </div>

            <div className="space-y-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-edu-light rounded-lg flex items-center justify-center">
                            📚
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-edu-primary cursor-pointer">
                                {resource.nome}
                              </h3>
                              <Button variant="ghost" size="sm">
                                <Heart className={`h-4 w-4 ${resource.liked ? 'fill-red-500 text-red-500' : ''}`} />
                              </Button>
                            </div>
                            
                            <p className="text-gray-600 mb-3">
                              {resource.descricao}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge variant="outline">{resource.disciplina}</Badge>
                              <Badge variant="outline">{resource.ano}</Badge>
                              <Badge 
                                variant={resource.tipo === "Gratuito" ? "default" : "secondary"}
                                className={resource.tipo === "Gratuito" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}
                              >
                                {resource.tipo}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>Por {resource.autor}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span>{resource.rating}</span>
                                </div>
                                <span>{resource.downloads} downloads</span>
                                <span>Enviado em {resource.dataUpload}</span>
                              </div>
                              
                              <Button size="sm" className="bg-edu-primary hover:bg-edu-primary/90">
                                <Download className="h-4 w-4 mr-2" />
                                {resource.tipo === "Pago" ? "Comprar" : "Baixar"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
