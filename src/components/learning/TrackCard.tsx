
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Star, Play, CheckCircle, BookOpen } from "lucide-react";

interface Track {
  id: number;
  title: string;
  description: string;
  duration: string;
  modules: number;
  students: number;
  rating: number;
  level: string;
  category: string;
  progress: number;
  instructor: string;
  skills: string[];
  image: string;
  lessons: string[];
}

interface TrackCardProps {
  track: Track;
}

const getProgressText = (progress: number) => {
  if (progress === 0) return "Não iniciado";
  if (progress < 100) return "Em andamento";
  return "Concluído";
};

const TrackCard = ({ track }: TrackCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-white">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{track.image}</div>
            <div>
              <CardTitle className="text-lg mb-1">{track.title}</CardTitle>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                {track.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{track.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {track.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {track.modules} módulos
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {track.students.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{track.rating}</span>
          </div>
          <Badge 
            variant="secondary" 
            className={`text-xs ${
              track.level === 'Iniciante' ? 'bg-green-100 text-green-700' :
              track.level === 'Intermediário' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}
          >
            {track.level}
          </Badge>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progresso</span>
            <span className="text-sm text-gray-500">{track.progress}%</span>
          </div>
          <Progress value={track.progress} className="h-2" />
          <span className="text-xs text-gray-500 mt-1">
            {getProgressText(track.progress)}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {track.skills.slice(0, 2).map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs bg-gray-50">
              {skill}
            </Badge>
          ))}
          {track.skills.length > 2 && (
            <Badge variant="outline" className="text-xs bg-gray-50">
              +{track.skills.length - 2} mais
            </Badge>
          )}
        </div>

        <Button 
          className="w-full"
          variant={track.progress === 0 ? "default" : "outline"}
        >
          {track.progress === 0 && (
            <>
              <Play className="h-4 w-4 mr-2" />
              Iniciar Trilha
            </>
          )}
          {track.progress > 0 && track.progress < 100 && (
            <>
              <Play className="h-4 w-4 mr-2" />
              Continuar
            </>
          )}
          {track.progress === 100 && (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Revisar
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrackCard;
