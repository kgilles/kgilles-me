console.log('=== Building started ===');

const fs = require('fs');
const path = require('path');

const baseDir = process.cwd();
const buildDir = path.join(baseDir, 'build');

if (!fs.existsSync(buildDir)) {
  console.log('Build folder does not exist - Creating');
  fs.mkdirSync(buildDir);
}

// Styles
console.log("\n=== Trimming and bundling style files ===");

const stylesDir = path.join(baseDir, 'styles');
const buildStylesFile = path.join(buildDir, 'bundle.css');

let stylesContents = '';

fs.readdirSync(stylesDir).forEach((file, i, arr) => {
  console.log(`Bundling file ${i+1}/${arr.length} (${file})`);

  const styleFile = path.join(stylesDir, file);
  stylesContents = stylesContents + fs.readFileSync(styleFile, 'utf8');
});

let trimmedStyles = stylesContents.replace(/\n/g, '');
const imagesPaths = trimmedStyles.match(/'.*?\.jpg'/g);

imagesPaths.forEach((imagePath) => {
  const purePath = imagePath.replace(/'/g, '');
  const newPath = `images/${purePath.replace('../', '')}`;
  console.log(`Replacing image path ${purePath} with ${newPath}`);

  trimmedStyles = trimmedStyles.replace(purePath, newPath);
});

fs.writeFileSync(buildStylesFile, trimmedStyles);

// HTML
console.log("\n=== Stripping stylesheets from HTML file ===");

const htmlFile = path.join(baseDir, 'index.html');
const buildHtmlFile = path.join(buildDir, 'index.html');
const htmlContent = fs.readFileSync(htmlFile, 'utf8');
const bundleStylesheetTag = '<link rel="stylesheet" type="text/css" href="bundle.css">'

const builtHtml = htmlContent.split("\n").reduce((acc, line, ind, arr) => {
  if (!line.includes('stylesheet')) {
    if (line.includes('.png')) {
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
const imageBuildDir = path.join(buildDir, 'images');

if (!fs.existsSync(imageBuildDir)) {
  console.log('Image build folder does not exist - Creating');
  fs.mkdirSync(imageBuildDir);
}

console.log("\n=== Copying images to build folder ===");
fs.readdirSync(baseDir).forEach((file) => {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    const newImagePath = path.join(imageBuildDir, file);

    console.log(`Copying ${file} to ${newImagePath}`);

    fs.copyFileSync(file, newImagePath);
  }
});
