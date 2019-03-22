import React from 'react';
import { compose } from 'recompose';

const withError = Component => ({ isError, ...others }) =>
  isError
    ? <div>Something went wrong ...</div>
    : <Component {...others} /> ;


const withLoading = Component => ({ isLoding, ...others }) =>
  isLoding
    ? <div>isLoding ...</div>
    : <Component {...others} />;


export default compose(withError, withLoading);

export {
  withError,
  withLoading
}