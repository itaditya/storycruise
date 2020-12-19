import React, { useReducer } from 'react';

import styles from './styles.module.css';

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
    <div className={styles.controlStoryWrapper}>
      <div className={styles.componentWrapper}>
        <story.Component {...state} />
      </div>
      <div>
        <h3>Knobs</h3>
        <div className={styles.tableHeading}>
          <strong>Name</strong>
          <strong>Description</strong>
          <strong>Default</strong>
          <strong>Control</strong>
        </div>
        <div className={styles.propsTable}>
          {Object.keys(state).map((argKey) => {
            return (
              <div className={styles.tableRow} key={argKey}>
                <span>{argKey}</span>
                <span>{argKey}</span>
                <span>{argKey}</span>
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
    </div>
  );
}

function NormalStory({ story }) {
  return (
    <div>
      <h3>{story.name}</h3>
      <div className={styles.componentWrapper}>
        <story.Component />
      </div>
    </div>
  );
}

function StoryPage({ name, stories }) {
  return (
    <div>
      <h1>{name}</h1>
      {stories.map((story) => {
        const Component =
          story.name === 'KnobStory' ? ControlsStory : NormalStory;
        return <Component key={story.name} story={story} />;
      })}
    </div>
  );
}

export { StoryPage };
