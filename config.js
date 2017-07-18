import path from 'path';

let gulpPath = './gulpfile.js';
let srcPath = '';
let buildPath = 'dist';
let assetsFolder = 'assets';
let stylesheetsFolder = 'stylesheets';
let scriptsFolder = 'app';
let imagesFolder = 'images';

export default {
  src: {
    path: path.join(srcPath),
    assets: path.join(srcPath, assetsFolder),
    files: [
      path.join(srcPath, '**/*.{css,png,jpg,gif,svg,ico,txt,xml,json}'),
      path.join(srcPath, 'index.html')
    ]
  },
  build: {
    path: path.join(buildPath),
    assets: path.join(buildPath, assetsFolder)
  },
  stylesheetsFolder,
  scriptsFolder,
  imagesFolder,
  stylesheets: path.join(srcPath, assetsFolder, stylesheetsFolder, '**/*.{scss,sass}'),
  gulpScripts: [path.join(gulpPath, '**/*.js')],
  scripts: path.join(srcPath, '**/*.js')
};
