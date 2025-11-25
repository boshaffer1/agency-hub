import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Mail, Calendar, DollarSign, Activity } from "lucide-react"

const clients = [
  {
    id: 1,
    name: "Fashion Brand X",
    service: "TikTok Shop + Email Marketing",
    status: "active",
    revenue: "$45,000/mo",
    performance: "+127%",
    nextDeliverable: "Weekly email campaign",
    dueIn: "2 days"
  },
  {
    id: 2,
    name: "SaaS Startup Y",
    service: "Full Email Automation",
    status: "active", 
    revenue: "$25,000/mo",
    performance: "+89%",
    nextDeliverable: "Onboarding sequence",
    dueIn: "Tomorrow"
  },
  {
    id: 3,
    name: "E-commerce Store Z",
    service: "Instagram Outreach + Ads",
    status: "active",
    revenue: "$35,000/mo", 
    performance: "+156%",
    nextDeliverable: "Ad creative refresh",
    dueIn: "4 days"
  }
]

export default function ClientsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Clients</h2>
        <p className="text-muted-foreground">
          Manage your client relationships and track performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 onboarding</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$285,000</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+124%</div>
            <p className="text-xs text-muted-foreground">ROI improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">37</div>
            <p className="text-xs text-muted-foreground">Across all clients</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Active Clients</h3>
        <div className="grid gap-4">
          {clients.map((client) => (
            <Card key={client.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{client.name}</CardTitle>
                    <CardDescription>{client.service}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{client.performance}</div>
                    <div className="text-sm text-muted-foreground">ROI increase</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <DollarSign className="h-3 w-3" />
                      Revenue
                    </div>
                    <div className="font-medium">{client.revenue}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="h-3 w-3" />
                      Next Deliverable
                    </div>
                    <div className="font-medium">{client.nextDeliverable}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Activity className="h-3 w-3" />
                      Due In
                    </div>
                    <div className="font-medium text-orange-600">{client.dueIn}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}