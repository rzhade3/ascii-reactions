import fs from 'fs';
import path from 'path';

type AssetJson = {
  filename: string,
  content: string
}

function getAssets(assetDirectory: string): AssetJson[] {
  const files = fs.readdirSync(assetDirectory)
  return files.map(file => {
    const content: string = fs.readFileSync(path.join(assetDirectory, file), 'utf8');
    return { filename: path.join(assetDirectory, file), content: content }
  });
}

export {
  getAssets,
  type AssetJson
}
