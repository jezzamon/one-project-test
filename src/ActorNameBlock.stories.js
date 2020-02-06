import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import ActorNameBlock from './ActorNameBlock';
import { color } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs/react';

storiesOf('Actor name', module)
  .addWithJSX('Actor Name with Primary Font', () => (
    <ActorNameBlock
      fontColor='red'
      fontSelection={text('font selection', 'primaryFont', 'group1')}
    />
  ))
  .addWithJSX('Actor Name with Secondary Font', () => (
    <ActorNameBlock
      fontColor={text('font color', `red`, 'group1')}
      fontSelection={text('font selection', 'secondaryFont', 'group1')}
    />
  ))
  .addWithJSX('Actor Name with customizable css', () => (
    <ActorNameBlock
      fontColor={text('font color', `red`, 'group1')}
      fontSelection={text('font selection', 'secondaryFont', 'group1')}
    />
  ));
// .addWithJSX('another background', () => (
//   <ActorNameBlock text="text3" bg={text('bg', `#475fff`)} />
// ));
