import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist', 'index.html');

if (fs.existsSync(distPath)) {
  let html = fs.readFileSync(distPath, 'utf8');
  
  // Find the noscript in the body (where we put it to avoid build errors)
  const noscriptRegex = /<noscript><img[^>]*><\/noscript>/;
  const match = html.match(noscriptRegex);
  
  if (match) {
    const noscriptTag = match[0];
    // Remove from body
    html = html.replace(noscriptTag, '');
    // Insert into head (before </head>)
    html = html.replace('</head>', `  ${noscriptTag}\n  </head>`);
    
    fs.writeFileSync(distPath, html);
    console.log('Successfully moved Pixel noscript to <head> in production build.');
  } else {
    console.log('Pixel noscript not found in dist/index.html. It might already be in the head or missing.');
  }
} else {
  console.error('dist/index.html not found. Make sure to run npm run build first.');
}
