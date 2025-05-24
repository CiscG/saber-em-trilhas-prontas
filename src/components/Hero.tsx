
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-edu-dark mb-6">
            Transforme sua
            <span className="text-transparent bg-clip-text bg-gradient-edu block">
              Prática Pedagógica
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Biblioteca completa de recursos, área colaborativa, gerador inteligente 
            e trilhas de formação para docentes inovadores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-edu hover:opacity-90 px-8 py-3">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Ver Demonstração
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link
              to="/biblioteca"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                📚
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Biblioteca</h3>
              <p className="text-sm text-gray-600">Recursos prontos</p>
            </Link>

            <Link
              to="/colaboracao"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                👥
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Colaboração</h3>
              <p className="text-sm text-gray-600">Troque experiências</p>
            </Link>

            <Link
              to="/gerador"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                ✨
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Gerador</h3>
              <p className="text-sm text-gray-600">IA para conteúdo</p>
            </Link>

            <Link
              to="/trilhas"
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                🎓
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Trilhas</h3>
              <p className="text-sm text-gray-600">Formação rápida</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
