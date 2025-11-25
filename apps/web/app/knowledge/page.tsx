"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, Brain, Target, Mail, Video, Rocket } from "lucide-react"
import { PDFViewer } from "@/components/pdf-viewer"

const categories = [
  {
    id: "strategies",
    name: "Ad Strategies",
    icon: Target,
    count: 7,
    description: "Advanced strategies like Harvester, Forester, Hammer",
    items: [
      "The Harvester Ad Strategy",
      "The Forester Ad Strategy", 
      "Hammer Them Ad Strategy SOP",
      "The Hydra Ad Strategy",
      "The Slingshot Ad Strategy",
      "The Tornado Ad Strategy",
      "Venus Fly Trap Ad Strategy"
    ]
  },
  {
    id: "ai-masterclass",
    name: "AI Masterclass",
    icon: Brain,
    count: 5,
    description: "AI-powered content creation guides",
    items: [
      "Ad Strategy Breakdown",
      "ChatGPT Guidelines",
      "Claude Artifacts Prompt",
      "Creating Ads with ChatGPT",
      "Shortform Script Writer"
    ]
  },
  {
    id: "email",
    name: "Email Marketing",
    icon: Mail,
    count: 15,
    description: "Chase Dimond collection and email templates",
    items: [
      "Welcome Email Series",
      "Flash Sale Campaign",
      "Holiday Campaign",
      "Product Launch Emails",
      "Referral Campaign"
    ]
  },
  {
    id: "scripts",
    name: "Scripts & Hooks",
    icon: FileText,
    count: 8,
    description: "TikTok scripts, VSLs, and winning hooks",
    items: [
      "30 Winning Scripts",
      "TikTok Shop Scripts",
      "VSL Script Templates",
      "Cold Email Scripts",
      "Script Framework"
    ]
  },
  {
    id: "youtube",
    name: "YouTube Optimization",
    icon: Video,
    count: 1,
    description: "YouTube strategy and optimization guides",
    items: [
      "VidIQ YouTube Strategy"
    ]
  },
  {
    id: "guides",
    name: "Sales Guides",
    icon: Rocket,
    count: 4,
    description: "Launch strategies and sales workbooks",
    items: [
      "Ultimate Sales Guide",
      "Sales Pages Workbook",
      "Launch Strategy 101",
      "Turn One Sales Page into 10+ Emails"
    ]
  }
]

export default function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPDF, setSelectedPDF] = useState<{ name: string; path: string } | null>(null)

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="container py-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Knowledge Base</h2>
        <p className="text-muted-foreground">
          Your complete library of strategies, guides, and resources
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search strategies, guides, templates..."
          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category) => (
          <Card 
            key={category.id} 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedCategory(category.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <category.icon className="h-8 w-8 text-primary" />
                <span className="text-sm text-muted-foreground">{category.count} items</span>
              </div>
              <CardTitle className="text-xl">{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium mb-2">Recent items:</div>
                <ul className="space-y-1">
                  {category.items.slice(0, 3).map((item, index) => (
                    <li key={index} className="truncate">• {item}</li>
                  ))}
                  {category.items.length > 3 && (
                    <li className="text-primary">+ {category.items.length - 3} more</li>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <div className="space-y-2">
                {categories.find(c => c.id === selectedCategory)?.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-3 border rounded hover:bg-accent cursor-pointer"
                    onClick={() => {
                      const categoryFolder = selectedCategory === "strategies" ? "strategies/advanced" : 
                                          selectedCategory === "ai-masterclass" ? "ai-masterclass" :
                                          selectedCategory === "scripts" ? "hooks-headlines" :
                                          selectedCategory === "guides" ? "guides" :
                                          selectedCategory
                      setSelectedPDF({
                        name: item,
                        path: `/Users/boshaffer/bo/ad-scripting-kb/${categoryFolder}/${item}.pdf`
                      })
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}