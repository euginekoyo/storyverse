"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FiltersProps {
  activeFilters: {
    diet: string
    cuisine: string
    maxTime: number
  }
  setActiveFilters: (filters: any) => void
}

export default function RecipeFilters({ activeFilters, setActiveFilters }: FiltersProps) {
  const [localFilters, setLocalFilters] = useState(activeFilters)

  const diets = [
    { value: "", label: "Any" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "gluten-free", label: "Gluten Free" },
    { value: "dairy-free", label: "Dairy Free" },
  ]

  const cuisines = [
    { value: "", label: "Any" },
    { value: "italian", label: "Italian" },
    { value: "mexican", label: "Mexican" },
    { value: "asian", label: "Asian" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "american", label: "American" },
  ]

  const handleApplyFilters = () => {
    setActiveFilters(localFilters)
  }

  const handleResetFilters = () => {
    const resetFilters = {
      diet: "",
      cuisine: "",
      maxTime: 0,
    }
    setLocalFilters(resetFilters)
    setActiveFilters(resetFilters)
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label className="mb-2 block">Dietary Restrictions</Label>
            <Select
              value={localFilters.diet}
              onValueChange={(value) => setLocalFilters({ ...localFilters, diet: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select diet" />
              </SelectTrigger>
              <SelectContent>
                {diets.map((diet) => (
                  <SelectItem key={diet.value} value={diet.value}>
                    {diet.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2 block">Cuisine Type</Label>
            <Select
              value={localFilters.cuisine}
              onValueChange={(value) => setLocalFilters({ ...localFilters, cuisine: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select cuisine" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine) => (
                  <SelectItem key={cuisine.value} value={cuisine.value}>
                    {cuisine.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2 block">
              Max Cooking Time: {localFilters.maxTime > 0 ? `${localFilters.maxTime} minutes` : "Any"}
            </Label>
            <Slider
              value={[localFilters.maxTime]}
              min={0}
              max={120}
              step={15}
              onValueChange={(value) => setLocalFilters({ ...localFilters, maxTime: value[0] })}
              className="py-4"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={handleResetFilters}>
            Reset
          </Button>
          <Button onClick={handleApplyFilters} className="bg-emerald-600 hover:bg-emerald-700">
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

