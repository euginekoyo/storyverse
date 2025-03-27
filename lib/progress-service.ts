import type { StoryProgress } from "./types"

// In a real app, this would use localStorage, IndexedDB, or a backend API
// For this demo, we'll use a simple in-memory store
const progressStore: Record<string, StoryProgress> = {}

// Save progress for a story
export function saveProgress(storyId: string, progress: StoryProgress): void {
  progressStore[storyId] = progress

  // In a real app, you would persist this to localStorage or a backend
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(`story-progress-${storyId}`, JSON.stringify(progress))
    }
  } catch (error) {
    console.error("Failed to save progress:", error)
  }
}

// Load progress for a story
export function loadProgress(storyId: string): StoryProgress | null {
  // First check our in-memory store
  if (progressStore[storyId]) {
    return progressStore[storyId]
  }

  // Then try to load from localStorage
  try {
    if (typeof window !== "undefined") {
      const savedProgress = localStorage.getItem(`story-progress-${storyId}`)
      if (savedProgress) {
        const progress = JSON.parse(savedProgress) as StoryProgress
        progressStore[storyId] = progress // Update in-memory store
        return progress
      }
    }
  } catch (error) {
    console.error("Failed to load progress:", error)
  }

  return null
}

// Clear progress for a story
export function clearProgress(storyId: string): void {
  delete progressStore[storyId]

  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem(`story-progress-${storyId}`)
    }
  } catch (error) {
    console.error("Failed to clear progress:", error)
  }
}

