
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Zap } from "lucide-react";

const QuickTips = () => {
  const tips = [
    "Comece pela trilha básica mesmo se já usa a plataforma",
    "Pratique cada funcionalidade durante a trilha",
    "Participe dos fóruns de discussão para tirar dúvidas"
  ];

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <Lightbulb className="h-5 w-5" />
          Dicas Rápidas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-sm">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p className="text-orange-700">{tip}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickTips;
