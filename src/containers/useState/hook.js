import React, { useState } from 'react';
import { MainContainer, Button } from '../../components';


export default () =>  {
  const [result, setResult] = useState(0);

  return (
      <MainContainer result={result} title='function'>
        <Button onClick={() => setResult(result + 1)}>increment</Button>
        <hr />
        <Button onClick={() => setResult(result - 1)}>decrement</Button>
      </MainContainer>
      )
}