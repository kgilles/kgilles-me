const fs = require('fs');
const path = require('path');

function filesToString(stylesDir) {
  let stylesContents = '';

  fs.readdirSync(stylesDir).forEach((file, i, arr) => {
    console.log(`Bundling file ${i+1}/${arr.length} (${file})`);

    const styleFile = path.join(stylesDir, file);
    stylesContents = stylesContents + fs.readFileSync(styleFile, 'utf8');
  });

  return stylesContents;
}

function trimStyles(stylesContents) {
  let trimmed = stylesContents.replace(/\n/g, ''); // Put everything on a single line
  trimmed = trimmed.replace(/\/\*.*?\*\//g, ''); // Remove all block comments
  trimmed = trimmed.replace(/[\s|\t]*([{|:|;|}])[\s|\t]*/g, (_, char) => char); // Remove spaces around {};:

  return trimmed;
}

function replaceImagePaths(imagesPaths, trimmedStyles) {
  let stylesWithCorrectPaths = trimmedStyles;

  imagesPaths.forEach((imagePath) => {
    const purePath = imagePath.replace(/'/g, '');
    const newPath = `images/${purePath.replace('../', '')}`;
    console.log(`Replacing image path ${purePath} with ${newPath}`);

    stylesWithCorrectPaths = stylesWithCorrectPaths.replace(purePath, newPath);
  });

  return stylesWithCorrectPaths;
}

module.exports = function(stylesDir) {
  const stylesContents = filesToString(stylesDir);
  const trimmedStyles = trimStyles(stylesContents);
  const imagesPaths = trimmedStyles.match(/'.*?\.jpg'/g);
  const minifiedStyles = replaceImagePaths(imagesPaths, trimmedStyles);

  return minifiedStyles;
}
