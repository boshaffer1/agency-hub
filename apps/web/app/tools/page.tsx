import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, FileText, Mail, Video, Megaphone, Brain, Target, Zap } from "lucide-react"

const tools = [
  {
    id: "script-generator",
    name: "Script Generator",
    description: "AI-powered script creation for TikTok, YouTube, and ads",
    icon: FileText,
    color: "text-blue-600",
    features: ["Hook generation", "Story structure", "CTA optimization"]
  },
  {
    id: "email-builder",
    name: "Email Campaign Builder",
    description: "Create high-converting email sequences",
    icon: Mail,
    color: "text-green-600",
    features: ["Subject line tester", "Template library", "A/B variants"]
  },
  {
    id: "hook-generator",
    name: "Hook & Headline Generator",
    description: "Generate attention-grabbing hooks and headlines",
    icon: Target,
    color: "text-purple-600",
    features: ["Pattern analysis", "Viral formulas", "Industry-specific"]
  },
  {
    id: "content-calendar",
    name: "Content Calendar",
    description: "Plan and schedule content across all channels",
    icon: Video,
    color: "text-orange-600",
    features: ["Multi-platform", "Batch scheduling", "Performance tracking"]
  },
  {
    id: "ad-creative",
    name: "Ad Creative Studio",
    description: "Design and test ad creatives with AI assistance",
    icon: Megaphone,
    color: "text-red-600",
    features: ["Visual generation", "Copy variations", "Performance prediction"]
  },
  {
    id: "ai-assistant",
    name: "AI Strategy Assistant",
    description: "Get AI-powered marketing strategy recommendations",
    icon: Brain,
    color: "text-indigo-600",
    features: ["Campaign ideation", "Competitor analysis", "Trend detection"]
  }
]

export default function ToolsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tools</h2>
        <p className="text-muted-foreground">
          Power tools for rapid content creation and campaign optimization
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <tool.icon className={`h-8 w-8 ${tool.color}`} />
                <Zap className="h-4 w-4 text-yellow-500" />
              </div>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm font-medium">Features:</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                  Launch Tool
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common workflows and templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              TikTok Script
            </button>
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              Email Sequence
            </button>
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              YouTube Title
            </button>
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              Ad Copy
            </button>
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              Sales Page
            </button>
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              Cold Email
            </button>
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              Product Launch
            </button>
            <button className="p-3 text-sm font-medium border rounded-lg hover:bg-accent transition-colors">
              Social Caption
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}