"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Utensils, Filter } from "lucide-react"
import RecipeDetail from "./recipe-detail"
import { searchRecipes } from "@/lib/recipe-service"
import type { Recipe } from "@/lib/types"
import RecipeFilters from "./recipe-filters"

export default function RecipeResults() {
  const searchParams = useSearchParams()
  const ingredientParam = searchParams.get("ingredients")

  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState({
    diet: "",
    cuisine: "",
    maxTime: 0,
  })

  useEffect(() => {
    if (ingredientParam) {
      setLoading(true)
      const ingredients = ingredientParam.split(",")

      // Fetch recipes based on ingredients
      searchRecipes(ingredients, activeFilters)
        .then((data) => {
          setRecipes(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error)
          setLoading(false)
        })
    }
  }, [ingredientParam, activeFilters])

  const filteredRecipes = recipes

  if (!ingredientParam) {
    return null
  }

  if (loading) {
    return <div className="mt-8 text-center">Searching for recipes...</div>
  }

  if (selectedRecipe) {
    return (
      <div className="mt-8">
        <Button variant="ghost" onClick={() => setSelectedRecipe(null)} className="mb-4">
          ← Back to results
        </Button>
        <RecipeDetail recipe={selectedRecipe} />
      </div>
    )
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-800">
          {recipes.length > 0 ? `Found ${recipes.length} recipes` : "No recipes found with those ingredients"}
        </h2>
        <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {showFilters && <RecipeFilters activeFilters={activeFilters} setActiveFilters={setActiveFilters} />}

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${recipe.image})` }} />
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{recipe.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {recipe.readyInMinutes} minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-1 mb-2">
                  {recipe.diets.map((diet) => (
                    <Badge key={diet} variant="outline" className="text-xs">
                      {diet}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  {recipe.missedIngredientCount > 0
                    ? `Missing ${recipe.missedIngredientCount} ingredients`
                    : "You have all ingredients!"}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="default"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  View Recipe
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <Utensils className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No recipes found</h3>
          <p className="text-slate-600 mb-4">
            Try adding more ingredients or removing some filters to see more results.
          </p>
        </div>
      )}
    </div>
  )
}

