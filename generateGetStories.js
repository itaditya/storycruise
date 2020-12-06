const path = require('path');
const fs = require('fs').promises;
const glob = require('glob');

const getStoriesFilePath = path.join(__dirname, 'src', 'storycruise', 'getStories.js');

function getTemplate(importString, arrString) {
  return `
${importString}

export default function getStories() {
  const stories = [${arrString}];

  return stories;
}
  `;
}

const options = {
  cwd: path.join(process.cwd(), 'src'),
};

glob('**/*.stories.jsx', options, async function (er, files) {
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
  await fs.writeFile(getStoriesFilePath, code);
});
