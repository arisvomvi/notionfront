import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { copyFileSync } from 'fs';
import { readFileSync, writeFileSync } from 'fs';

// Create the duper directory if it doesn't exist
const duperDir = 'duper';
if (!existsSync(duperDir)) {
  mkdirSync(duperDir);
}

// Build the project
console.log('Building the project...');
execSync('vite build', { stdio: 'inherit' });

// Copy the necessary files to the duper directory
console.log('Copying files...');
copyFileSync('dist/assets/index-B0pgjJo6.js', `${duperDir}/embedded.js`);
copyFileSync('dist/assets/index-Dd8tW0fZ.css', `${duperDir}/embedded.css`); // Add CSS file

// Read the original HTML file
const originalHtml = readFileSync('dist/index.html', 'utf-8');

// Modify the HTML to include the JS and CSS in a non-module way
const modifiedHtml = originalHtml.replace(/<script type="module" crossorigin src="(.+?)"><\/script>/, `<link rel="stylesheet" href="embedded.css"><script src="embedded.js"></script>`);

// Write the modified content back to the HTML file
const htmlFilePath = `${duperDir}/index.html`;
writeFileSync(htmlFilePath, modifiedHtml);
console.log('Files copied and modified successfully.');
