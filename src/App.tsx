import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import LandingPage from '@/components/pages/LandingPage';
import RecipeList from '@/components/pages/RecipeList';
import RecipeDetail from '@/components/pages/RecipeDetail';
import AIAssistant from '@/components/pages/AIAssistant';
import { Recipe } from '@/types/recipe';

export type Page = 'landing' | 'recipes' | 'recipe-detail' | 'ai-assistant';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setCurrentPage('recipe-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'recipes':
        return <RecipeList onNavigate={handleNavigate} onRecipeSelect={handleRecipeSelect} />;
      case 'recipe-detail':
        return selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onNavigate={handleNavigate} />
        ) : (
          <LandingPage onNavigate={handleNavigate} />
        );
      case 'ai-assistant':
        return <AIAssistant onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="khana-khazana-theme">
      <div className="min-h-screen bg-background text-foreground mx-auto">
        {renderPage()}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;