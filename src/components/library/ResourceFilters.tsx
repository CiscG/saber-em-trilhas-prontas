
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface ResourceFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ResourceFilters = ({ searchTerm, setSearchTerm }: ResourceFiltersProps) => {
  const disciplinas = [
    "Matemática", "Língua Portuguesa", "História", "Geografia", 
    "Ciências", "Educação Física", "Artes", "Inglês"
  ];

  const anos = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano", "6º ano", "7º ano", "8º ano", "9º ano"];

  return (
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
  );
};

export default ResourceFilters;
