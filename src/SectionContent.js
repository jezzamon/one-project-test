import React from 'react';
import styled from 'styled-components';
// import { AutoHeaderProvider } from '@one/auto-header';
import AutoHeaderProvider from './autoHeaderProvider';
// import { colors } from '@one/theme-utils';

const StyledSectionContent = styled.div`
    background-color: ${props => props.backgroundColor || 'red'};

    ${props =>
      !props.noborder &&
      `
        border: 1px solid #d6d6d6;
    `}

    ${props =>
      props.padded &&
      `
        padding: ${props.theme.grid.gutter};
    `}

    ${props => props.bottomGutter && `margin-bottom:${props.theme.grid.gutter}`}
`;

const SectionContent = props => (
  // <AutoHeaderProvider>
  <StyledSectionContent {...props} />
  // </AutoHeaderProvider>
);

export default SectionContent;
