import type { Story, StoryNode } from "./types"

// Mock data for stories
const stories: Story[] = [
  {
    id: "the-haunted-mansion",
    title: "The Haunted Mansion",
    author: "Emily Winters",
    description:
      "You inherit a mysterious mansion from a distant relative. As you explore its halls, you discover dark secrets and supernatural phenomena that challenge your perception of reality.",
    genre: "Horror",
    coverImage: "/placeholder.svg?height=300&width=500",
    readTime: 25,
    nodeCount: 18,
    pathCount: 12,
    endingCount: 5,
  },
  {
    id: "space-odyssey",
    title: "Space Odyssey: First Contact",
    author: "Marcus Chen",
    description:
      "As the captain of Earth's first interstellar vessel, you encounter an alien civilization. Your decisions will shape humanity's first contact and potentially determine the fate of both species.",
    genre: "Sci-Fi",
    coverImage: "/placeholder.svg?height=300&width=500",
    readTime: 30,
    nodeCount: 24,
    pathCount: 15,
    endingCount: 6,
  },
  {
    id: "medieval-quest",
    title: "The Knight's Quest",
    author: "Sophia Reynolds",
    description:
      "You are a knight tasked with retrieving a sacred artifact. Your journey will take you through enchanted forests, ancient ruins, and dragon lairs. Will you succeed in your quest?",
    genre: "Fantasy",
    coverImage: "/placeholder.svg?height=300&width=500",
    readTime: 20,
    nodeCount: 15,
    pathCount: 8,
    endingCount: 4,
  },
]

// Mock data for story nodes
const storyNodes: Record<string, Record<string, StoryNode>> = {
  "the-haunted-mansion": {
    start: {
      id: "start",
      title: "Arrival",
      content:
        'The taxi drops you off at the iron gates of Blackwood Manor. Rain pours down as you look up at the imposing Victorian mansion silhouetted against the stormy sky. Lightning flashes, briefly illuminating the decrepit facade and overgrown gardens.\n\nAccording to the lawyer\'s letter, this entire estate now belongs to you - inherited from a great-uncle you never knew existed. The key in your pocket feels unusually heavy.\n\n"Last drop-off for the night," the taxi driver says nervously. "You sure you want to stay here? Place has a bad reputation."\n\nBefore you can answer, he speeds away, leaving you alone at the gates.',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Open the gates and approach the mansion",
          nextNode: "front-door",
        },
        {
          id: "choice-2",
          text: "Walk around the perimeter to look for another entrance",
          nextNode: "garden-path",
        },
      ],
    },
    "front-door": {
      id: "front-door",
      title: "The Front Door",
      content:
        "You push open the rusted iron gates with a haunting creak and walk up the gravel path to the mansion. The front door is massive, made of dark oak with intricate carvings of twisted faces that seem to watch you as you approach.\n\nThe brass knocker is shaped like a gargoyle's head, its eyes seemingly following your movement. You reach into your pocket for the key the lawyer gave you.\n\nAs you insert it into the lock, you could swear you hear faint whispers coming from inside the house. The door unlocks with a heavy click.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Enter the mansion",
          nextNode: "main-hall",
        },
        {
          id: "choice-2",
          text: "Knock first to see if anyone responds",
          nextNode: "knock-response",
        },
      ],
    },
    "garden-path": {
      id: "garden-path",
      title: "The Overgrown Garden",
      content:
        "You decide to explore the perimeter before entering. The path around the mansion is overgrown with thorny vines and twisted vegetation that seems to reach for you as you pass.\n\nIn the back, you discover a small garden that, despite years of neglect, contains strange flowers that glow faintly in the darkness. They seem to pulse, almost like they're breathing.\n\nA stone path leads to a cellar door, partially hidden by ivy. Nearby, a gardener's shed stands with its door slightly ajar.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Try the cellar door",
          nextNode: "cellar",
        },
        {
          id: "choice-2",
          text: "Investigate the gardener's shed",
          nextNode: "shed",
        },
        {
          id: "choice-3",
          text: "Return to the front of the mansion",
          nextNode: "front-door",
        },
      ],
    },
    "main-hall": {
      id: "main-hall",
      title: "The Grand Hall",
      content:
        "The door swings open with a prolonged creak. You step into a grand entrance hall, your footsteps echoing on the marble floor. A massive chandelier hangs above, covered in cobwebs but still glinting in the dim light that filters through dusty windows.\n\nPortraits line the walls - stern-faced men and women in Victorian attire, their eyes seeming to track your movements. One portrait larger than the others must be your great-uncle - there's an unsettling family resemblance.\n\nA wide staircase leads to the upper floor, while doorways to your left and right lead to other parts of the ground floor. From somewhere deep in the house, you hear what sounds like a piano playing a melancholy tune.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Climb the staircase to the upper floor",
          nextNode: "upper-landing",
        },
        {
          id: "choice-2",
          text: "Follow the sound of the piano music",
          nextNode: "music-room",
        },
        {
          id: "choice-3",
          text: "Explore the door to your left",
          nextNode: "library",
        },
      ],
    },
    "knock-response": {
      id: "knock-response",
      title: "A Strange Response",
      content:
        'You raise the heavy knocker and let it fall against the door three times. The sound echoes not just outside but seemingly through the entire house, unnaturally loud and resonant.\n\nFor a moment, there\'s silence. Then, to your shock, you hear a child\'s laughter from inside, followed by the sound of running footsteps that approach the door and then recede rapidly.\n\n"Hello?" you call out. "Is someone there?"\n\nNo answer comes, but you notice the door has drifted open slightly, as if inviting you in.',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Enter cautiously",
          nextNode: "main-hall",
        },
        {
          id: "choice-2",
          text: "Call out again before entering",
          nextNode: "call-out",
        },
      ],
    },
    "call-out": {
      id: "call-out",
      title: "Voices in the Dark",
      content:
        "\"Hello? I'm the new owner,\" you call out, your voice sounding small against the imposing facade of the mansion.\n\nThis time, a response comes - not a child's voice, but an adult's, faint and distant: \"We've been waiting for you...\"\n\nA chill runs down your spine. The voice didn't sound like it came from inside the house, but rather from all around you - or perhaps from inside your own head.\n\nThe door swings open wider on its own, revealing the darkened hall beyond.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Gather your courage and step inside",
          nextNode: "main-hall",
        },
        {
          id: "choice-2",
          text: "Leave immediately and come back in daylight",
          nextNode: "leave-return",
        },
      ],
    },
    "leave-return": {
      id: "leave-return",
      title: "Return at Dawn",
      content:
        "The sense of dread becomes overwhelming. You decide that exploring an allegedly haunted mansion in the middle of a stormy night might not be the wisest decision.\n\nYou back away from the door, pull out your phone to call a taxi, and wait by the gates. As you glance back at the mansion, you swear you see a pale face watching you from an upstairs window, though it vanishes when lightning flashes again.\n\nThe next morning, you return as the sun rises. The mansion looks less threatening in daylight, though no less decrepit. The strange sensations from the night before feel distant now, almost like a dream.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Enter the mansion in daylight",
          nextNode: "main-hall-day",
        },
        {
          id: "choice-2",
          text: "Explore the grounds first",
          nextNode: "grounds-day",
        },
      ],
    },
    "main-hall-day": {
      id: "main-hall-day",
      title: "The Grand Hall (Daylight)",
      content:
        "The grand hall looks different in the daylight that streams through the tall windows and the cracks in the boarded-up sections. Dust particles dance in the sunbeams, and you can better appreciate the once-magnificent architecture.\n\nThe portraits still seem to watch you, but they're less menacing now. You notice details you missed in the darkness - a door under the staircase, the intricate woodwork on the banisters, and a large stain on the marble floor that looks disturbingly like old blood.\n\nThe house is silent now. No piano music, no childish laughter. Just the occasional creak of old wood and the distant sound of birds outside.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Investigate the stain on the floor",
          nextNode: "blood-stain",
        },
        {
          id: "choice-2",
          text: "Check the door under the stairs",
          nextNode: "under-stairs",
        },
        {
          id: "choice-3",
          text: "Climb the staircase",
          nextNode: "upper-landing",
        },
      ],
    },
    "blood-stain": {
      id: "blood-stain",
      title: "The Mysterious Stain",
      content:
        "You kneel down to examine the dark stain on the marble floor. Up close, it does indeed look like dried blood, spread in a pattern that suggests a violent incident. The center of the stain is darker, with lighter spatters radiating outward.\n\nAs you touch the stain with your fingertips, a sudden flash of vision overtakes you - a man falling from the balcony above, the sickening crack as he hits the marble, and a woman in Victorian dress standing at the top of the stairs, her hands empty of the push she just delivered.\n\nYou pull your hand back as if burned, gasping. The vision fades, but leaves you shaken.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Look up at the spot on the balcony where the man fell from",
          nextNode: "balcony-view",
        },
        {
          id: "choice-2",
          text: "Try to shake off the vision and explore elsewhere",
          nextNode: "main-hall-day",
        },
      ],
    },
    "balcony-view": {
      id: "balcony-view",
      title: "A Fatal Fall",
      content:
        "You step back and look up at the balcony that runs along the second floor. The spot directly above the stain has a section of railing that looks newer than the rest, as if it had been repaired.\n\nAs you stare, the air seems to shimmer, and for a brief moment, you see them - the man and woman from your vision, engaged in a heated argument. Their voices are inaudible, but their gestures are angry. Then she lunges forward, he stumbles back, the railing gives way...\n\nThe vision dissipates. You're alone again in the hall, but with the distinct feeling that you've witnessed an echo of a murder that took place long ago.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Search for information about the mansion's history",
          nextNode: "library",
        },
        {
          id: "choice-2",
          text: "Go upstairs to examine the repaired railing",
          nextNode: "upper-landing",
        },
      ],
    },
    library: {
      id: "library",
      title: "The Ancient Library",
      content:
        "You enter a vast library with bookshelves that stretch from floor to ceiling. Leather-bound volumes line the walls, their spines faded with age. A thick layer of dust covers everything, suggesting no one has disturbed this room in years.\n\nA large desk dominates the center of the room, covered with papers, an old inkwell, and what appears to be a journal. A comfortable reading chair sits nearby, positioned to catch the light from the tall windows.\n\nOn one wall hangs a detailed family tree of the Blackwood family, your ancestors. Your name has been recently added at the bottom, in fresh ink that stands out against the yellowed paper.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Examine the journal on the desk",
          nextNode: "journal",
        },
        {
          id: "choice-2",
          text: "Study the family tree",
          nextNode: "family-tree",
        },
        {
          id: "choice-3",
          text: "Search for books about the mansion's history",
          nextNode: "history-books",
        },
      ],
    },
    journal: {
      id: "journal",
      title: "Your Uncle's Journal",
      content:
        "You carefully open the journal, its leather binding cracking slightly. The handwriting is spidery and difficult to read, but you recognize it as your great-uncle's from the letter that accompanied your inheritance.\n\nThe journal details his investigations into the mansion's supernatural phenomena. He writes of voices in empty rooms, objects moving on their own, and glimpses of people long dead. The final entry, dated just three days before his death, is particularly disturbing:\n\n\"It's too late for me. The house has shown me its secrets, and I cannot unlearn them. The ritual in the basement must never be completed. I've hidden the artifacts separately. Forgive me for bringing you into this, my heir, but someone of our bloodline must end this curse.\"",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Look for information about the basement ritual",
          nextNode: "ritual-research",
        },
        {
          id: "choice-2",
          text: "Search for the hidden artifacts",
          nextNode: "artifact-hunt",
        },
        {
          id: "choice-3",
          text: "Leave the library to explore the basement",
          nextNode: "find-basement",
        },
      ],
    },
    "ritual-research": {
      id: "ritual-research",
      title: "Dark Discoveries",
      content:
        "You scour the library for information about the ritual your uncle mentioned. After hours of searching through dusty tomes, you find a hidden compartment in the desk containing a small, bound manuscript.\n\nThe manuscript details a dark ritual performed by the original owner of the mansion, your ancestor, who sought to gain immortality through communion with entities from beyond our reality. The ritual opened a doorway that was never properly closed, explaining the mansion's haunted history.\n\nAccording to the text, the ritual can be reversed using the same artifacts, but doing so is dangerous - those who failed in the past lost their minds... or worse.",
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Decide to find the artifacts and attempt to reverse the ritual",
          nextNode: "artifact-hunt",
        },
        {
          id: "choice-2",
          text: "Choose to leave the mansion and never return",
          nextNode: "abandon-mansion",
        },
      ],
    },
    "abandon-mansion": {
      id: "abandon-mansion",
      title: "Escape",
      content:
        'Some things are best left undisturbed. You decide that whatever curse afflicts this mansion, it\'s not your responsibility to fix it. You gather your belongings and head for the front door, planning to contact a real estate agent as soon as possible to sell the property.\n\nAs you reach for the door handle, the temperature drops dramatically. Frost forms on the inside of the windows. A whisper comes from behind you: "No one leaves the Blackwood legacy."\n\nYou spin around to see a spectral figure - your great-uncle, his face gaunt and eyes hollow. "I tried to escape too," the apparition says. "The house always brings us back."',
      image: "/placeholder.svg?height=400&width=600",
      choices: [],
    },
  },
  "space-odyssey": {
    start: {
      id: "start",
      title: "Launch Day",
      content:
        'The countdown echoes through the command deck of the ESS Horizon, humanity\'s first faster-than-light vessel. As captain, you\'ve trained fifteen years for this moment - the historic journey to Alpha Centauri.\n\n"T-minus ten seconds," announces your AI navigator, ARIA. The ship hums with energy as the quantum drive prepares to activate.\n\nThrough the viewscreen, Earth grows smaller - a blue marble against the vastness of space. Your crew of twelve specialists wait for your command, their faces a mixture of tension and excitement.\n\n"Captain," your science officer Dr. Chen says, "long-range sensors are detecting an anomaly near our destination coordinates."',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Proceed with the jump as planned",
          nextNode: "quantum-jump",
        },
        {
          id: "choice-2",
          text: "Delay the jump to investigate the anomaly",
          nextNode: "investigate-anomaly",
        },
      ],
    },
    "quantum-jump": {
      id: "quantum-jump",
      title: "Crossing the Void",
      content:
        '"Proceed with the jump," you order. "We\'ve prepared for unexpected phenomena."\n\nThe quantum drive activates with a high-pitched whine. Stars stretch into lines of light, and reality itself seems to fold around the ship. Your stomach lurches as spacetime distorts.\n\nThe jump lasts only seconds from your perspective, but when the ship emerges, ARIA announces: "Jump complete. Local time differential: 4.3 years."\n\nAlpha Centauri shines before you - humanity\'s first visit to another star system. But something is wrong. An enormous structure orbits the star - clearly artificial and definitely not of human origin.',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Approach the structure cautiously",
          nextNode: "approach-structure",
        },
        {
          id: "choice-2",
          text: "Maintain distance and attempt to scan it",
          nextNode: "scan-structure",
        },
        {
          id: "choice-3",
          text: "Broadcast a greeting on all frequencies",
          nextNode: "broadcast-greeting",
        },
      ],
    },
    "investigate-anomaly": {
      id: "investigate-anomaly",
      title: "The Mysterious Signal",
      content:
        '"Hold the jump," you command. "Dr. Chen, what can you tell me about this anomaly?"\n\nDr. Chen works her console, brow furrowed. "It\'s... unusual, Captain. The readings suggest a gravitational distortion, but there\'s also an electromagnetic signature embedded within it. Almost like..."\n\n"Like what, Doctor?"\n\n"Like a signal, Captain. A repeating pattern too precise to be natural."\n\nThe bridge falls silent as the implications sink in. First contact wasn\'t supposed to happen this way - you were just explorers, not diplomats prepared for an alien encounter.',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Attempt to decode the signal",
          nextNode: "decode-signal",
        },
        {
          id: "choice-2",
          text: "Report back to Earth for instructions",
          nextNode: "contact-earth",
        },
        {
          id: "choice-3",
          text: "Proceed with the jump despite the anomaly",
          nextNode: "quantum-jump",
        },
      ],
    },
  },
  "medieval-quest": {
    start: {
      id: "start",
      title: "The King's Call",
      content:
        'The throne room of Silverspire Castle falls silent as King Aldric rises from his seat. His crown gleams in the light streaming through stained glass windows, but his face is grim with worry.\n\n"Sir Knight," he addresses you, "dark times have befallen our kingdom. The Sacred Chalice of Eternity has been stolen from the royal vault. Without its power, our lands will wither and fall to the blight that already creeps at our borders."\n\nYou kneel before your king, hand on the pommel of your sword. As the realm\'s most trusted knight, you\'ve served the crown faithfully for years.\n\n"The court wizard believes the chalice was taken to the Shadowpeak Mountains," the king continues. "I entrust you with its recovery. Will you accept this quest?"',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Accept the quest with honor",
          nextNode: "accept-quest",
        },
        {
          id: "choice-2",
          text: "Ask for more information before deciding",
          nextNode: "request-information",
        },
      ],
    },
    "accept-quest": {
      id: "accept-quest",
      title: "Preparations",
      content:
        '"I accept this sacred duty, Your Majesty," you declare, your voice echoing in the vast throne room. "I shall not return until the Chalice is recovered."\n\nKing Aldric nods solemnly. "Rise, Sir Knight. The royal armory and treasury are open to you. Take what you need for your journey."\n\nYou spend the day preparing, knowing the Shadowpeak Mountains are treacherous and filled with unknown dangers. By nightfall, you must decide your approach to this perilous quest.',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Travel light and fast on horseback",
          nextNode: "horseback-journey",
        },
        {
          id: "choice-2",
          text: "Gather a small company of trusted warriors",
          nextNode: "gather-company",
        },
        {
          id: "choice-3",
          text: "Seek the counsel of the court wizard before departing",
          nextNode: "wizard-counsel",
        },
      ],
    },
    "request-information": {
      id: "request-information",
      title: "Royal Intelligence",
      content:
        '"Your Majesty, I am honored by your trust. Before I accept, I would know more of what I might face. Who could have stolen such a well-guarded treasure?"\n\nThe king exchanges glances with his advisor before responding. "Our spies believe it was the work of the Crimson Brotherhood, a cult devoted to the ancient dragon Malgrath. If they use the Chalice in their ritual at the next full moon, they could awaken Malgrath from his centuries-long slumber."\n\nThe court wizard steps forward, her silver robes shimmering. "The full moon is but seven days hence, Sir Knight. Time is of the essence."',
      image: "/placeholder.svg?height=400&width=600",
      choices: [
        {
          id: "choice-1",
          text: "Accept the quest now that you understand the stakes",
          nextNode: "accept-quest",
        },
        {
          id: "choice-2",
          text: "Suggest an alternative approach to recovering the Chalice",
          nextNode: "alternative-approach",
        },
      ],
    },
  },
}

// Get all stories
export function getStories(): Story[] {
  return stories
}

// Get a specific story by ID
export function getStoryById(id: string): Story | undefined {
  return stories.find((story) => story.id === id)
}

// Get a specific story node
export function getStoryNode(storyId: string, nodeId: string): StoryNode | null {
  const storyData = storyNodes[storyId]
  if (!storyData) return null

  return storyData[nodeId] || null
}

