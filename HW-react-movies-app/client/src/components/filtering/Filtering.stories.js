import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Filtering from './Filtering';

export default {
  title: 'Filtering',
  component: Filtering,
  decorators: [withKnobs],
};

const filterItems = ['All', 'Comedy', 'Action', 'Drama', 'Fantasy'];

export const AppliedFilter = () => {
  return (
    <Filtering
      items={filterItems}
      appliedFilter={text('Comedy', 'Comedy')}
      applyFilter={action('clicked')}
    />
  );
};
