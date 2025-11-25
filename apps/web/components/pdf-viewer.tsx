"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Download, ExternalLink } from "lucide-react"

interface PDFViewerProps {
  fileName: string
  filePath: string
  onClose: () => void
}

export function PDFViewer({ fileName, filePath, onClose }: PDFViewerProps) {
  const [loading, setLoading] = useState(true)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-4xl w-full h-[80vh] flex flex-col">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{fileName}</CardTitle>
              <CardDescription>PDF Document</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  // In a real implementation, this would download the PDF
                  alert(`Download functionality coming soon for: ${fileName}`)
                }}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                title="Download PDF"
              >
                <Download className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  // In a real implementation, this would open in new tab
                  alert(`Open in new tab coming soon for: ${fileName}`)
                }}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="h-4 w-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <div className="h-full flex items-center justify-center bg-muted">
            <div className="text-center p-8">
              <p className="text-lg font-medium mb-2">PDF Preview Coming Soon</p>
              <p className="text-sm text-muted-foreground mb-4">
                File location: {filePath}
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>To view this PDF:</p>
                <ul className="list-disc list-inside">
                  <li>Download the file using the download button</li>
                  <li>Or open directly from your file system</li>
                  <li>PDF viewer integration coming in next update</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}