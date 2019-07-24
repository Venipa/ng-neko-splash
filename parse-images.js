const { resolve, join } = require('path');
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const imageLocation = join(__dirname, 'src/neko-sources');

const _getImageJson = () => {
  return readdirSync(imageLocation)
    .filter(x => x.endsWith('image.json'))
    .map(x => join(imageLocation, x))
    .map(x => {
      console.log(JSON.stringify(x));
      return x;
    })
    .map(x => JSON.parse(readFileSync(x).toString('utf-8')));
};
const _parseImageJson = () => {
  const images = _getImageJson();
  writeFileSync(join(imageLocation, 'images.env.json'), JSON.stringify(images));
};

module.exports = {
  getImageJson: () => _getImageJson(),
  parseImageJson: () => _parseImageJson()
};

_parseImageJson();
