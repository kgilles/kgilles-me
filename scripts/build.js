console.log('=== Building started ===');

const fs = require('fs');
const path = require('path');
const minifyCSS = require('./minifyCSS.js');

const baseDir = process.cwd();
const buildDir = path.join(baseDir, 'build');

const faviconRelatedFiles = [
  'android-chrome-192x192.png',
  'android-chrome-256x256.png',
  'apple-touch-icon.png',
  'browserconfig.xml',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.ico',
  'mstile-150x150.png',
  'safari-pinned-tab.svg',
  'site.webmanifest'
];

if (!fs.existsSync(buildDir)) {
  console.log('Build folder does not exist - Creating');
  fs.mkdirSync(buildDir);
}

// Styles
console.log("\n=== Trimming and bundling style files ===");

const stylesDir = path.join(baseDir, 'styles');
const buildStylesFile = path.join(buildDir, 'bundle.css');
const trimmedStyles = minifyCSS(stylesDir);

fs.writeFileSync(buildStylesFile, trimmedStyles);

// HTML
console.log("\n=== Stripping stylesheets from HTML file ===");

const htmlFile = path.join(baseDir, 'index.html');
const buildHtmlFile = path.join(buildDir, 'index.html');
const htmlContent = fs.readFileSync(htmlFile, 'utf8');
const bundleStylesheetTag = '<link rel="stylesheet" type="text/css" href="bundle.css">'

const builtHtml = htmlContent.split("\n").reduce((acc, line, ind, arr) => {
  if (!line.includes('stylesheet')) {
    if (line.includes('<img') && line.includes('.png')) {
      const imagePath = line.match(/src="(.*?.png)/)[1];
      const newPath = `images/${imagePath}`;
      console.log(`Replacing image path ${imagePath} with ${newPath}`);

      const updatedLine = line.replace(imagePath, newPath);
      return acc + updatedLine;
    }
    return acc + (ind !== 0 ? "\n" : "") + line;
  } else if (!arr[ind + 1].includes('stylesheet')) {
    console.log(`Stripping stylesheet tag ${line}`);
    console.log('Appending bundled style file stylesheet tag');

    const indentation = line.match(/[\s]+/)[0];
    return acc + "\n" + indentation + bundleStylesheetTag;
  }

  console.log(`Stripping stylesheet tag ${line}`);

  return acc;
}, '');

fs.writeFileSync(buildHtmlFile, builtHtml);

// Images
console.log("\n=== Copying images to build folder ===");

const imageBuildDir = path.join(buildDir, 'images');

if (!fs.existsSync(imageBuildDir)) {
  console.log("Image build folder does not exist - Creating\n");
  fs.mkdirSync(imageBuildDir);
}
fs.readdirSync(baseDir).forEach((file) => {
  if ((file.endsWith('.jpg') || file.endsWith('.png')) && !faviconRelatedFiles.includes(file)) {
    const newImagePath = path.join(imageBuildDir, file);

    console.log(`Copying ${file} to ${newImagePath}`);

    fs.copyFileSync(file, newImagePath);
  }
});

// Favicons
console.log("\n=== Copying favicon related files to build folder ===");

faviconRelatedFiles.forEach((file) => {
  const newPath = path.join(buildDir, file);
  console.log(`Copying ${file} to ${newPath}`);

  fs.copyFileSync(file, newPath);
});