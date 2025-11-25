"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  Wrench,
  FileText,
  Rocket,
  Brain,
  Target,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview and quick stats",
  },
  {
    name: "Knowledge Base",
    href: "/knowledge",
    icon: BookOpen,
    description: "Strategies, guides, and resources",
  },
  {
    name: "Clients",
    href: "/clients",
    icon: Users,
    description: "Client management and projects",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    description: "Performance metrics and reports",
  },
  {
    name: "Tools",
    href: "/tools",
    icon: Wrench,
    description: "Content generators and utilities",
  },
]

const quickAccess = [
  {
    name: "Ad Strategies",
    href: "/knowledge/strategies",
    icon: Target,
    color: "text-blue-600",
  },
  {
    name: "AI Masterclass",
    href: "/knowledge/ai-masterclass",
    icon: Brain,
    color: "text-purple-600",
  },
  {
    name: "Email Templates",
    href: "/knowledge/email",
    icon: FileText,
    color: "text-green-600",
  },
  {
    name: "Launch Scripts",
    href: "/tools/scripts",
    icon: Rocket,
    color: "text-orange-600",
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col w-64 bg-card border-r min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Agency Hub</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Vibe Marketing Command Center
        </p>
      </div>

      <div className="flex-1 px-3">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.name}</div>
                  {isActive && (
                    <div className="text-xs opacity-70">{item.description}</div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8">
          <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Quick Access
          </h3>
          <div className="space-y-1">
            {quickAccess.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <item.icon className={cn("h-4 w-4", item.color)} />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          <div>Speed &gt; Perfection</div>
          <div className="mt-1">AI Execution, Human Strategy</div>
        </div>
      </div>
    </nav>
  )
}