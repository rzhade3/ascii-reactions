// import Asset from './Asset';
import fs from 'fs';
import path from 'path';

function getAssets(assetDirectory: string): [] {
  var assets = [];

  const files = fs.readdirSync(assetDirectory)
  files.forEach(file => {
    const content: string = fs.readFileSync(path.join(assetDirectory, file), 'utf8');
    assets.push({ name: path.parse(file).name, content: content });
  });
  return assets;
}

export {
  getAssets
}
