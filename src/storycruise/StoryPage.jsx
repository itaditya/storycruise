import React, { useReducer, useMemo } from 'react';

import { Control } from './Controls';

import styles from './styles.module.css';

function normalizeArgType([name, data]) {
  return {
    name,
    type: { name: 'string', required: true },
    initialValue: undefined,
    defaultValue: undefined,
    description: `${name} description`,
    control: {
      type: 'text',
    },
    ...data,
  };
}

function getStoryKnobs(story) {
  const knobs = {};

  const argTypes = {
    ...story.argTypes,
  };

  Object.entries(story.args).forEach(([name, initialValue]) => {
    const argType =  {
      name,
      initialValue,
    };

    argTypes[name] = argTypes[name] || {};
    Object.assign(argTypes[name], argType);
  });

  Object.entries(argTypes).forEach(([name, data]) => {
    const argType = normalizeArgType([name, data]);
    knobs[name] = argType;
  });

  return knobs;
}

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

function getInitialState(knobs) {
  const initialState = {};

  Object.keys(knobs).forEach((key) => {
    const knob = knobs[key];

    if (!knob.action) {
      initialState[key] = knob.initialValue;
    }
  });

  return initialState;
}

function getActions(knobs) {
  const logger = (text) => () => {
    console.log(`[Action]: ${text}`);
  }

  const handlers = {};

  Object.keys(knobs).forEach((key) => {
    const { action } = knobs[key];

    if (action) {
      handlers[key] = logger(action);
    }
  });

  return handlers;
}

function ControlsStory({ story }) {
  const knobs = useMemo(() => {
    return getStoryKnobs(story);
  }, []);

  const actions = useMemo(() => {
    return getActions(knobs);
  }, []);

  const [state, dispatch] = useReducer(argsReducer, knobs, getInitialState);

  return (
    <div className={styles.controlStoryWrapper}>
      <div className={styles.componentWrapper}>
        <story.Component {...state} {...actions} />
      </div>
      <div>
        <h3>Knobs</h3>
        <div className={styles.propsTable}>
          <div className={styles.tableHeading}>
            <strong className={styles.tableCell}>Name</strong>
            <strong className={`${styles.tableCell} ${styles.propDescription}`}>Description</strong>
            <strong className={styles.tableCell}>Default</strong>
            <strong className={`${styles.tableCell} ${styles.propControl}`}>Control</strong>
          </div>
          <div className={styles.tableBody}>
            {Object.keys(knobs).map((argKey) => {
              const knob = knobs[argKey];

              return (
                <div className={styles.tableRow} key={argKey}>
                  <strong className={styles.tableCell}>{knob.name}</strong>
                  <span className={`${styles.tableCell} ${styles.propDescription}`}>{knob.description}</span>
                  <span className={styles.tableCell}>{knob.defaultValue}</span>
                  <div className={`${styles.tableCell} ${styles.propControl}`}>
                    {
                      knob.action ? (
                        <span>
                          Action- {knob.action}
                        </span>
                      ) : (
                        <Control
                          argKey={argKey}
                          control={knob.control}
                          value={state[argKey]}
                          dispatch={dispatch}
                        />
                      )
                    }
                  </div>
                </div>
              );
            })}
          </div>
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

function StoryPage({ name, description, stories }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      {stories.map((story) => {
        const Component =
          story.name === 'KnobStory' ? ControlsStory : NormalStory;
        return <Component key={story.name} story={story} />;
      })}
    </div>
  );
}

export { StoryPage };
