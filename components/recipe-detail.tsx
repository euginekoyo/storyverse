import type { Recipe } from "@/lib/types"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ChefHat, Utensils, AlertCircle } from "lucide-react"

interface RecipeDetailProps {
  recipe: Recipe
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${recipe.image})` }} />
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{recipe.title}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4" /> {recipe.readyInMinutes} minutes
              <span className="mx-2">•</span>
              <Utensils className="h-4 w-4" /> {recipe.servings} servings
            </CardDescription>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-2">
          {recipe.diets.map((diet) => (
            <Badge key={diet} variant="outline">
              {diet}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <Tabs defaultValue="ingredients" className="px-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>

        <TabsContent value="ingredients" className="pt-4 pb-6">
          <h3 className="font-medium text-lg mb-3">You'll need:</h3>
          <ul className="space-y-2">
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChefHat className="h-3 w-3 text-emerald-600" />
                </div>
                <span>
                  <strong>
                    {ingredient.amount} {ingredient.unit}
                  </strong>{" "}
                  {ingredient.name}
                </span>
              </li>
            ))}
          </ul>

          {recipe.missedIngredientCount > 0 && (
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800">Missing ingredients:</h4>
                  <ul className="mt-2 space-y-1">
                    {recipe.missedIngredients.map((ingredient, index) => (
                      <li key={index} className="text-amber-700">
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="instructions" className="pt-4 pb-6">
          <h3 className="font-medium text-lg mb-3">Step by step:</h3>
          <ol className="space-y-4">
            {recipe.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number} className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-medium">{step.number}</span>
                </div>
                <div className="pt-1">{step.step}</div>
              </li>
            ))}
          </ol>
        </TabsContent>

        <TabsContent value="nutrition" className="pt-4 pb-6">
          <h3 className="font-medium text-lg mb-3">Nutritional information:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-800">{recipe.nutrition.calories}</div>
              <div className="text-sm text-slate-600">Calories</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-800">{recipe.nutrition.protein}g</div>
              <div className="text-sm text-slate-600">Protein</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-800">{recipe.nutrition.carbs}g</div>
              <div className="text-sm text-slate-600">Carbohydrates</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-slate-800">{recipe.nutrition.fat}g</div>
              <div className="text-sm text-slate-600">Fat</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Daily values:</h4>
            <div className="space-y-2">
              {recipe.nutrition.nutrients.map((nutrient) => (
                <div key={nutrient.name} className="flex justify-between items-center">
                  <span className="text-slate-700">{nutrient.name}</span>
                  <span className="font-medium">
                    {nutrient.amount}
                    {nutrient.unit} ({nutrient.percentOfDailyNeeds}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

