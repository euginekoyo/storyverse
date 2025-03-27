import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Bookmark, PenTool, Sparkles } from "lucide-react"
import BackgroundParticles from "@/components/background-particles"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      <BackgroundParticles />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              StoryVerse
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Immerse yourself in interactive stories where your choices shape the narrative. Every decision matters.
              Every path is unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BookOpen className="h-12 w-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mb-2">Branching Stories</h2>
              <p className="text-slate-300 text-center">
                Experience narratives that adapt to your choices, creating a unique journey every time.
              </p>
            </div>

            <div className="glass-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Bookmark className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mb-2">Save Progress</h2>
              <p className="text-slate-300 text-center">
                Return to your stories anytime. Your journey is saved automatically as you explore.
              </p>
            </div>

            <div className="glass-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <PenTool className="h-12 w-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-xl font-semibold mb-2">Rich Media</h2>
              <p className="text-slate-300 text-center">
                Immerse yourself with images and ambient sounds that bring each scene to life.
              </p>
            </div>
          </div>

          <div className="space-y-4 animate-float">
            <Link href="/stories">
              <Button className="glass-button group">
                <span className="relative z-10 flex items-center">
                  Start Your Adventure
                  <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

