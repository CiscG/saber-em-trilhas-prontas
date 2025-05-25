
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Target } from "lucide-react";

interface ProgressSummaryProps {
  totalProgress: number;
  completedTracks: number;
  inProgressTracks: number;
  totalTracks: number;
}

const ProgressSummary = ({ 
  totalProgress, 
  completedTracks, 
  inProgressTracks, 
  totalTracks 
}: ProgressSummaryProps) => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <GraduationCap className="h-5 w-5" />
          Meu Progresso
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{totalProgress}%</div>
            <p className="text-sm text-blue-700">Progresso Geral</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-blue-700">Trilhas Iniciadas</span>
              <span className="font-medium text-blue-800">{inProgressTracks + completedTracks}/{totalTracks}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-700">Trilhas Concluídas</span>
              <span className="font-medium text-blue-800">{completedTracks}/{totalTracks}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-700">Horas de Capacitação</span>
              <span className="font-medium text-blue-800">18h</span>
            </div>
          </div>
          
          <div className="pt-3 border-t border-blue-200">
            <div className="flex items-center gap-2 text-sm text-blue-700 mb-2">
              <Target className="h-4 w-4" />
              Próximo Objetivo
            </div>
            <p className="text-xs text-blue-600">
              Complete mais 2 trilhas para desbloquear o badge "Expert da Plataforma"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressSummary;
