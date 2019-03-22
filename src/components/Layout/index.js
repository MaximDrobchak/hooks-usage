import React from 'react';
import Container from './styles';

export default ({ children }) => (
  <Container>
    {children}
  </Container>
);

export const MainContainer = ({ children, result, title }) => (
  <div>
    <strong><i>{title}</i></strong>
    <h1>{result}</h1>
    {children}
  </div>
  );