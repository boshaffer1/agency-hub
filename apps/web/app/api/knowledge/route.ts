import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

// Define the knowledge base structure
const KNOWLEDGE_BASE_PATH = '/Users/boshaffer/bo/ad-scripting-kb'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const file = searchParams.get('file')

    // If requesting a specific file
    if (file) {
      // For now, return file metadata since we can't directly serve PDFs
      return NextResponse.json({
        name: file,
        type: 'pdf',
        message: 'PDF viewing coming soon. File location: ' + path.join(KNOWLEDGE_BASE_PATH, file)
      })
    }

    // If requesting a category listing
    if (category) {
      const categoryPath = path.join(KNOWLEDGE_BASE_PATH, category)
      try {
        const files = await fs.readdir(categoryPath)
        const pdfFiles = files.filter(file => file.endsWith('.pdf'))
        
        return NextResponse.json({
          category,
          files: pdfFiles
        })
      } catch (error) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 })
      }
    }

    // Return all categories
    const categories = await fs.readdir(KNOWLEDGE_BASE_PATH)
    const validCategories = []
    
    for (const cat of categories) {
      const catPath = path.join(KNOWLEDGE_BASE_PATH, cat)
      const stat = await fs.stat(catPath)
      if (stat.isDirectory()) {
        validCategories.push(cat)
      }
    }

    return NextResponse.json({ categories: validCategories })
  } catch (error) {
    console.error('Error in knowledge API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}