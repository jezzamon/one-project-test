import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import ActorStatsBlock from './ActorStatsBlock';
import { color } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs/react';

const client = {
  device: {
    isMobile: false,
  },
};

const styles = {
  backgroundColor: 'green',
};

const childs = {
  statTitle: {
    styles: {
      color: {
        statTitleColor: 'black',
      },
    },
  },
  statValue: {
    styles: {
      color: {
        statValueColor: 'black',
      },
    },
  },
  signButton: {
    styles: {
      color: {
        signColor: 'pink',
      },
    },
  },
};

const options = {
  hasBackgroundColor: false,
  hasExpandCollapse: false,
};
storiesOf('Actor Stats', module).addWithJSX(
  'Actor Stats with Primary Font',
  () => (
    <ActorStatsBlock
      client={client}
      styles={styles}
      options={options}
      childs={childs}
    />
  )
);
// .addWithJSX('another background', () => (
//   <ActorStatsBlock text="text3" bg={text('bg', `#475fff`)} />
// ));
