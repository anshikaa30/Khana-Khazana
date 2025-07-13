export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
  icon?: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  ingredients?: Ingredient[];
  time?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  cookTime: string;
  prepTime: string;
  servings: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  cuisine: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: string[];
}

export interface AIRecipeSuggestion {
  recipe: Recipe;
  matchPercentage: number;
  missingIngredients: string[];
}