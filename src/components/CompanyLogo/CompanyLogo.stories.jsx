import React from 'react';

import CompanyLogo from './CompanyLogo';

const storyConfig = {
  name: 'CompanyLogo',
  path: 'company-logo',
  description: 'Show logo of company with company name',
};

export default storyConfig;

export function KnobStory(args) {
  return (
    <div>
      <CompanyLogo {...args} />
    </div>
  );
}

KnobStory.args = {
  company: 'slack',
};

KnobStory.argTypes = {
  company: {
    description: 'Name of company',
    control: {
      type: 'select',
      options: ['slack', 'airbnb', 'youtube', 'medium', 'apple', 'google'],
    },
  },
  shade: {
    description: 'Color of the logo',
    control: {
      type: 'inline-radio',
      options: ['000', '639', 'f87171'],
    },
  },
  size: {
    description: 'Size of the logo',
    control: {
      type: 'inline-radio',
      options: ['md', 'lg'],
    },
  },
};
