import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, ArrowRight } from "lucide-react"
import { getStories } from "@/lib/story-service"
import BackgroundParticles from "@/components/background-particles"

export default function StoriesPage() {
  const stories = getStories()

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      <BackgroundParticles />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center animate-fade-in-down">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              Choose Your Adventure
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Select a story to begin your journey. Each tale offers unique paths and endings based on your choices.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={story.id} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="story-card group">
                  <div className="h-48 bg-cover bg-center rounded-t-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${story.coverImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  </div>
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                        {story.title}
                      </CardTitle>
                      <Badge variant="outline" className="glass-badge">
                        {story.genre}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-300">By {story.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 line-clamp-3">{story.description}</p>
                    <div className="flex items-center text-sm text-slate-300 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{story.readTime} min</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>{story.pathCount} paths</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/story/${story.id}`} className="w-full">
                      <Button variant="default" className="w-full glass-button-alt group">
                        <span className="relative z-10 flex items-center justify-center">
                          Begin Story
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

