import { Navigation } from "@/components/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Navigation />
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6">
          {children}
        </div>
      </main>
    </div>
  )
}