import React from 'react';

import styled from 'styled-components';

const Header = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content:  space-between;
  background-color: ${props => props.color};
  @media (max-weight:650) {
      width: 100%;
  }

  &:hover {
    background-color: #0f0;
  }
`;

function App() {
  return (
    <div>
      <Header color='#f00'/>     
    </div>
  );
}

export default App;
