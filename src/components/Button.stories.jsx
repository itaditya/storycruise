import React from 'react';

import Button from './Button';

const storyConfig = {
  name: 'Button',
  path: 'button',
  description: 'Primary UI element for click interaction',
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
    description: 'Square button or rounded button',
    control: {
      type: 'inline-radio',
      options: ['default', 'rounded'],
    },
  },
  size: {
    description: 'Size of the button',
    control: {
      type: 'inline-radio',
      options: ['md', 'lg'],
    },
  },
  onClick: {
    description: 'Attach click event handler',
    action: 'clicked',
  },
};

export function SecondaryButtonStory() {
  return (
    <div>
      <Button variant="rounded" size="lg">Another button</Button>
    </div>
  );
}
