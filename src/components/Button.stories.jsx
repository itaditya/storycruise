import React from 'react';

import Button from './Button';

const storyConfig = {
  name: 'Button',
  path: 'button',
};

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
  children: 'Submit',
};

KnobStory.argTypes = {
  variant: {
    control: {
      type: 'inline-radio',
      options: ['default', 'rounded'],
    },
  },
  size: {
    control: {
      type: 'inline-radio',
      options: ['md', 'lg'],
    },
  },
};

export function SecondStory() {
  return (
    <div>
      <Button>Another button</Button>
    </div>
  );
}
