import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ChefHat, 
  Sparkles, 
  Plus, 
  X, 
  Clock, 
  Users, 
  Star,
  Send,
  Bot,
  User,
  Lightbulb
} from 'lucide-react';
import { Page } from '@/App';
import { Recipe } from '@/types/recipe';
import { aiRecipeSuggestions } from '@/data/recipes';
import { useTheme } from '@/components/theme-provider';
import { Switch } from '@/components/ui/switch';

interface AIAssistantProps {
  onNavigate: (page: Page) => void;
}

interface Ingredient {
  name: string;
  amount: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  suggestions?: Recipe[];
  timestamp: Date;
}

export default function AIAssistant({ onNavigate }: AIAssistantProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [newIngredient, setNewIngredient] = useState({ name: '', amount: '' });
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI recipe assistant. Tell me what ingredients you have, and I'll suggest delicious recipes you can make!",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addIngredient = () => {
    if (newIngredient.name.trim()) {
      setIngredients([...ingredients, { ...newIngredient, name: newIngredient.name.trim() }]);
      setNewIngredient({ name: '', amount: '' });
    }
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const findRecipeSuggestions = () => {
    const userIngredients = ingredients.map(ing => ing.name.toLowerCase());
    
    // Find matching recipes from our hardcoded suggestions
    for (const suggestion of aiRecipeSuggestions) {
      const matches = suggestion.ingredients.filter(ing => 
        userIngredients.some(userIng => userIng.includes(ing) || ing.includes(userIng))
      );
      
      if (matches.length > 0) {
        return suggestion.suggestions;
      }
    }
    
    // Fallback: return first few recipes if no specific match
    return aiRecipeSuggestions[0]?.suggestions || [];
  };

  const handleGetSuggestions = () => {
    if (ingredients.length === 0) return;

    const suggestions = findRecipeSuggestions();
    const ingredientsList = ingredients.map(ing => `${ing.amount} ${ing.name}`).join(', ');
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: `I have: ${ingredientsList}${dietaryRestrictions ? `. Dietary restrictions: ${dietaryRestrictions}` : ''}${cookingTime ? `. Cooking time: ${cookingTime}` : ''}`,
      timestamp: new Date()
    };

    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: `Based on your ingredients, I found ${suggestions.length} perfect recipe${suggestions.length !== 1 ? 's' : ''} for you! Here are my top recommendations:`,
      suggestions: suggestions.map(s => s.recipe),
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage, aiResponse]);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    // Simple AI responses based on keywords
    let aiContent = "I'd be happy to help! ";
    
    if (inputMessage.toLowerCase().includes('vegetarian') || inputMessage.toLowerCase().includes('vegan')) {
      aiContent += "I have many delicious vegetarian recipes! Try our Paneer Tikka Masala or Dal Tadka.";
    } else if (inputMessage.toLowerCase().includes('quick') || inputMessage.toLowerCase().includes('fast')) {
      aiContent += "For quick meals, I recommend Chicken Tikka - it's ready in just 25 minutes!";
    } else if (inputMessage.toLowerCase().includes('spicy')) {
      aiContent += "If you love spicy food, Butter Chicken and Paneer Tikka Masala are perfect choices!";
    } else {
      aiContent += "Please add your available ingredients above, and I'll suggest the best recipes for you!";
    }

    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: aiContent,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage, aiResponse]);
    setInputMessage('');
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
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel - Ingredient Input */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    AI Recipe Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Add Ingredients */}
                  <div>
                    <h3 className="font-semibold mb-3">What ingredients do you have?</h3>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Ingredient name"
                          value={newIngredient.name}
                          onChange={(e) => setNewIngredient(prev => ({ ...prev, name: e.target.value }))}
                          onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                        />
                        <Input
                          placeholder="Amount"
                          className="w-20"
                          value={newIngredient.amount}
                          onChange={(e) => setNewIngredient(prev => ({ ...prev, amount: e.target.value }))}
                          onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                        />
                        <Button onClick={addIngredient} size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Current Ingredients */}
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {ingredients.map((ingredient, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded-md">
                            <span className="text-sm">
                              {ingredient.amount} {ingredient.name}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => removeIngredient(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dietary Restrictions */}
                  <div>
                    <h3 className="font-semibold mb-3">Dietary Restrictions (Optional)</h3>
                    <Textarea
                      placeholder="e.g., Vegetarian, Gluten-free, Low-carb..."
                      value={dietaryRestrictions}
                      onChange={(e) => setDietaryRestrictions(e.target.value)}
                      className="min-h-[60px]"
                    />
                  </div>

                  {/* Cooking Time */}
                  <div>
                    <h3 className="font-semibold mb-3">Available Cooking Time (Optional)</h3>
                    <Input
                      placeholder="e.g., 30 minutes, 1 hour..."
                      value={cookingTime}
                      onChange={(e) => setCookingTime(e.target.value)}
                    />
                  </div>

                  <Button 
                    onClick={handleGetSuggestions}
                    disabled={ingredients.length === 0}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Recipe Suggestions
                  </Button>

                  {/* Quick Suggestions */}
                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                      <span className="font-medium text-sm">Quick Suggestions</span>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>• Try "chicken, onion, tomato" for Butter Chicken</p>
                      <p>• Use "paneer, bell pepper" for Paneer Tikka</p>
                      <p>• Add "dal, turmeric" for healthy Dal recipes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Panel - Chat Interface */}
          <div className="lg:col-span-8">
            <Card className="h-[600px] flex flex-col border-border/50">
              <CardHeader className="border-b border-border/40">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-500" />
                  Recipe Chat Assistant
                </CardTitle>
              </CardHeader>
              
              {/* Chat Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' ? 'bg-blue-500' : 'bg-green-500'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      
                      <div className={`rounded-lg p-3 ${
                        message.type === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        
                        {/* Recipe Suggestions */}
                        {message.suggestions && (
                          <div className="mt-4 space-y-3">
                            {message.suggestions.map((recipe) => (
                              <Card key={recipe.id} className="bg-background border-border/50">
                                <CardContent className="p-4">
                                  <div className="flex items-start gap-3">
                                    <img
                                      src={recipe.image}
                                      alt={recipe.title}
                                      className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-sm mb-1">{recipe.title}</h4>
                                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                                        {recipe.description}
                                      </p>
                                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                        <div className="flex items-center">
                                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                          {recipe.rating}
                                        </div>
                                        <div className="flex items-center">
                                          <Clock className="h-3 w-3 mr-1" />
                                          {recipe.cookTime}
                                        </div>
                                        <div className="flex items-center">
                                          <Users className="h-3 w-3 mr-1" />
                                          {recipe.servings}
                                        </div>
                                      </div>
                                      <div className="flex gap-1 mt-2">
                                        <Badge variant="secondary" className="text-xs">{recipe.difficulty}</Badge>
                                        <Badge variant="outline" className="text-xs">{recipe.cuisine}</Badge>
                                      </div>
                                    </div>
                                  </div>
                                  <Button 
                                    size="sm" 
                                    className="w-full mt-3"
                                    onClick={() => onNavigate('recipes')}
                                  >
                                    View Full Recipe
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              
              {/* Chat Input */}
              <div className="border-t border-border/40 p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about cooking or recipes..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}