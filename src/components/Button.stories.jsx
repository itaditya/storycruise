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
  children: 'Submit',
};

KnobStory.argTypes = {
  variant: {
    description: 'Square button or rounded button',
    defaultValue: 'default',
    control: {
      type: 'inline-radio',
      options: ['default', 'rounded'],
    },
  },
  size: {
    description: 'Size of the button',
    defaultValue: 'md',
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

export function LargeRoundedButton() {
  return (
    <div>
      <Button variant="rounded" size="lg">Another button</Button>
    </div>
  );
}
