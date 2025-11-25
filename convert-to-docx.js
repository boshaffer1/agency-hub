const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require('docx');

const inputFile = 'james-camp-copywriting-guide-v2.md';
const outputFile = 'google-docs-ready/james-camp-copywriting-guide-v2.docx';

const content = fs.readFileSync(inputFile, 'utf8');

function parseMarkdownToDocx(markdown) {
  const lines = markdown.split('\n');
  const children = [];
  let inCodeBlock = false;
  let codeBlockLines = [];
  let inList = false;
  let listItems = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Handle code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End code block - add all lines as monospaced paragraphs
        codeBlockLines.forEach(codeLine => {
          children.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: codeLine,
                  font: 'Courier New',
                  size: 20,
                })
              ],
              spacing: { before: 100, after: 100 },
              indent: { left: 720 },
              shading: { fill: 'F4F4F4' }
            })
          );
        });
        codeBlockLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      continue;
    }

    // Handle headers
    if (line.startsWith('#### ')) {
      children.push(
        new Paragraph({
          text: line.substring(5),
          heading: HeadingLevel.HEADING_4,
          spacing: { before: 240, after: 120 },
        })
      );
    } else if (line.startsWith('### ')) {
      children.push(
        new Paragraph({
          text: line.substring(4),
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 280, after: 140 },
        })
      );
    } else if (line.startsWith('## ')) {
      children.push(
        new Paragraph({
          text: line.substring(3),
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 320, after: 160 },
        })
      );
    } else if (line.startsWith('# ')) {
      children.push(
        new Paragraph({
          text: line.substring(2),
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 360, after: 180 },
        })
      );
    }
    // Handle horizontal rules
    else if (line.trim() === '---' || line.trim() === '***') {
      children.push(
        new Paragraph({
          text: '─────────────────────────────────────────────',
          spacing: { before: 200, after: 200 },
        })
      );
    }
    // Handle lists
    else if (line.match(/^[\s]*[-*]\s/) || line.match(/^[\s]*\d+\.\s/)) {
      let content = line.replace(/^[\s]*[-*]\s/, '').replace(/^[\s]*\d+\.\s/, '');
      children.push(
        new Paragraph({
          children: parseInlineFormatting(content),
          bullet: { level: 0 },
          spacing: { before: 60, after: 60 },
        })
      );
    }
    // Handle empty lines
    else if (line.trim() === '') {
      children.push(
        new Paragraph({
          text: '',
          spacing: { before: 100, after: 100 },
        })
      );
    }
    // Handle regular paragraphs
    else {
      children.push(
        new Paragraph({
          children: parseInlineFormatting(line),
          spacing: { before: 100, after: 100 },
        })
      );
    }
  }

  return children;
}

function parseInlineFormatting(text) {
  const runs = [];
  let currentPos = 0;
  const regex = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentPos) {
      runs.push(new TextRun(text.substring(currentPos, match.index)));
    }

    // Add formatted text
    if (match[1]) {
      // Bold **text**
      runs.push(new TextRun({ text: match[2], bold: true }));
    } else if (match[3]) {
      // Italic *text*
      runs.push(new TextRun({ text: match[4], italics: true }));
    } else if (match[5]) {
      // Code `text`
      runs.push(new TextRun({ text: match[6], font: 'Courier New' }));
    }

    currentPos = match.index + match[0].length;
  }

  // Add remaining text
  if (currentPos < text.length) {
    runs.push(new TextRun(text.substring(currentPos)));
  }

  return runs.length > 0 ? runs : [new TextRun(text)];
}

const paragraphs = parseMarkdownToDocx(content);

const doc = new Document({
  sections: [{
    properties: {},
    children: paragraphs,
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputFile, buffer);
  console.log('✓ Converted to .docx format');
  console.log('✓ Output:', outputFile);
  console.log('\nTo use in Google Docs:');
  console.log('1. Go to Google Drive (drive.google.com)');
  console.log('2. Click "New" > "File upload"');
  console.log('3. Upload the .docx file');
  console.log('4. Double-click to open in Google Docs');
  console.log('5. All formatting will be preserved!');
});
