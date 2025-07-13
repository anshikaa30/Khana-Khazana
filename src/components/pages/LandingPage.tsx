import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Star, 
  Clock, 
  Users, 
  Smartphone, 
  Search,
  Heart,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { Page } from '@/App';
import { useTheme } from '@/components/theme-provider';
import { Switch } from '@/components/ui/switch';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-zinc-900 dark:text-white" />
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">Khana Khazana</span>
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
              <Button variant="outline" onClick={() => onNavigate('recipes')}>
                Browse Recipes
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="h-4 w-4 mr-1" />
              Browse thousands of delicious recipes
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent leading-tight">
              The recipe app for every home chef!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Find delicious recipes, cook with confidence, and share your creations—all in one professional app!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => onNavigate('recipes')}
                className="bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Recipes
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onNavigate('ai-assistant')}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                AI Recipe Assistant
              </Button>
            </div>

            {/* Customer Reviews */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-background"></div>
                </div>
                <span className="ml-3 text-sm text-muted-foreground">Our happy customers</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">5.0 (2.4k reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Khana Khazana?</h2>
            <p className="text-xl text-muted-foreground">Professional features for the modern home chef</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Recipe Search</h3>
                <p className="text-muted-foreground">Find the perfect recipe based on ingredients you have, cooking time, or dietary preferences.</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Recipe Assistant</h3>
                <p className="text-muted-foreground">Get personalized recipe suggestions based on what's in your kitchen right now.</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Save Favorites</h3>
                <p className="text-muted-foreground">Bookmark your favorite recipes and create personalized collections for easy access.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Cooking made simple and delightful</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our intuitive interface makes it easy to find, follow, and master any recipe. 
                From beginner-friendly dishes to advanced culinary creations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quick & Easy Cooking</h4>
                    <p className="text-muted-foreground">Step-by-step instructions with precise timing for perfect results every time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Perfect Portions</h4>
                    <p className="text-muted-foreground">Automatically adjust ingredients for any number of servings.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mobile Optimized</h4>
                    <p className="text-muted-foreground">Cook with your phone or tablet - recipes that work on any device.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <Card className="max-w-sm mx-auto bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <ChefHat className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold">What's cooking today?</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="text-xs">Breakfast</Button>
                        <Button variant="outline" size="sm" className="text-xs">Lunch</Button>
                        <Button variant="outline" size="sm" className="text-xs">Dinner</Button>
                        <Button variant="outline" size="sm" className="text-xs">Snacks</Button>
                      </div>
                      
                      <div className="bg-white dark:bg-zinc-900 p-3 rounded-lg">
                        <h4 className="font-medium text-sm mb-2">Trending Recipe</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded"></div>
                          <div className="flex-1">
                            <p className="text-xs font-medium">Butter Chicken</p>
                            <p className="text-xs text-muted-foreground">45 mins • 4 servings</p>
                          </div>
                          <Heart className="h-4 w-4 text-red-500" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-zinc-900 dark:bg-zinc-950 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start cooking?</h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Join thousands of home chefs who have transformed their cooking with Khana Khazana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('recipes')}
              className="bg-white text-zinc-900 hover:bg-zinc-100"
            >
              Start Cooking Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('ai-assistant')}
              className="border-zinc-600 text-white hover:bg-zinc-800"
            >
              Try AI Assistant
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/40">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-6 w-6" />
            <span className="text-lg font-semibold">Khana Khazana</span>
          </div>
          <p className="text-muted-foreground">
            Your ultimate destination for authentic and delicious recipes.
          </p>
        </div>
      </footer>
    </div>
  );
}