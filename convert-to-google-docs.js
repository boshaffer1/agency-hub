const fs = require('fs');

const inputFile = 'james-camp-copywriting-guide-v2.md';
const outputFile = 'google-docs-ready/james-camp-copywriting-guide-v2-GOOGLE-DOCS.txt';

const content = fs.readFileSync(inputFile, 'utf8');

let converted = content;

// Convert code blocks to indented plain text
// This regex finds ```...``` blocks and converts them
converted = converted.replace(/```([^`]*)```/gs, (match, code) => {
  // Indent each line with 4 spaces
  return code.trim().split('\n').map(line => '    ' + line).join('\n');
});

// Google Docs handles basic Markdown well, so we keep:
// - Headers (#, ##, ###)
// - Bold (**text**)
// - Lists (-, 1.)
// - All emojis and special characters

// Ensure proper spacing between sections
converted = converted.replace(/\n{4,}/g, '\n\n\n');

// Create output directory if it doesn't exist
if (!fs.existsSync('google-docs-ready')) {
  fs.mkdirSync('google-docs-ready', { recursive: true });
}

// Write the converted content
fs.writeFileSync(outputFile, converted, 'utf8');

console.log(`✓ Converted to Google Docs-ready format`);
console.log(`✓ Output: ${outputFile}`);
console.log(`\nTo use in Google Docs:`);
console.log(`1. Open Google Docs`);
console.log(`2. File > Open > Upload`);
console.log(`3. Upload this .txt file`);
console.log(`4. Google Docs will preserve formatting`);
