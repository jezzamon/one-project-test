import React from 'react';

import { storiesOf } from '@storybook/react';
import MainComponent from './Main';

storiesOf('Main', module)
  .addWithJSX('Text Buttons', () => <MainComponent name="here" />)
  .addWithJSX('Text Buttons with knobs', () => <MainComponent name="here" />);
