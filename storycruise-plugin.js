const generateGetStories = require('./generateGetStories');

module.exports = function storycruisePlugin() {
  const watchFiles = [];

  return {
    name: 'storycruise-plugin',
    resolve: {
      input: ['.js'],
      output: ['.js'],
    },
    async load({ filePath }) {
      if (!filePath.includes('src/storycruise/getStories.js')) {
        return;
      }

      if (!watchFiles.includes(filePath)) {
        watchFiles.push(filePath);
      }

      const code = await generateGetStories();
      return code;
    },
    onChange({ filePath }) {
      if (!filePath.includes('.stories.js')) {
        return;
      }

      watchFiles.forEach((filePath) => {
        this.markChanged(filePath);
      });
    },
  };
};
