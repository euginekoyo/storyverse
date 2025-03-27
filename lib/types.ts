export interface StoryNode {
  id: string
  title?: string
  content: string
  image?: string
  choices: Choice[]
}

export interface Choice {
  id: string
  text: string
  nextNode: string
}

export interface Story {
  id: string
  title: string
  author: string
  description: string
  genre: string
  coverImage: string
  readTime: number
  nodeCount: number
  pathCount: number
  endingCount: number
}

export interface StoryProgress {
  history: string[]
}

export interface Recipe {
  id: number
  title: string
  image: string
  readyInMinutes: number
  servings: number
  diets: string[]
  missedIngredientCount: number
  missedIngredients: Ingredient[]
  usedIngredients: Ingredient[]
  unusedIngredients: Ingredient[]
  extendedIngredients: ExtendedIngredient[]
  analyzedInstructions: AnalyzedInstruction[]
  nutrition: Nutrition
}

export interface Ingredient {
  id: number
  name: string
  amount: number
  unit: string
  image: string
}

export interface ExtendedIngredient {
  id: number
  name: string
  amount: number
  unit: string
  original: string
}

export interface AnalyzedInstruction {
  name: string
  steps: Step[]
}

export interface Step {
  number: number
  step: string
  ingredients: any[]
  equipment: any[]
}

export interface Nutrition {
  calories: string
  protein: string
  fat: string
  carbs: string
  nutrients: Nutrient[]
}

export interface Nutrient {
  name: string
  amount: number
  unit: string
  percentOfDailyNeeds: number
}

export interface FilterOptions {
  diet?: string
  cuisine?: string
  maxTime?: number
}

