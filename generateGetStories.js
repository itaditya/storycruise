const path = require('path');
const glob = require('glob');

function getTemplate(importString, arrString) {
  return `
${importString}

export function getStories() {
  const stories = [${arrString}];

  return stories;
}
  `;
}

module.exports = function generateGetStories() {
  const options = {
    cwd: path.join(process.cwd(), 'src'),
  };

  return new Promise((resolve, reject) => {
    glob('**/*.stories.jsx', options, async function (err, files) {
      if (err) {
        reject(err);
      }
      const importStatements = [];
      const arrParts = [];
      files.forEach((filePath, index) => {
        const correctPath = path.join('../', filePath);
        const storyName = `story${index}`;
        const importLine = `import * as ${storyName} from '${correctPath}';`;
        importStatements.push(importLine);
        arrParts.push(storyName);
      });
      const importString = importStatements.join('\n');
      const arrString = arrParts.join(', ');
      const code = getTemplate(importString, arrString).trim();

      resolve(code);
    });
  })

}
