import React, { useState, useEffect } from 'react';
import { MainContainer, Input } from '../../components';


export default () =>  {
  const [result, setResult] = useState('');

  useEffect(() => {
    document.title = result;

    return () => {
      document.title = '';
    }
  }, [result]); // to show case => cDM

  return (
      <MainContainer result={result} title='function'>
        <Input onChange={e => setResult(e.target.value)} />
      </MainContainer>
      )
}