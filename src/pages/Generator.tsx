
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, FileText, HelpCircle, Brain, Download, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Generator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simular geração de conteúdo
    setTimeout(() => {
      setGeneratedContent("Aqui está o conteúdo gerado pela IA baseado nos seus parâmetros...");
      setIsGenerating(false);
      toast({
        title: "Conteúdo gerado com sucesso!",
        description: "Seu material pedagógico está pronto para uso.",
      });
    }, 2000);
  };

  const templates = [
    {
      id: "lesson-plan",
      title: "Plano de Aula",
      description: "Crie planos de aula estruturados e detalhados",
      icon: FileText,
      popular: true
    },
    {
      id: "questions",
      title: "Banco de Questões",
      description: "Gere questões personalizadas para avaliações",
      icon: HelpCircle,
      popular: true
    },
    {
      id: "activities",
      title: "Atividades Práticas",
      description: "Desenvolva atividades interativas e engajantes",
      icon: Brain,
      popular: false
    }
  ];

  const examples = [
    {
      title: "Plano de Aula: Sistema Solar",
      subject: "Ciências",
      level: "5º Ano",
      duration: "50 min"
    },
    {
      title: "Questões: Revolução Industrial",
      subject: "História", 
      level: "8º Ano",
      duration: "30 questões"
    },
    {
      title: "Atividade: Frações na Prática",
      subject: "Matemática",
      level: "6º Ano", 
      duration: "40 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gerador Inteligente de Conteúdos
          </h1>
          <p className="text-gray-600">
            Crie materiais pedagógicos personalizados com inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Generator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-edu-primary" />
                  Criar Novo Conteúdo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="lesson-plan" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="lesson-plan">Plano de Aula</TabsTrigger>
                    <TabsTrigger value="questions">Questões</TabsTrigger>
                    <TabsTrigger value="activities">Atividades</TabsTrigger>
                  </TabsList>

                  <TabsContent value="lesson-plan" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Disciplina</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a disciplina" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="matematica">Matemática</SelectItem>
                            <SelectItem value="portugues">Português</SelectItem>
                            <SelectItem value="ciencias">Ciências</SelectItem>
                            <SelectItem value="historia">História</SelectItem>
                            <SelectItem value="geografia">Geografia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Nível de Ensino</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o nível" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fundamental1">Ensino Fundamental I</SelectItem>
                            <SelectItem value="fundamental2">Ensino Fundamental II</SelectItem>
                            <SelectItem value="medio">Ensino Médio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tema da Aula</label>
                      <Input placeholder="Ex: Frações e suas aplicações no cotidiano" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Duração (minutos)</label>
                        <Input type="number" placeholder="50" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Objetivo Principal</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o objetivo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="introducao">Introdução ao tema</SelectItem>
                            <SelectItem value="pratica">Prática e exercícios</SelectItem>
                            <SelectItem value="revisao">Revisão e fixação</SelectItem>
                            <SelectItem value="avaliacao">Avaliação</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Descrição Adicional</label>
                      <Textarea 
                        placeholder="Descreva aspectos específicos que deseja incluir no plano de aula..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="w-full bg-edu-primary hover:bg-edu-primary/90"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Gerando Conteúdo...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          Gerar Plano de Aula
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="questions" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Disciplina</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a disciplina" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="matematica">Matemática</SelectItem>
                            <SelectItem value="portugues">Português</SelectItem>
                            <SelectItem value="ciencias">Ciências</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Quantidade</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Número de questões" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 questões</SelectItem>
                            <SelectItem value="10">10 questões</SelectItem>
                            <SelectItem value="20">20 questões</SelectItem>
                            <SelectItem value="30">30 questões</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tópico</label>
                      <Input placeholder="Ex: Equações do primeiro grau" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Questão</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multipla">Múltipla escolha</SelectItem>
                          <SelectItem value="dissertativa">Dissertativa</SelectItem>
                          <SelectItem value="verdadeiro">Verdadeiro ou Falso</SelectItem>
                          <SelectItem value="mista">Mista</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="w-full bg-edu-primary hover:bg-edu-primary/90"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Gerando Questões...
                        </>
                      ) : (
                        <>
                          <HelpCircle className="h-4 w-4 mr-2" />
                          Gerar Questões
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="activities" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Disciplina</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a disciplina" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="matematica">Matemática</SelectItem>
                            <SelectItem value="portugues">Português</SelectItem>
                            <SelectItem value="ciencias">Ciências</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Tipo de Atividade</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="jogo">Jogo educativo</SelectItem>
                            <SelectItem value="experimento">Experimento prático</SelectItem>
                            <SelectItem value="projeto">Projeto em grupo</SelectItem>
                            <SelectItem value="dinamica">Dinâmica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Objetivo da Atividade</label>
                      <Input placeholder="Ex: Desenvolver raciocínio lógico através de jogos" />
                    </div>

                    <Button 
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="w-full bg-edu-primary hover:bg-edu-primary/90"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Gerando Atividade...
                        </>
                      ) : (
                        <>
                          <Brain className="h-4 w-4 mr-2" />
                          Gerar Atividade
                        </>
                      )}
                    </Button>
                  </TabsContent>
                </Tabs>

                {/* Generated Content Display */}
                {generatedContent && (
                  <Card className="mt-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Conteúdo Gerado</CardTitle>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copiar
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Baixar
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700">{generatedContent}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Templates */}
            <Card>
              <CardHeader>
                <CardTitle>Templates Populares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {templates.map((template) => {
                  const Icon = template.icon;
                  return (
                    <div key={template.id} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-edu-primary mt-0.5" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-sm">{template.title}</h4>
                            {template.popular && <Badge variant="secondary" className="text-xs">Popular</Badge>}
                          </div>
                          <p className="text-xs text-gray-600">{template.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Exemplos Recentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {examples.map((example, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <h4 className="font-medium text-sm mb-2">{example.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">{example.subject}</Badge>
                      <Badge variant="outline" className="text-xs">{example.level}</Badge>
                      <Badge variant="outline" className="text-xs">{example.duration}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
