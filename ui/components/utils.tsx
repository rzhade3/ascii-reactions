// import Asset from './Asset';
import fs from 'fs';
import path from 'path';

type AssetJson = {
  name: string,
  content: string
}

function getAssets(assetDirectory: string): AssetJson[] {
  const files = fs.readdirSync(assetDirectory)
  return files.map(file => {
    const content: string = fs.readFileSync(path.join(assetDirectory, file), 'utf8');
    return { name: path.parse(file).name.replaceAll('_', ' '), content: content }
  });
}

export {
  getAssets,
  type AssetJson
}
