import React from 'react';

import Input from './Input';

const storyConfig = {
  name: 'Input',
  path: 'input',
};

export default storyConfig;

export function KnobStory(args) {
  return (
    <div>
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
