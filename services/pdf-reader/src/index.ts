import fs from 'fs/promises';
import pdf from 'pdf-parse';
import chalk from 'chalk';
import wrapAnsi from 'wrap-ansi';
import path from 'path';

export async function readPDF(pdfPath: string): Promise<string> {
  try {
    const dataBuffer = await fs.readFile(pdfPath);
    const data = await pdf(dataBuffer);
    
    return data.text;
  } catch (error) {
    throw new Error(`Failed to read PDF: ${error.message}`);
  }
}

export async function formatPDFContent(text: string, options: {
  width?: number;
  showPageBreaks?: boolean;
  highlight?: string[];
} = {}): string {
  const { 
    width = 80, 
    showPageBreaks = true,
    highlight = []
  } = options;
  
  // Split into paragraphs
  const paragraphs = text.split(/\n\s*\n/);
  
  // Format each paragraph
  const formatted = paragraphs.map(para => {
    let formatted = para.trim();
    
    // Wrap text
    formatted = wrapAnsi(formatted, width);
    
    // Highlight keywords
    highlight.forEach(keyword => {
      const regex = new RegExp(keyword, 'gi');
      formatted = formatted.replace(regex, match => chalk.yellow.bold(match));
    });
    
    return formatted;
  });
  
  return formatted.join('\n\n');
}

export async function extractPDFMetadata(pdfPath: string): Promise<{
  pages: number;
  info: any;
  outline: any;
}> {
  const dataBuffer = await fs.readFile(pdfPath);
  const data = await pdf(dataBuffer);
  
  return {
    pages: data.numpages,
    info: data.info,
    outline: data.outline
  };
}

// CLI usage
if (require.main === module) {
  const pdfPath = process.argv[2];
  
  if (!pdfPath) {
    console.error(chalk.red('Please provide a PDF file path'));
    process.exit(1);
  }
  
  (async () => {
    try {
      console.log(chalk.cyan.bold('\n📄 PDF Reader\n'));
      console.log(chalk.gray('─'.repeat(80)));
      
      const text = await readPDF(pdfPath);
      const metadata = await extractPDFMetadata(pdfPath);
      
      console.log(chalk.bold('File:'), path.basename(pdfPath));
      console.log(chalk.bold('Pages:'), metadata.pages);
      if (metadata.info.Title) {
        console.log(chalk.bold('Title:'), metadata.info.Title);
      }
      if (metadata.info.Author) {
        console.log(chalk.bold('Author:'), metadata.info.Author);
      }
      
      console.log(chalk.gray('─'.repeat(80)));
      console.log();
      
      const formatted = await formatPDFContent(text, {
        width: 80,
        highlight: process.argv.slice(3) // Any additional args are keywords to highlight
      });
      
      console.log(formatted);
      
      console.log();
      console.log(chalk.gray('─'.repeat(80)));
      console.log(chalk.green('✓ End of document'));
      
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  })();
}