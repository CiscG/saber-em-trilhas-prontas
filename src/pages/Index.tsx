
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Sparkles, GraduationCap, CheckCircle, Star } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Biblioteca de Recursos",
      description: "Milhares de materiais pedagógicos prontos para uso, organizados por disciplina e nível educacional.",
      items: ["Planos de aula", "Atividades práticas", "Avaliações", "Material multimídia"]
    },
    {
      icon: Users,
      title: "Área Colaborativa",
      description: "Conecte-se com outros educadores, compartilhe experiências e construa conhecimento em conjunto.",
      items: ["Fóruns de discussão", "Grupos temáticos", "Mentoria", "Eventos online"]
    },
    {
      icon: Sparkles,
      title: "Gerador Inteligente",
      description: "IA avançada para criar conteúdos personalizados, questões e atividades adaptadas ao seu contexto.",
      items: ["Geração de questões", "Planos personalizados", "Adaptação de conteúdo", "Sugestões criativas"]
    },
    {
      icon: GraduationCap,
      title: "Trilhas de Formação",
      description: "Cursos rápidos e práticos para desenvolvimento profissional contínuo e atualização pedagógica.",
      items: ["Metodologias ativas", "Tecnologia educacional", "Gestão de sala", "Avaliação formativa"]
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Professora de Matemática",
      content: "Revolucionou minha forma de preparar aulas. O gerador de conteúdo me economiza horas de trabalho!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Coordenador Pedagógico",
      content: "A área colaborativa criou uma rede incrível de troca entre nossa equipe. Resultados visíveis!",
      rating: 5
    },
    {
      name: "Maria Costa",
      role: "Professora de História",
      content: "As trilhas de formação são práticas e aplicáveis. Já implementei várias metodologias aprendidas.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Recursos Completos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tudo que você precisa em uma plataforma
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra como nossa plataforma pode transformar sua prática educacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-edu rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-edu-secondary mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que dizem nossos educadores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-edu">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua educação?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de educadores que já estão revolucionando suas práticas pedagógicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-edu-primary">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
