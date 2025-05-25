
import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { tracks, categories, achievements } from "@/data/learningData";
import TrackCard from "@/components/learning/TrackCard";
import ProgressSummary from "@/components/learning/ProgressSummary";
import AchievementsList from "@/components/learning/AchievementsList";
import QuickTips from "@/components/learning/QuickTips";
import LearningStreak from "@/components/learning/LearningStreak";
import CategoryFilters from "@/components/learning/CategoryFilters";

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTracks = selectedCategory === "all" 
    ? tracks 
    : tracks.filter(track => track.category === selectedCategory);

  const totalProgress = Math.round(tracks.reduce((acc, track) => acc + track.progress, 0) / tracks.length);
  const completedTracks = tracks.filter(track => track.progress === 100).length;
  const inProgressTracks = tracks.filter(track => track.progress > 0 && track.progress < 100).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎓 Trilhas de Capacitação da Plataforma
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aprenda a usar todas as funcionalidades da nossa plataforma educacional. 
            Do básico ao avançado, temos trilhas para todos os níveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <CategoryFilters categories={categories} />

              <TabsContent value={selectedCategory} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTracks.map((track) => (
                    <TrackCard key={track.id} track={track} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ProgressSummary 
              totalProgress={totalProgress}
              completedTracks={completedTracks}
              inProgressTracks={inProgressTracks}
              totalTracks={tracks.length}
            />
            <QuickTips />
            <AchievementsList achievements={achievements} />
            <LearningStreak />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
