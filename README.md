# StoryCruise

An experiment to render stories (from Storybook) with Snowpack.

* Storybook is a great tool but it takes ages to load.
* Snowpack opens pretty fast.
* What if it could read Component Story Format and show them on a page like Storybook?
* What if it gives props editor with live preview?

Let's see how this goes.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080/stories to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
