import { Suspense } from "react"
import { notFound } from "next/navigation"
import StoryReader from "@/components/story-reader"
import StoryLoading from "@/components/story-loading"
import { getStoryById } from "@/lib/story-service"

interface StoryPageProps {
  params: {
    id: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = getStoryById(params.id)

  if (!story) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Suspense fallback={<StoryLoading />}>
        <StoryReader storyId={params.id} />
      </Suspense>
    </main>
  )
}

