import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity, BarChart3, Target, Zap, Clock } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">
          Performance metrics and insights across all campaigns
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.24M</div>
            <p className="text-xs text-muted-foreground">+28% from last quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Campaign Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">Success rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Created</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Pieces this quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">428h</div>
            <p className="text-xs text-muted-foreground">Through automation</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Channel Performance</CardTitle>
            <CardDescription>Revenue by marketing channel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Email Marketing</span>
                  <span className="text-sm text-muted-foreground">42%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "42%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">TikTok Shop</span>
                  <span className="text-sm text-muted-foreground">28%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "28%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Instagram</span>
                  <span className="text-sm text-muted-foreground">18%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "18%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">YouTube</span>
                  <span className="text-sm text-muted-foreground">12%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: "12%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Campaigns</CardTitle>
            <CardDescription>By ROI improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Summer Collection Launch</div>
                  <div className="text-sm text-muted-foreground">Fashion Brand X</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">+342%</div>
                  <div className="text-xs text-muted-foreground">ROI</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Black Friday Email Series</div>
                  <div className="text-sm text-muted-foreground">E-commerce Store Z</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">+287%</div>
                  <div className="text-xs text-muted-foreground">ROI</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Product Launch Funnel</div>
                  <div className="text-sm text-muted-foreground">SaaS Startup Y</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">+218%</div>
                  <div className="text-xs text-muted-foreground">ROI</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Experiment Results</CardTitle>
          <CardDescription>Latest A/B tests and experiments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground">
              <div>Experiment</div>
              <div>Variant</div>
              <div>Improvement</div>
              <div>Status</div>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-4 gap-4 py-2 border-t">
                <div className="font-medium">Email Subject Lines</div>
                <div>Emoji vs Plain</div>
                <div className="text-green-600">+23% Open Rate</div>
                <div className="text-green-600">Winner</div>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-t">
                <div className="font-medium">TikTok Hooks</div>
                <div>Question vs Statement</div>
                <div className="text-green-600">+47% Watch Time</div>
                <div className="text-green-600">Winner</div>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-t">
                <div className="font-medium">CTA Placement</div>
                <div>Top vs Bottom</div>
                <div className="text-yellow-600">+8% CTR</div>
                <div className="text-yellow-600">Testing</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}