import {
  configure,
  setAddon,
  addDecorator,
  addParameters,
} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';
import { themes } from '@storybook/theming';

// Storybook options
addParameters({
  options: {
    theme: themes.light,
  },
});

// external plugins and addons
addDecorator(withInfo);
addDecorator(withKnobs);
setAddon(JSXAddon);
const req = require.context('../src/', true, /.stories.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
