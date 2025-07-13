import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Butter Chicken',
    description: 'Rich and creamy North Indian curry with tender chicken pieces in a tomato-based sauce with aromatic spices.',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    cookTime: '45 mins',
    prepTime: '20 mins',
    servings: 4,
    difficulty: 'Intermediate',
    category: 'Main Course',
    cuisine: 'Indian',
    tags: ['Spicy', 'Creamy', 'Non-Vegetarian', 'Popular'],
    ingredients: [
      { id: '1', name: 'Chicken Breast', amount: '500', unit: 'g', icon: '🍗' },
      { id: '2', name: 'Heavy Cream', amount: '200', unit: 'ml', icon: '🥛' },
      { id: '3', name: 'Tomato Puree', amount: '400', unit: 'ml', icon: '🍅' },
      { id: '4', name: 'Onion', amount: '2', unit: 'medium', icon: '🧅' },
      { id: '5', name: 'Garlic', amount: '4', unit: 'cloves', icon: '🧄' },
      { id: '6', name: 'Ginger', amount: '1', unit: 'inch piece', icon: '🫚' },
      { id: '7', name: 'Butter', amount: '3', unit: 'tbsp', icon: '🧈' },
      { id: '8', name: 'Garam Masala', amount: '1', unit: 'tsp', icon: '🌶️' },
      { id: '9', name: 'Cumin Powder', amount: '1', unit: 'tsp', icon: '🌿' },
      { id: '10', name: 'Paprika', amount: '1', unit: 'tsp', icon: '🌶️' },
      { id: '11', name: 'Salt', amount: '1', unit: 'tsp', icon: '🧂' },
      { id: '12', name: 'Cilantro', amount: '2', unit: 'tbsp', icon: '🌿' }
    ],
    steps: [
      {
        id: '1',
        title: 'Prepare the Chicken',
        description: 'Cut chicken into bite-sized pieces. Season with salt, cumin powder, and half of the garam masala. Let it marinate for 15 minutes.',
        time: '15 mins',
        ingredients: [
          { id: '1', name: 'Chicken Breast', amount: '500', unit: 'g', icon: '🍗' },
          { id: '11', name: 'Salt', amount: '1/2', unit: 'tsp', icon: '🧂' },
          { id: '9', name: 'Cumin Powder', amount: '1/2', unit: 'tsp', icon: '🌿' }
        ]
      },
      {
        id: '2',
        title: 'Make the Base Sauce',
        description: 'Heat butter in a large pan. Sauté minced onions, garlic, and ginger until golden. Add tomato puree and cook until thick.',
        time: '10 mins',
        ingredients: [
          { id: '7', name: 'Butter', amount: '3', unit: 'tbsp', icon: '🧈' },
          { id: '4', name: 'Onion', amount: '2', unit: 'medium', icon: '🧅' },
          { id: '3', name: 'Tomato Puree', amount: '400', unit: 'ml', icon: '🍅' }
        ]
      },
      {
        id: '3',
        title: 'Cook the Chicken',
        description: 'Add the marinated chicken to the sauce. Cook for 8-10 minutes until chicken is fully cooked through.',
        time: '10 mins'
      },
      {
        id: '4',
        title: 'Add Cream and Spices',
        description: 'Lower the heat and slowly add heavy cream. Add remaining garam masala and paprika. Simmer for 5 minutes.',
        time: '8 mins',
        ingredients: [
          { id: '2', name: 'Heavy Cream', amount: '200', unit: 'ml', icon: '🥛' },
          { id: '8', name: 'Garam Masala', amount: '1/2', unit: 'tsp', icon: '🌶️' }
        ]
      },
      {
        id: '5',
        title: 'Garnish and Serve',
        description: 'Garnish with fresh cilantro and serve hot with basmati rice or naan bread.',
        time: '2 mins',
        ingredients: [
          { id: '12', name: 'Cilantro', amount: '2', unit: 'tbsp', icon: '🌿' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Vegetable Biryani',
    description: 'Aromatic basmati rice layered with spiced vegetables and fragrant herbs, cooked to perfection.',
    image: 'https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    cookTime: '60 mins',
    prepTime: '30 mins',
    servings: 6,
    difficulty: 'Advanced',
    category: 'Main Course',
    cuisine: 'Indian',
    tags: ['Vegetarian', 'Aromatic', 'Festival Special', 'Rice'],
    ingredients: [
      { id: '1', name: 'Basmati Rice', amount: '2', unit: 'cups', icon: '🍚' },
      { id: '2', name: 'Mixed Vegetables', amount: '400', unit: 'g', icon: '🥕' },
      { id: '3', name: 'Yogurt', amount: '1/2', unit: 'cup', icon: '🥛' },
      { id: '4', name: 'Onion', amount: '3', unit: 'large', icon: '🧅' },
      { id: '5', name: 'Mint Leaves', amount: '1/4', unit: 'cup', icon: '🌿' },
      { id: '6', name: 'Cilantro', amount: '1/4', unit: 'cup', icon: '🌿' },
      { id: '7', name: 'Ghee', amount: '4', unit: 'tbsp', icon: '🧈' },
      { id: '8', name: 'Whole Spices', amount: '1', unit: 'set', icon: '🌶️' },
      { id: '9', name: 'Biryani Masala', amount: '2', unit: 'tsp', icon: '🌶️' },
      { id: '10', name: 'Saffron', amount: '1/4', unit: 'tsp', icon: '🌻' }
    ],
    steps: [
      {
        id: '1',
        title: 'Prepare Rice',
        description: 'Soak basmati rice for 30 minutes. Boil water with whole spices and cook rice until 70% done.',
        time: '20 mins'
      },
      {
        id: '2',
        title: 'Prepare Vegetables',
        description: 'Cut vegetables into medium pieces. Marinate with yogurt, biryani masala, and salt for 20 minutes.',
        time: '25 mins'
      },
      {
        id: '3',
        title: 'Fry Onions',
        description: 'Deep fry sliced onions until golden brown and crispy. Reserve half for garnishing.',
        time: '10 mins'
      },
      {
        id: '4',
        title: 'Cook Vegetables',
        description: 'In the same pan, cook marinated vegetables with fried onions until tender.',
        time: '15 mins'
      },
      {
        id: '5',
        title: 'Layer and Dum Cook',
        description: 'Layer rice over vegetables. Sprinkle saffron, mint, cilantro, and remaining fried onions. Cook on dum for 45 minutes.',
        time: '45 mins'
      }
    ]
  },
  {
    id: '3',
    title: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese cubes in a rich tomato and onion gravy with aromatic Indian spices.',
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    cookTime: '35 mins',
    prepTime: '25 mins',
    servings: 4,
    difficulty: 'Intermediate',
    category: 'Main Course',
    cuisine: 'Indian',
    tags: ['Vegetarian', 'Creamy', 'Popular', 'Restaurant Style'],
    ingredients: [
      { id: '1', name: 'Paneer', amount: '400', unit: 'g', icon: '🧀' },
      { id: '2', name: 'Onion', amount: '2', unit: 'large', icon: '🧅' },
      { id: '3', name: 'Tomato', amount: '4', unit: 'medium', icon: '🍅' },
      { id: '4', name: 'Bell Peppers', amount: '2', unit: 'medium', icon: '🫑' },
      { id: '5', name: 'Heavy Cream', amount: '1/2', unit: 'cup', icon: '🥛' },
      { id: '6', name: 'Ginger-Garlic Paste', amount: '2', unit: 'tbsp', icon: '🫚' },
      { id: '7', name: 'Tikka Masala', amount: '2', unit: 'tbsp', icon: '🌶️' },
      { id: '8', name: 'Kasuri Methi', amount: '1', unit: 'tsp', icon: '🌿' }
    ],
    steps: [
      {
        id: '1',
        title: 'Marinate Paneer',
        description: 'Cut paneer into cubes. Marinate with yogurt, tikka masala, and salt for 20 minutes.',
        time: '20 mins'
      },
      {
        id: '2',
        title: 'Grill Paneer',
        description: 'Thread paneer and bell peppers on skewers. Grill until charred and cooked.',
        time: '10 mins'
      },
      {
        id: '3',
        title: 'Make Gravy',
        description: 'Blend onions and tomatoes. Cook with ginger-garlic paste until thick.',
        time: '15 mins'
      },
      {
        id: '4',
        title: 'Combine and Simmer',
        description: 'Add grilled paneer to gravy. Add cream and kasuri methi. Simmer for 5 minutes.',
        time: '8 mins'
      }
    ]
  },
  {
    id: '4',
    title: 'Chicken Tikka',
    description: 'Succulent pieces of chicken marinated in yogurt and spices, grilled to perfection.',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    cookTime: '25 mins',
    prepTime: '120 mins',
    servings: 4,
    difficulty: 'Beginner',
    category: 'Appetizer',
    cuisine: 'Indian',
    tags: ['Non-Vegetarian', 'Grilled', 'High Protein', 'Tandoor'],
    ingredients: [
      { id: '1', name: 'Chicken Breast', amount: '600', unit: 'g', icon: '🍗' },
      { id: '2', name: 'Greek Yogurt', amount: '1/2', unit: 'cup', icon: '🥛' },
      { id: '3', name: 'Lemon Juice', amount: '2', unit: 'tbsp', icon: '🍋' },
      { id: '4', name: 'Ginger-Garlic Paste', amount: '2', unit: 'tbsp', icon: '🫚' },
      { id: '5', name: 'Red Chili Powder', amount: '1', unit: 'tsp', icon: '🌶️' },
      { id: '6', name: 'Turmeric', amount: '1/2', unit: 'tsp', icon: '🌻' },
      { id: '7', name: 'Garam Masala', amount: '1', unit: 'tsp', icon: '🌶️' },
      { id: '8', name: 'Cumin Powder', amount: '1', unit: 'tsp', icon: '🌿' }
    ],
    steps: [
      {
        id: '1',
        title: 'Prepare Chicken',
        description: 'Cut chicken into 1-inch cubes. Make small cuts for better marinade absorption.',
        time: '10 mins'
      },
      {
        id: '2',
        title: 'Make Marinade',
        description: 'Mix yogurt, lemon juice, ginger-garlic paste, and all spices in a bowl.',
        time: '5 mins'
      },
      {
        id: '3',
        title: 'Marinate',
        description: 'Coat chicken pieces with marinade. Refrigerate for at least 2 hours.',
        time: '120 mins'
      },
      {
        id: '4',
        title: 'Grill',
        description: 'Thread chicken on skewers. Grill on high heat for 12-15 minutes, turning occasionally.',
        time: '15 mins'
      }
    ]
  },
  {
    id: '5',
    title: 'Dal Tadka',
    description: 'Yellow lentils cooked with aromatic spices and finished with a tempering of cumin and mustard seeds.',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    cookTime: '30 mins',
    prepTime: '10 mins',
    servings: 4,
    difficulty: 'Beginner',
    category: 'Main Course',
    cuisine: 'Indian',
    tags: ['Vegetarian', 'Healthy', 'Comfort Food', 'Protein Rich'],
    ingredients: [
      { id: '1', name: 'Toor Dal', amount: '1', unit: 'cup', icon: '🌾' },
      { id: '2', name: 'Onion', amount: '1', unit: 'medium', icon: '🧅' },
      { id: '3', name: 'Tomato', amount: '2', unit: 'medium', icon: '🍅' },
      { id: '4', name: 'Green Chilies', amount: '2', unit: 'pieces', icon: '🌶️' },
      { id: '5', name: 'Cumin Seeds', amount: '1', unit: 'tsp', icon: '🌿' },
      { id: '6', name: 'Mustard Seeds', amount: '1/2', unit: 'tsp', icon: '🌿' },
      { id: '7', name: 'Turmeric', amount: '1/2', unit: 'tsp', icon: '🌻' },
      { id: '8', name: 'Ghee', amount: '2', unit: 'tbsp', icon: '🧈' }
    ],
    steps: [
      {
        id: '1',
        title: 'Cook Dal',
        description: 'Wash and cook toor dal with turmeric in pressure cooker for 3-4 whistles.',
        time: '15 mins'
      },
      {
        id: '2',
        title: 'Prepare Vegetables',
        description: 'Chop onions, tomatoes, and green chilies finely.',
        time: '5 mins'
      },
      {
        id: '3',
        title: 'Make Tadka',
        description: 'Heat ghee, add cumin and mustard seeds. When they splutter, add onions and cook until golden.',
        time: '5 mins'
      },
      {
        id: '4',
        title: 'Combine and Simmer',
        description: 'Add tomatoes and green chilies. Cook until soft, then add cooked dal. Simmer for 10 minutes.',
        time: '12 mins'
      }
    ]
  },
  {
    id: '6',
    title: 'Masala Dosa',
    description: 'Crispy fermented crepe made from rice and lentil batter, filled with spiced potato filling.',
    image: 'https://images.pexels.com/photos/5864628/pexels-photo-5864628.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    cookTime: '30 mins',
    prepTime: '480 mins',
    servings: 4,
    difficulty: 'Advanced',
    category: 'Breakfast',
    cuisine: 'South Indian',
    tags: ['Vegetarian', 'Fermented', 'Traditional', 'Healthy'],
    ingredients: [
      { id: '1', name: 'Dosa Batter', amount: '2', unit: 'cups', icon: '🌾' },
      { id: '2', name: 'Potatoes', amount: '4', unit: 'large', icon: '🥔' },
      { id: '3', name: 'Onion', amount: '2', unit: 'medium', icon: '🧅' },
      { id: '4', name: 'Mustard Seeds', amount: '1', unit: 'tsp', icon: '🌿' },
      { id: '5', name: 'Curry Leaves', amount: '10', unit: 'pieces', icon: '🌿' },
      { id: '6', name: 'Green Chilies', amount: '3', unit: 'pieces', icon: '🌶️' },
      { id: '7', name: 'Turmeric', amount: '1/2', unit: 'tsp', icon: '🌻' },
      { id: '8', name: 'Oil', amount: '3', unit: 'tbsp', icon: '🫒' }
    ],
    steps: [
      {
        id: '1',
        title: 'Prepare Batter',
        description: 'Ferment rice and urad dal batter for 8 hours until bubbly and doubled in size.',
        time: '480 mins'
      },
      {
        id: '2',
        title: 'Make Potato Filling',
        description: 'Boil potatoes, mash roughly. Temper with mustard seeds, curry leaves, and spices.',
        time: '20 mins'
      },
      {
        id: '3',
        title: 'Make Dosa',
        description: 'Heat pan, spread batter thin in circular motion. Cook until crispy and golden.',
        time: '5 mins'
      },
      {
        id: '4',
        title: 'Fill and Serve',
        description: 'Place potato filling on one side, fold dosa. Serve hot with coconut chutney and sambar.',
        time: '2 mins'
      }
    ]
  }
];

export const aiRecipeSuggestions = [
  {
    ingredients: ['chicken', 'onion', 'tomato'],
    suggestions: [
      {
        recipe: recipes[0], // Butter Chicken
        matchPercentage: 85,
        missingIngredients: ['heavy cream', 'garam masala', 'butter']
      },
      {
        recipe: recipes[3], // Chicken Tikka
        matchPercentage: 70,
        missingIngredients: ['yogurt', 'ginger-garlic paste', 'spices']
      }
    ]
  },
  {
    ingredients: ['paneer', 'tomato', 'onion'],
    suggestions: [
      {
        recipe: recipes[2], // Paneer Tikka Masala
        matchPercentage: 90,
        missingIngredients: ['bell peppers', 'heavy cream', 'tikka masala']
      }
    ]
  },
  {
    ingredients: ['dal', 'lentils', 'turmeric'],
    suggestions: [
      {
        recipe: recipes[4], // Dal Tadka
        matchPercentage: 95,
        missingIngredients: ['cumin seeds', 'mustard seeds']
      }
    ]
  }
];