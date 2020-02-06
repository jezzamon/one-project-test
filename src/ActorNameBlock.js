import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { compose } from 'lodash/fp';

// import { Actor } from '@one/modules/actor';
// import { Row, Column } from '@one/grid';
// import { mediaDown } from '@one/theme-utils';
import Section from './Section';
import SectionContent from './SectionContent';

// import createActorProfile from './createActorProfile';

const ActorNameStyled = styled.div`
  color: ${({ fontColor }) => fontColor};
  text-transform: uppercase;
  font-size: 2.25rem;
  font-family: ${({ fontSelection }) =>
    fontSelection === 'primaryFont' ? 'arial' : 'impact'};
`;

const ActorNameBlock = ({
  // actor,
  fontColor = 'blue',
  fontSelection = 'secondaryFont',
}) => {
  // const actorName = actor.getName(showFirstNamesOnly);
  const actorName = 'Joe Carbonara';

  const getFontClassName = () => {
    const className = {
      primaryFont: 'font-primary',
      secondaryFont: 'font-secondary',
    };
    return className[fontSelection];
  };

  return (
    <div>
      <ActorNameStyled
        className={getFontClassName()}
        fontSelection={fontSelection}
        fontColor={fontColor}
      >
        {actorName}
      </ActorNameStyled>
    </div>
  );
};

ActorNameBlock.propTypes = {
  /** fontColor of the Actor Name */
  fontColor: PropTypes.string.isRequired,
  /** fontSelection of the Actor Name - two choices */
  fontSelection: PropTypes.oneOf(['primaryFont', 'secondaryFont']).isRequired,
};

// export default compose(withTheme, createActorProfile)(ActorNameBlock);
export default ActorNameBlock;
