
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Heart, Star } from "lucide-react";

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

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
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
  );
};

export default ResourceCard;
