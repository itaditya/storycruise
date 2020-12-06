import React from 'react';

import Input from './Input';

const storyConfig = {
  name: 'Select',
  path: 'select',
};

export default storyConfig;

export function KnobStory(args) {
  return (
    <div>
      Select knob content
      <Input type="text" name="username" {...args} />
    </div>
  );
}

KnobStory.args = {
  className: 'extra-class',
  placeholder: 'Gimme your password',
};

export function SecondStory() {
  return (
    <div>
      <Input type="number" name="phoneNumber" />
    </div>
  );
}
