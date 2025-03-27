"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Home, RotateCcw, BookmarkPlus, Share2, Volume2, VolumeX, Sparkles } from "lucide-react"
import { getStoryById, getStoryNode } from "@/lib/story-service"
import type { StoryNode, Choice } from "@/lib/types"
import { saveProgress, loadProgress } from "@/lib/progress-service"
import { cn } from "@/lib/utils"
import BackgroundParticles from "@/components/background-particles"

interface StoryReaderProps {
  storyId: string
}

// Inside the component where we have references to color gradients
const progressBarIndicator = "bg-gradient-to-r from-teal-500 to-cyan-500"

export default function StoryReader({ storyId }: StoryReaderProps) {
  const router = useRouter()
  const story = getStoryById(storyId)
  const contentRef = useRef<HTMLDivElement>(null)

  const [currentNode, setCurrentNode] = useState<StoryNode | null>(null)
  const [history, setHistory] = useState<string[]>([])
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)
  const [choiceSelected, setChoiceSelected] = useState<string | null>(null)
  const [contentAnimation, setContentAnimation] = useState(false)

  // Calculate progress percentage
  const progressPercentage = story ? Math.min(100, (history.length / story.nodeCount) * 100) : 0

  useEffect(() => {
    // Load initial node or saved progress
    const savedProgress = loadProgress(storyId)

    if (savedProgress && savedProgress.history.length > 0) {
      setHistory(savedProgress.history)
      const lastNodeId = savedProgress.history[savedProgress.history.length - 1]
      setCurrentNode(getStoryNode(storyId, lastNodeId))
    } else {
      // Start from the beginning
      const initialNode = getStoryNode(storyId, "start")
      setCurrentNode(initialNode)
      setHistory(["start"])
    }

    setTimeout(() => {
      setFadeIn(true)
      setContentAnimation(true)
    }, 100)
  }, [storyId])

  useEffect(() => {
    // Save progress whenever history changes
    if (history.length > 0) {
      saveProgress(storyId, { history })
    }
  }, [history, storyId])

  const handleChoiceClick = (choice: Choice) => {
    setFadeIn(false)
    setContentAnimation(false)
    setChoiceSelected(choice.id)

    // Short delay for animation
    setTimeout(() => {
      const nextNode = getStoryNode(storyId, choice.nextNode)
      setCurrentNode(nextNode)
      setHistory([...history, choice.nextNode])

      // Scroll to top of content
      if (contentRef.current) {
        contentRef.current.scrollTop = 0
      }

      setTimeout(() => {
        setFadeIn(true)
        setContentAnimation(true)
        setChoiceSelected(null)
      }, 100)
    }, 500)
  }

  const handleGoBack = () => {
    if (history.length > 1) {
      setFadeIn(false)
      setContentAnimation(false)

      // Short delay for animation
      setTimeout(() => {
        const newHistory = [...history]
        newHistory.pop()
        setHistory(newHistory)

        const previousNodeId = newHistory[newHistory.length - 1]
        const previousNode = getStoryNode(storyId, previousNodeId)
        setCurrentNode(previousNode)

        // Scroll to top of content
        if (contentRef.current) {
          contentRef.current.scrollTop = 0
        }

        setTimeout(() => {
          setFadeIn(true)
          setContentAnimation(true)
        }, 100)
      }, 500)
    }
  }

  const handleRestart = () => {
    setFadeIn(false)
    setContentAnimation(false)

    // Short delay for animation
    setTimeout(() => {
      const initialNode = getStoryNode(storyId, "start")
      setCurrentNode(initialNode)
      setHistory(["start"])

      setTimeout(() => {
        setFadeIn(true)
        setContentAnimation(true)
      }, 100)
    }, 500)
  }

  if (!story || !currentNode) {
    return <div className="container mx-auto px-4 py-12 text-center">Loading story...</div>
  }

  const isEndNode = currentNode.choices.length === 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 text-white overflow-hidden relative">
      <BackgroundParticles />

      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <div className="flex justify-between items-center mb-6 animate-fade-in">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/stories")}
              className="text-slate-300 hover:text-white hover:bg-slate-800/50 glass-icon-button"
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleGoBack}
              disabled={history.length <= 1}
              className={cn(
                "text-slate-300 hover:text-white hover:bg-slate-800/50 glass-icon-button",
                history.length <= 1 && "opacity-50 cursor-not-allowed",
              )}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center">
            <h1 className="text-xl font-semibold mr-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
              {story.title}
            </h1>
            <Badge variant="outline" className="glass-badge">
              {story.genre}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="text-slate-300 hover:text-white hover:bg-slate-800/50 glass-icon-button"
            >
              {audioEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-slate-800/50 glass-icon-button"
            >
              <BookmarkPlus className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-slate-800/50 glass-icon-button"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="flex justify-between text-sm text-slate-400 mb-1">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress
            value={progressPercentage}
            className="h-2 bg-slate-700/50 backdrop-blur-sm"
            indicatorClassName="bg-gradient-to-r from-teal-500 to-cyan-500"
          />
        </div>

        <Card
          className={cn(
            "story-content-card overflow-hidden transition-all duration-500 mb-8",
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          ref={contentRef}
        >
          {currentNode.image && (
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={currentNode.image || "/placeholder.svg"}
                alt={currentNode.title || "Story scene"}
                fill
                className={cn("object-cover transition-transform duration-700", fadeIn && "scale-105")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

              {currentNode.title && (
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h2 className="text-2xl font-semibold text-white drop-shadow-lg">{currentNode.title}</h2>
                </div>
              )}
            </div>
          )}

          <div className="p-6">
            {!currentNode.image && currentNode.title && (
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                {currentNode.title}
              </h2>
            )}

            <div
              className={cn(
                "prose prose-invert max-w-none mb-8 transition-opacity duration-500",
                contentAnimation ? "opacity-100" : "opacity-0",
              )}
            >
              <p className="text-slate-300 whitespace-pre-line leading-relaxed">{currentNode.content}</p>
            </div>

            {isEndNode ? (
              <div
                className={cn(
                  "text-center transition-all duration-500 transform",
                  contentAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
              >
                <div className="inline-block p-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 mb-4">
                  <Sparkles className="h-6 w-6 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  The End
                </h3>
                <p className="text-slate-400 mb-6">You've reached one of the story's endings.</p>
                <Button onClick={handleRestart} className="glass-button group">
                  <span className="relative z-10 flex items-center">
                    <RotateCcw className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    Start Over
                  </span>
                </Button>
              </div>
            ) : (
              <div
                className={cn(
                  "space-y-3 transition-all duration-500 transform",
                  contentAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
              >
                <h3 className="text-lg font-medium text-slate-300 mb-2">What will you do?</h3>
                {currentNode.choices.map((choice) => (
                  <Button
                    key={choice.id}
                    onClick={() => handleChoiceClick(choice)}
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left p-4 h-auto glass-choice-button group",
                      choiceSelected === choice.id && "choice-selected",
                    )}
                  >
                    <span className="relative z-10">{choice.text}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </Card>

        <Tabs defaultValue="journey" className="mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <TabsList className="glass-tabs-list">
            <TabsTrigger value="journey" className="data-[state=active]:glass-tab-active">
              Your Journey
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:glass-tab-active">
              Story Stats
            </TabsTrigger>
          </TabsList>
          <TabsContent value="journey" className="glass-tab-content">
            <div className="text-sm">
              <h3 className="font-medium mb-2 text-slate-300">Your path so far:</h3>
              <div className="flex flex-wrap gap-2">
                {history.map((nodeId, index) => {
                  const node = getStoryNode(storyId, nodeId)
                  return (
                    <Badge
                      key={index}
                      variant="outline"
                      className="glass-badge animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {node?.title || `Scene ${index + 1}`}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="stats" className="glass-tab-content">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="glass-stat-card">
                <p className="text-slate-400">Total scenes:</p>
                <p className="font-medium text-white">{story.nodeCount}</p>
              </div>
              <div className="glass-stat-card">
                <p className="text-slate-400">Possible endings:</p>
                <p className="font-medium text-white">{story.endingCount}</p>
              </div>
              <div className="glass-stat-card">
                <p className="text-slate-400">Your progress:</p>
                <p className="font-medium text-white">
                  {history.length} of {story.nodeCount} scenes
                </p>
              </div>
              <div className="glass-stat-card">
                <p className="text-slate-400">Completion:</p>
                <p className="font-medium text-white">{Math.round(progressPercentage)}%</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

