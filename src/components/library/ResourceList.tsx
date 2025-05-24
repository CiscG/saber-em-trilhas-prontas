
import { Button } from "@/components/ui/button";
import ResourceCard from "./ResourceCard";

interface Resource {
  id: number;
  nome: string;
  descricao: string;
  autor: string;
  disciplina: string;
  ano: string;
  tipo: string;
  downloads: number;
  rating: number;
  liked: boolean;
  dataUpload: string;
}

interface ResourceListProps {
  resources: Resource[];
}

const ResourceList = ({ resources }: ResourceListProps) => {
  return (
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
          <ResourceCard key={resource.id} resource={resource} />
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
  );
};

export default ResourceList;
