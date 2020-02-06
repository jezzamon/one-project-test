import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs/react';
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX('with variable text knob', () => (
    <Button
      text={text('text', `Variable text`, 'group1')}
      bg={color('bg', 'palegoldenrod', 'group1')}
      onClick={action('button-click')}
    />
  ))
  .addWithJSX('with background', () => (
    <Button text="text2" bg={color('bg', 'tomato', 'group1')} />
  ))
  .addWithJSX('another background', () => (
    <Button text="text3" bg={text('bg', `#475fff`)} />
  ));

Button.propTypes = {
  bg: PropTypes.string.isRequired,
  text: PropTypes.string,
};
