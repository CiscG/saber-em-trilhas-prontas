
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LearningStreak = () => {
  const streakDays = 5;
  const totalDays = 7;

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <CardHeader>
        <CardTitle className="text-green-800">Sequência de Aprendizado</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">{streakDays}</div>
          <p className="text-sm text-green-700 mb-4">dias consecutivos</p>
          <div className="flex justify-center gap-1">
            {[...Array(totalDays)].map((_, i) => (
              <div 
                key={i}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  i < streakDays 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {i < streakDays ? '✓' : '·'}
              </div>
            ))}
          </div>
          <p className="text-xs text-green-600 mt-2">
            Continue por mais 2 dias para quebrar seu recorde!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningStreak;
