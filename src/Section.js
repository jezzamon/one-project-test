import React from 'react';
import styled from 'styled-components';
import AutoHeaderProvider from './autoHeaderProvider';

const StyledSection = styled.section``;

const Section = ({ headerTag, ...props }) => {
  if (headerTag) {
    return (
      // <AutoHeaderProvider depth={headerTag}>
      <StyledSection {...props} />
      // </AutoHeaderProvider>
    );
  }
  return <StyledSection {...props} />;
};

export default Section;
