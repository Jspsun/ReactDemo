import React from 'react';
import Styled from 'styled-components';

export default function StyledComponent() {
  const ColoredDiv = Styled.div`
    color: red;
  `;
  return (
    <ColoredDiv>This is a styled component</ColoredDiv>
  );
}
