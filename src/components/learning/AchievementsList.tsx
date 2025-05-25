
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface Achievement {
  name: string;
  icon: string;
  unlocked: boolean;
  description: string;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList = ({ achievements }: AchievementsListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-edu-primary" />
          Conquistas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                achievement.unlocked 
                  ? 'bg-green-50 border border-green-200 shadow-sm' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="text-2xl">
                {achievement.unlocked ? achievement.icon : '🔒'}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  achievement.unlocked ? 'text-green-700' : 'text-gray-500'
                }`}>
                  {achievement.name}
                </p>
                <p className={`text-xs ${
                  achievement.unlocked ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsList;
