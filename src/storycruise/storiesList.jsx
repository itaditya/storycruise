import React, { useReducer } from 'react';
import * as buttonStories from '../components/Button.stories';
import * as inputStories from '../components/forms/Input.stories';

function argsReducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        [action.arg]: action.value,
      };
    default:
      throw new Error();
  }
}

function ControlsStory({ story }) {
  const [state, dispatch] = useReducer(argsReducer, story.args);

  return (
    <div>
      {story.name}
      <story.Component {...state} />
      <div>
        <h1>Knobs</h1>
        {Object.keys(state).map((argKey) => {
          return (
            <div key={argKey}>
              <h2>{argKey} Knob</h2>
              <input
                type="text"
                className="value-knob"
                value={state[argKey]}
                onChange={(event) => {
                  dispatch({
                    type: 'change',
                    arg: argKey,
                    value: event.target.value,
                  });
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NormalStory({ story }) {
  return (
    <div>
      {story.name}
      <story.Component />
    </div>
  );
}

function StoryPage({ stories }) {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.name}>
          <hr />
          {story.name === 'KnobStory' ? (
            <ControlsStory story={story} />
          ) : (
            <NormalStory story={story} />
          )}
        </div>
      ))}
    </div>
  );
}

function transformStory(storyExport) {
  const config = storyExport.default;
  const compKeys = Object.keys(storyExport);
  const storyKeys = compKeys.filter((name) => name !== 'default');

  const stories = storyKeys.map((name) => {
    const Component = storyExport[name];
    const args = Component.args || {};

    return {
      name,
      Component,
      args,
    };
  });

  const route = {
    path: config.path,
    name: config.name,
    element: <StoryPage stories={stories} key={config.name} />,
  };

  return route;
}

export function getRoutes() {
  const stories = [buttonStories, inputStories];
  const routes = stories.map(transformStory);

  return routes;
}
