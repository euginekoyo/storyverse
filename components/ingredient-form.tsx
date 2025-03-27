"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Search } from "lucide-react"

export default function IngredientForm() {
  const router = useRouter()
  const [currentIngredient, setCurrentIngredient] = useState("")
  const [ingredients, setIngredients] = useState<string[]>([])

  const addIngredient = () => {
    if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim().toLowerCase())) {
      setIngredients([...ingredients, currentIngredient.trim().toLowerCase()])
      setCurrentIngredient("")
    }
  }

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((i) => i !== ingredient))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addIngredient()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (ingredients.length > 0) {
      const queryString = new URLSearchParams({ ingredients: ingredients.join(",") }).toString()
      router.push(`/?${queryString}`)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">What ingredients do you have?</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter an ingredient (e.g., chicken, tomatoes, rice)"
            className="flex-1"
          />
          <Button type="button" onClick={addIngredient} variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-4 min-h-16">
          {ingredients.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <Badge key={ingredient} variant="secondary" className="px-3 py-1 text-sm">
                  {ingredient}
                  <button
                    type="button"
                    onClick={() => removeIngredient(ingredient)}
                    className="ml-2 text-slate-500 hover:text-slate-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm">Add some ingredients to get started</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700"
          disabled={ingredients.length === 0}
        >
          <Search className="mr-2 h-4 w-4" />
          Find Recipes
        </Button>
      </form>
    </div>
  )
}

