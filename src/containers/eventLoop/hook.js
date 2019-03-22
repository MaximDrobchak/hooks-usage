import React, { useState, useEffect } from 'react';
import { MainContainer, Button } from '../../components';


export default () =>  {
  const [result, setResult] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${result} times`);
    }, 3000);

  }, [result]);

  return (
      <MainContainer result={result} title='function'>
        <Button onClick={e => setResult(result + 1)} >Increment</Button>
      </MainContainer>
      )
}