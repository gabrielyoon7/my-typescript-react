import React from 'react';
import styled from 'styled-components';
import List from './List';
import ListItem from './ListItem';

const StyledApp = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
`;

const ListRoot = () => {
  return (
    <StyledApp>
      <h2>Custom List Component Example</h2>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </StyledApp>
  );
};

export default ListRoot;
