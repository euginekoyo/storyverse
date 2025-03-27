import type { Recipe, FilterOptions } from "./types"

// Mock data for recipes
const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "/placeholder.svg?height=300&width=400",
    readyInMinutes: 30,
    servings: 4,
    diets: ["pescatarian"],
    missedIngredientCount: 1,
    missedIngredients: [
      {
        id: 1123,
        name: "pancetta",
        amount: 100,
        unit: "g",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    usedIngredients: [
      {
        id: 1123,
        name: "eggs",
        amount: 3,
        unit: "",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 1033,
        name: "parmesan cheese",
        amount: 50,
        unit: "g",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    unusedIngredients: [],
    extendedIngredients: [
      {
        id: 20420,
        name: "spaghetti",
        amount: 400,
        unit: "g",
        original: "400g spaghetti",
      },
      {
        id: 1123,
        name: "eggs",
        amount: 3,
        unit: "large",
        original: "3 large eggs",
      },
      {
        id: 1033,
        name: "parmesan cheese",
        amount: 50,
        unit: "g",
        original: "50g grated parmesan",
      },
      {
        id: 1123,
        name: "pancetta",
        amount: 100,
        unit: "g",
        original: "100g pancetta",
      },
      {
        id: 1102047,
        name: "salt and pepper",
        amount: 1,
        unit: "to taste",
        original: "Salt and pepper to taste",
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Cook the spaghetti in a large pot of boiling salted water until al dente.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 2,
            step: "Meanwhile, fry the pancetta in a large pan until crispy.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "In a bowl, whisk together the eggs, grated parmesan, and a pinch of black pepper.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Drain the pasta, reserving a cup of the pasta water.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Add the hot pasta to the pan with the pancetta, remove from heat.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 6,
            step: "Quickly pour in the egg mixture, stirring constantly. The heat from the pasta will cook the eggs.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 7,
            step: "Add a splash of the reserved pasta water to create a creamy sauce. Season with salt and pepper.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    nutrition: {
      calories: "450",
      protein: "22g",
      fat: "18g",
      carbs: "56g",
      nutrients: [
        {
          name: "Calories",
          amount: 450,
          unit: "kcal",
          percentOfDailyNeeds: 22.5,
        },
        {
          name: "Fat",
          amount: 18,
          unit: "g",
          percentOfDailyNeeds: 27.7,
        },
        {
          name: "Carbohydrates",
          amount: 56,
          unit: "g",
          percentOfDailyNeeds: 18.7,
        },
        {
          name: "Protein",
          amount: 22,
          unit: "g",
          percentOfDailyNeeds: 44,
        },
        {
          name: "Cholesterol",
          amount: 185,
          unit: "mg",
          percentOfDailyNeeds: 61.7,
        },
        {
          name: "Sodium",
          amount: 650,
          unit: "mg",
          percentOfDailyNeeds: 28.3,
        },
      ],
    },
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    image: "/placeholder.svg?height=300&width=400",
    readyInMinutes: 20,
    servings: 2,
    diets: ["vegetarian", "vegan", "gluten-free"],
    missedIngredientCount: 0,
    missedIngredients: [],
    usedIngredients: [
      {
        id: 11215,
        name: "garlic",
        amount: 2,
        unit: "cloves",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 11282,
        name: "onion",
        amount: 1,
        unit: "",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 11124,
        name: "carrot",
        amount: 2,
        unit: "",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    unusedIngredients: [],
    extendedIngredients: [
      {
        id: 11215,
        name: "garlic",
        amount: 2,
        unit: "cloves",
        original: "2 cloves garlic, minced",
      },
      {
        id: 11282,
        name: "onion",
        amount: 1,
        unit: "medium",
        original: "1 medium onion, sliced",
      },
      {
        id: 11124,
        name: "carrot",
        amount: 2,
        unit: "medium",
        original: "2 medium carrots, julienned",
      },
      {
        id: 11090,
        name: "broccoli",
        amount: 1,
        unit: "cup",
        original: "1 cup broccoli florets",
      },
      {
        id: 11821,
        name: "bell pepper",
        amount: 1,
        unit: "medium",
        original: "1 medium red bell pepper, sliced",
      },
      {
        id: 4058,
        name: "sesame oil",
        amount: 1,
        unit: "tbsp",
        original: "1 tbsp sesame oil",
      },
      {
        id: 16124,
        name: "soy sauce",
        amount: 2,
        unit: "tbsp",
        original: "2 tbsp soy sauce",
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Heat sesame oil in a large wok or skillet over medium-high heat.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 2,
            step: "Add garlic and onion, stir-fry for 1 minute until fragrant.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "Add carrots and stir-fry for 2 minutes.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Add broccoli and bell pepper, stir-fry for another 3-4 minutes until vegetables are crisp-tender.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Add soy sauce and toss to coat all vegetables.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 6,
            step: "Serve hot over rice if desired.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    nutrition: {
      calories: "180",
      protein: "5g",
      fat: "7g",
      carbs: "28g",
      nutrients: [
        {
          name: "Calories",
          amount: 180,
          unit: "kcal",
          percentOfDailyNeeds: 9,
        },
        {
          name: "Fat",
          amount: 7,
          unit: "g",
          percentOfDailyNeeds: 10.8,
        },
        {
          name: "Carbohydrates",
          amount: 28,
          unit: "g",
          percentOfDailyNeeds: 9.3,
        },
        {
          name: "Protein",
          amount: 5,
          unit: "g",
          percentOfDailyNeeds: 10,
        },
        {
          name: "Fiber",
          amount: 6,
          unit: "g",
          percentOfDailyNeeds: 24,
        },
        {
          name: "Sodium",
          amount: 720,
          unit: "mg",
          percentOfDailyNeeds: 31.3,
        },
      ],
    },
  },
  {
    id: 3,
    title: "Chicken and Rice Casserole",
    image: "/placeholder.svg?height=300&width=400",
    readyInMinutes: 60,
    servings: 6,
    diets: ["gluten-free"],
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 5006,
        name: "chicken",
        amount: 2,
        unit: "cups",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 1017,
        name: "cream of mushroom soup",
        amount: 1,
        unit: "can",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    usedIngredients: [
      {
        id: 20444,
        name: "rice",
        amount: 1,
        unit: "cup",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 11282,
        name: "onion",
        amount: 1,
        unit: "",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    unusedIngredients: [],
    extendedIngredients: [
      {
        id: 5006,
        name: "chicken",
        amount: 2,
        unit: "cups",
        original: "2 cups cooked chicken, shredded",
      },
      {
        id: 20444,
        name: "rice",
        amount: 1,
        unit: "cup",
        original: "1 cup uncooked white rice",
      },
      {
        id: 1017,
        name: "cream of mushroom soup",
        amount: 1,
        unit: "can",
        original: "1 can (10.5 oz) cream of mushroom soup",
      },
      {
        id: 6194,
        name: "chicken broth",
        amount: 1.5,
        unit: "cups",
        original: "1.5 cups chicken broth",
      },
      {
        id: 11282,
        name: "onion",
        amount: 1,
        unit: "small",
        original: "1 small onion, diced",
      },
      {
        id: 1001,
        name: "butter",
        amount: 2,
        unit: "tbsp",
        original: "2 tbsp butter",
      },
      {
        id: 1102047,
        name: "salt and pepper",
        amount: 1,
        unit: "to taste",
        original: "Salt and pepper to taste",
      },
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 375°F (190°C).",
            ingredients: [],
            equipment: [],
          },
          {
            number: 2,
            step: "In a large skillet, melt butter over medium heat. Add diced onion and cook until translucent, about 5 minutes.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: "In a 9x13 inch baking dish, combine the uncooked rice, cooked onion, chicken, cream of mushroom soup, and chicken broth. Stir well to combine.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 4,
            step: "Season with salt and pepper.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 5,
            step: "Cover tightly with aluminum foil and bake for 45 minutes.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 6,
            step: "Remove foil and bake for an additional 10 minutes or until rice is tender and top is lightly browned.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 7,
            step: "Let stand for 5 minutes before serving.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    nutrition: {
      calories: "320",
      protein: "18g",
      fat: "12g",
      carbs: "35g",
      nutrients: [
        {
          name: "Calories",
          amount: 320,
          unit: "kcal",
          percentOfDailyNeeds: 16,
        },
        {
          name: "Fat",
          amount: 12,
          unit: "g",
          percentOfDailyNeeds: 18.5,
        },
        {
          name: "Carbohydrates",
          amount: 35,
          unit: "g",
          percentOfDailyNeeds: 11.7,
        },
        {
          name: "Protein",
          amount: 18,
          unit: "g",
          percentOfDailyNeeds: 36,
        },
        {
          name: "Cholesterol",
          amount: 55,
          unit: "mg",
          percentOfDailyNeeds: 18.3,
        },
        {
          name: "Sodium",
          amount: 850,
          unit: "mg",
          percentOfDailyNeeds: 37,
        },
      ],
    },
  },
]

// Function to search recipes based on ingredients and filters
export async function searchRecipes(ingredients: string[], filters: FilterOptions = {}): Promise<Recipe[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Filter recipes based on ingredients
  let filteredRecipes = mockRecipes.filter((recipe) => {
    // Check if recipe contains at least one of the provided ingredients
    return ingredients.some((ingredient) =>
      recipe.extendedIngredients.some((recipeIngredient) =>
        recipeIngredient.name.toLowerCase().includes(ingredient.toLowerCase()),
      ),
    )
  })

  // Apply additional filters
  if (filters.diet && filters.diet !== "") {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.diets.includes(filters.diet!))
  }

  if (filters.cuisine && filters.cuisine !== "") {
    // Note: In a real app, we would filter by cuisine
    // For this mock, we'll just return the current results
  }

  if (filters.maxTime && filters.maxTime > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.readyInMinutes <= filters.maxTime!)
  }

  return filteredRecipes
}

