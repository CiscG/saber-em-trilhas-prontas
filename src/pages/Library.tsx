
import { useState } from "react";
import Header from "@/components/Header";
import LibraryHeader from "@/components/library/LibraryHeader";
import ResourceFilters from "@/components/library/ResourceFilters";
import ResourceList from "@/components/library/ResourceList";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploadOpen, setIsUploadOpen] = useState(false);

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
        <LibraryHeader 
          isUploadOpen={isUploadOpen} 
          setIsUploadOpen={setIsUploadOpen} 
        />

        <ResourceFilters 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ResourceList resources={resources} />
        </div>
      </div>
    </div>
  );
};

export default Library;
