const fs = require('fs');

const inputFile = 'james-camp-copywriting-guide-v2.md';
const outputFile = 'google-docs-ready/james-camp-copywriting-guide-v2.html';

const content = fs.readFileSync(inputFile, 'utf8');

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function convertMarkdownToHtml(markdown) {
  let html = '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<style>\n';
  html += 'body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; line-height: 1.6; }\n';
  html += 'h1 { font-size: 32px; border-bottom: 3px solid #333; padding-bottom: 10px; margin-top: 40px; }\n';
  html += 'h2 { font-size: 26px; color: #333; margin-top: 30px; }\n';
  html += 'h3 { font-size: 20px; color: #555; margin-top: 25px; }\n';
  html += 'h4 { font-size: 18px; color: #666; margin-top: 20px; }\n';
  html += 'code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace; }\n';
  html += 'pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }\n';
  html += 'ul, ol { margin-left: 20px; }\n';
  html += 'li { margin: 8px 0; }\n';
  html += 'strong { font-weight: bold; }\n';
  html += 'em { font-style: italic; }\n';
  html += 'hr { border: none; border-top: 2px solid #ddd; margin: 30px 0; }\n';
  html += '</style>\n</head>\n<body>\n';

  let lines = markdown.split('\n');
  let inCodeBlock = false;
  let codeBlockContent = '';

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Handle code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End code block
        html += '<pre>' + escapeHtml(codeBlockContent.trim()) + '</pre>\n';
        codeBlockContent = '';
        inCodeBlock = false;
      } else {
        // Start code block
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent += line + '\n';
      continue;
    }

    // Handle headers
    if (line.startsWith('#### ')) {
      html += '<h4>' + processInlineFormatting(line.substring(5)) + '</h4>\n';
    } else if (line.startsWith('### ')) {
      html += '<h3>' + processInlineFormatting(line.substring(4)) + '</h3>\n';
    } else if (line.startsWith('## ')) {
      html += '<h2>' + processInlineFormatting(line.substring(3)) + '</h2>\n';
    } else if (line.startsWith('# ')) {
      html += '<h1>' + processInlineFormatting(line.substring(2)) + '</h1>\n';
    }
    // Handle horizontal rules
    else if (line.trim() === '---' || line.trim() === '***') {
      html += '<hr>\n';
    }
    // Handle unordered lists
    else if (line.match(/^[\s]*[-*]\s/)) {
      let indent = line.match(/^[\s]*/)[0].length;
      let content = line.replace(/^[\s]*[-*]\s/, '');
      if (i === 0 || !lines[i-1].match(/^[\s]*[-*]\s/)) {
        html += '<ul>\n';
      }
      html += '<li>' + processInlineFormatting(content) + '</li>\n';
      if (i === lines.length - 1 || !lines[i+1].match(/^[\s]*[-*]\s/)) {
        html += '</ul>\n';
      }
    }
    // Handle ordered lists
    else if (line.match(/^[\s]*\d+\.\s/)) {
      let content = line.replace(/^[\s]*\d+\.\s/, '');
      if (i === 0 || !lines[i-1].match(/^[\s]*\d+\.\s/)) {
        html += '<ol>\n';
      }
      html += '<li>' + processInlineFormatting(content) + '</li>\n';
      if (i === lines.length - 1 || !lines[i+1].match(/^[\s]*\d+\.\s/)) {
        html += '</ol>\n';
      }
    }
    // Handle empty lines
    else if (line.trim() === '') {
      html += '<br>\n';
    }
    // Handle regular paragraphs
    else {
      html += '<p>' + processInlineFormatting(line) + '</p>\n';
    }
  }

  html += '</body>\n</html>';
  return html;
}

function processInlineFormatting(text) {
  // Escape HTML first
  text = escapeHtml(text);

  // Bold: **text** or __text__
  text = text.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__([^_]+)__/g, '<strong>$1</strong>');

  // Italic: *text* or _text_
  text = text.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
  text = text.replace(/_([^_]+)_/g, '<em>$1</em>');

  // Inline code: `text`
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

  return text;
}

const htmlContent = convertMarkdownToHtml(content);
fs.writeFileSync(outputFile, htmlContent, 'utf8');

console.log('✓ Converted to HTML format');
console.log('✓ Output:', outputFile);
console.log('\nTo use in Google Docs:');
console.log('1. Open Google Docs');
console.log('2. File > Open > Upload');
console.log('3. Upload the .html file');
console.log('4. Google Docs will import with full formatting!');
