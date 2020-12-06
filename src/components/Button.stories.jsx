import React from 'react';

import Button from './Button';

const storyConfig = {
  name: 'Button',
  path: 'button',
}

export default storyConfig;

export function KnobStory(args) {
  return (
    <div>
      <Button {...args} />
    </div>
  );
}

KnobStory.args = {
  className: 'extra-btn-class',
  children: 'Main way to use btn'
};

export function SecondStory() {
  return (
    <div>
      <Button>
        Other way to use button
      </Button>
    </div>
  );
}
