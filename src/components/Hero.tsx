
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-edu-dark mb-6">
            Plataforma Gamificada para
            <span className="text-transparent bg-clip-text bg-gradient-edu block">
              Docentes do Ensino Fundamental
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Biblioteca de recursos pedagógicos, gerador inteligente com IA e trilhas 
            de formação para professores do 1º ao 9º ano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/biblioteca">
              <Button size="lg" className="bg-gradient-edu hover:opacity-90 px-8 py-3">
                Explorar Recursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/gerador">
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Gerar Conteúdo com IA
              </Button>
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/biblioteca"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                📚
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Biblioteca de Recursos</h3>
              <p className="text-sm text-gray-600">Materiais prontos para 1º ao 9º ano</p>
              <div className="mt-2 text-xs text-blue-600">• Upload de materiais • Filtros avançados</div>
            </Link>

            <Link
              to="/gerador"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                ✨
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Gerador Inteligente</h3>
              <p className="text-sm text-gray-600">IA DeepSeek para criar conteúdos</p>
              <div className="mt-2 text-xs text-purple-600">• Validação docente • Compartilhamento</div>
            </Link>

            <Link
              to="/trilhas"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                🎓
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Trilhas de Formação</h3>
              <p className="text-sm text-gray-600">Capacitação rápida e gamificada</p>
              <div className="mt-2 text-xs text-orange-600">• Sistema de pontos • Certificados</div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Focado exclusivamente no Ensino Fundamental
            </p>
            <div className="flex justify-center gap-4 text-xs text-gray-400">
              <span>• 1º ao 9º ano</span>
              <span>• Alinhado à BNCC</span>
              <span>• Validação pedagógica</span>
              <span>• IA integrada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
