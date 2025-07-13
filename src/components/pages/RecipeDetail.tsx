/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  ChefHat, 
  Heart,
  Download,
  Share2,
  Plus,
  Minus,
  CheckCircle2
} from 'lucide-react';
import { Page } from '@/App';
import { Recipe } from '@/types/recipe';
import { useTheme } from '@/components/theme-provider';
import { Switch } from '@/components/ui/switch';

interface RecipeDetailProps {
  recipe: Recipe;
  onNavigate: (page: Page) => void;
}

export default function RecipeDetail({ recipe, onNavigate }: RecipeDetailProps) {
  const [servings, setServings] = useState(recipe.servings);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [isLiked, setIsLiked] = useState(false);
  const [isMetric, setIsMetric] = useState(true);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const adjustServings = (newServings: number) => {
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  const toggleStepCompletion = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const multiplier = servings / recipe.servings;

  const adjustIngredientAmount = (amount: string, _unit: string) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return amount;
    
    const adjustedAmount = (numAmount * multiplier).toFixed(1);
    return adjustedAmount.endsWith('.0') ? parseInt(adjustedAmount).toString() : adjustedAmount;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => onNavigate('recipes')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Recipes
              </Button>
              <div className="flex items-center space-x-2">
                <ChefHat className="h-6 w-6 text-zinc-900 dark:text-white" />
                <span className="text-xl font-bold text-zinc-900 dark:text-white">Khana Khazana</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Light</span>
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
                <span className="text-sm text-muted-foreground">Dark</span>
              </div>
              <Button variant="outline" onClick={() => onNavigate('ai-assistant')}>
                AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Ingredients */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Ingredients</h2>
                    <div className="flex items-center space-x-2 text-sm">
                      <Badge variant="outline" className={isMetric ? 'bg-primary text-primary-foreground' : ''}>
                        Metric
                      </Badge>
                      <Switch
                        checked={!isMetric}
                        onCheckedChange={() => setIsMetric(!isMetric)}
                      />
                      <Badge variant="outline" className={!isMetric ? 'bg-primary text-primary-foreground' : ''}>
                        US
                      </Badge>
                    </div>
                  </div>

                  {/* Servings Adjuster */}
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg mb-6">
                    <span className="font-medium">{servings} serving{servings !== 1 ? 's' : ''}</span>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => adjustServings(servings - 1)}
                        disabled={servings <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{servings}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => adjustServings(servings + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Ingredients List */}
                  <div className="space-y-4">
                    {recipe.ingredients.map((ingredient, _index) => (
                      <div key={ingredient.id} className="flex items-center space-x-3 p-3 hover:bg-muted/30 rounded-lg transition-colors">
                        <div className="text-2xl">{ingredient.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{ingredient.name}</span>
                            <span className="font-semibold text-primary">
                              {adjustIngredientAmount(ingredient.amount, ingredient.unit)}{ingredient.unit}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Recipe Details and Steps */}
          <div className="lg:col-span-8">
            {/* Recipe Header */}
            <div className="relative mb-8">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {recipe.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {recipe.cuisine}
                    </Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{recipe.title}</h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{recipe.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Prep: {recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Cook: {recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">{recipe.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Separator className="my-8" />

            {/* Directions */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Directions</h2>
              <div className="space-y-6">
                {recipe.steps.map((step, index) => (
                  <Card 
                    key={step.id} 
                    className={`border-border/50 transition-all ${
                      completedSteps.has(step.id) ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Button
                          variant={completedSteps.has(step.id) ? "default" : "outline"}
                          size="sm"
                          className={`
                            flex-shrink-0 h-8 w-8 p-0 rounded-full
                            ${completedSteps.has(step.id) 
                              ? 'bg-green-600 hover:bg-green-700 text-white' 
                              : 'border-2'
                            }
                          `}
                          onClick={() => toggleStepCompletion(step.id)}
                        >
                          {completedSteps.has(step.id) ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <span className="text-sm font-bold">{index + 1}</span>
                          )}
                        </Button>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className={`text-xl font-semibold ${
                              completedSteps.has(step.id) ? 'line-through text-muted-foreground' : ''
                            }`}>
                              {step.title}
                            </h3>
                            {step.time && (
                              <Badge variant="outline" className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {step.time}
                              </Badge>
                            )}
                          </div>
                          
                          <p className={`text-muted-foreground leading-relaxed ${
                            completedSteps.has(step.id) ? 'line-through' : ''
                          }`}>
                            {step.description}
                          </p>
                          
                          {step.ingredients && step.ingredients.length > 0 && (
                            <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                              <h4 className="font-medium mb-2 text-sm">Ingredients for this step:</h4>
                              <div className="flex flex-wrap gap-2">
                                {step.ingredients.map((ingredient) => (
                                  <div key={ingredient.id} className="flex items-center space-x-2 text-sm">
                                    <span>{ingredient.icon}</span>
                                    <span>{ingredient.name}</span>
                                    <span className="font-medium">
                                      {adjustIngredientAmount(ingredient.amount, ingredient.unit)}{ingredient.unit}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Completion Message */}
            {completedSteps.size === recipe.steps.length && (
              <Card className="mt-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                    Congratulations! 🎉
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    You've completed all the steps for {recipe.title}. Enjoy your delicious meal!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}