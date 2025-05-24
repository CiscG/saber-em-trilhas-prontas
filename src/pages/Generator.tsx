
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Check, X, Share, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Generator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const { toast } = useToast();

  const disciplinas = [
    "Matemática", "Língua Portuguesa", "História", "Geografia", 
    "Ciências", "Educação Física", "Artes", "Inglês"
  ];

  const anos = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano", "6º ano", "7º ano", "8º ano", "9º ano"];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simular integração com DeepSeek
    setTimeout(() => {
      setGeneratedContent(`
# Aula: Segunda Guerra Mundial - Dia D

## Objetivo da Aula
Compreender a importância estratégica da Operação Overlord (Dia D) no contexto da Segunda Guerra Mundial, focando na logística da frota aliada.

## Introdução (10 minutos)
- Contextualização histórica: situação da Europa em 1944
- Apresentação do mapa da Europa ocupada pelos nazistas

## Desenvolvimento (25 minutos)

### A Logística da Frota Aliada
1. **Planejamento da Operação**
   - Coordenação entre Estados Unidos, Reino Unido e Canadá
   - Preparação de milhares de embarcações

2. **A Travesia do Atlântico**
   - Rotas marítimas utilizadas
   - Desafios enfrentados durante a viagem
   - Tipos de embarcações: navios de guerra, transportes, lanchas de desembarque

3. **Chegada à Normandia**
   - Escolha das praias de desembarque
   - Estratégias de aproximação
   - Coordenação com a resistência francesa

## Atividade Prática (10 minutos)
- Análise de mapas da época
- Discussão sobre os desafios logísticos enfrentados

## Conclusão (5 minutos)
- Importância do Dia D para o fim da guerra
- Reflexão sobre cooperação internacional

## Material Necessário
- Mapas da Europa (1944)
- Imagens históricas da frota aliada
- Vídeo documentário (opcional)

## Avaliação
- Participação nas discussões
- Compreensão dos conceitos apresentados
      `);
      setIsGenerating(false);
      toast({
        title: "Conteúdo gerado com sucesso!",
        description: "Material criado pela IA DeepSeek e pronto para validação.",
      });
    }, 3000);
  };

  const handleValidation = (approved: boolean) => {
    if (approved) {
      setIsValidated(true);
      toast({
        title: "Conteúdo aprovado!",
        description: "O material foi validado e está pronto para ser compartilhado.",
      });
    } else {
      setGeneratedContent("");
      setIsValidated(false);
      toast({
        title: "Conteúdo reprovado",
        description: "O material foi rejeitado. Gere um novo conteúdo ou ajuste os parâmetros.",
        variant: "destructive"
      });
    }
  };

  const handleShare = () => {
    setShowShareDialog(true);
  };

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
            Crie materiais pedagógicos personalizados para o Ensino Fundamental com IA
          </p>
          <div className="flex items-center gap-2 mt-3">
            <Badge className="bg-blue-100 text-blue-800">
              <Bot className="h-3 w-3 mr-1" />
              Integração DeepSeek AI
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Generator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-edu-primary" />
                  Gerar Novo Material Pedagógico
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div>
                  <Label htmlFor="nomeConteudo">Nome do Conteúdo *</Label>
                  <Input 
                    id="nomeConteudo"
                    placeholder="Ex: Segunda Guerra Mundial" 
                  />
                </div>

                <div>
                  <Label htmlFor="assunto">Assunto *</Label>
                  <Input 
                    id="assunto"
                    placeholder="Ex: Dia D" 
                  />
                </div>

                <div>
                  <Label htmlFor="detalhamento">Detalhamento do Assunto *</Label>
                  <Textarea 
                    id="detalhamento"
                    placeholder="Ex: Hoje irei lecionar sobre a Logística da frota aliada que partiu dos estados unidos e chegou na Normandia"
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
                      Gerando com DeepSeek AI...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Gerar Conteúdo
                    </>
                  )}
                </Button>

                {/* Generated Content Display */}
                {generatedContent && (
                  <Card className="mt-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Conteúdo Gerado pela IA</CardTitle>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Bot className="h-3 w-3 mr-1" />
                          Aguardando Validação
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                        <pre className="text-gray-700 whitespace-pre-wrap font-sans text-sm">
                          {generatedContent}
                        </pre>
                      </div>
                      
                      {!isValidated && (
                        <div className="flex gap-3 mt-4">
                          <Button 
                            onClick={() => handleValidation(true)}
                            className="flex-1 bg-green-600 hover:bg-green-700"
                          >
                            <Check className="h-4 w-4 mr-2" />
                            Aprovar Conteúdo
                          </Button>
                          <Button 
                            onClick={() => handleValidation(false)}
                            variant="destructive"
                            className="flex-1"
                          >
                            <X className="h-4 w-4 mr-2" />
                            Reprovar Conteúdo
                          </Button>
                        </div>
                      )}
                      
                      {isValidated && (
                        <div className="mt-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className="bg-green-100 text-green-800">
                              <Check className="h-3 w-3 mr-1" />
                              Conteúdo Validado por Prof. João Silva
                            </Badge>
                          </div>
                          <Button 
                            onClick={handleShare}
                            className="w-full bg-edu-secondary hover:bg-edu-secondary/90"
                          >
                            <Share className="h-4 w-4 mr-2" />
                            Compartilhar na Biblioteca
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  DeepSeek AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Nossa IA utiliza o modelo DeepSeek para gerar conteúdos pedagógicos personalizados e alinhados com a BNCC.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Conectado</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Modelo: DeepSeek-V2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Generations */}
            <Card>
              <CardHeader>
                <CardTitle>Gerações Recentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Sistema Solar</h4>
                  <div className="flex gap-1 mb-2">
                    <Badge variant="outline" className="text-xs">Ciências</Badge>
                    <Badge variant="outline" className="text-xs">5º ano</Badge>
                  </div>
                  <p className="text-xs text-gray-600">Validado em 20/05/2024</p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Frações Decimais</h4>
                  <div className="flex gap-1 mb-2">
                    <Badge variant="outline" className="text-xs">Matemática</Badge>
                    <Badge variant="outline" className="text-xs">6º ano</Badge>
                  </div>
                  <p className="text-xs text-gray-600">Validado em 18/05/2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Share Dialog */}
        <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Compartilhar na Biblioteca</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <p className="text-sm text-gray-600">
                O conteúdo será compartilhado na biblioteca com os seguintes dados:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Nome:</span>
                  <span>Segunda Guerra Mundial - Dia D</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Disciplina:</span>
                  <span>História</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Ano:</span>
                  <span>9º ano</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Autor:</span>
                  <span>Prof. João Silva</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Tipo:</span>
                  <span>Gratuito</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-xs text-yellow-800">
                  ℹ️ Este conteúdo será identificado como "Gerado por IA e validado pelo Prof. João Silva"
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowShareDialog(false)}>
                  Cancelar
                </Button>
                <Button className="flex-1 bg-edu-primary hover:bg-edu-primary/90">
                  <Share className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Generator;
