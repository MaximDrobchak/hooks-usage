import React, { Fragment } from 'react';
import { useFetch, useFormInput } from '../../useHook';

import { Button, Input, List } from '../../components';

export default () =>  {
  const query = useFormInput('Apollo');

  const { data, isLoading, isError, doFetch } = useFetch(
    'http://hn.algolia.com/api/v1/search?query=Apollo',
    { hits: [] },
  );

  const hanleSubmit = e => {
    doFetch(
      `http://hn.algolia.com/api/v1/search?query=${query.value}`,
    );

    e.preventDefault();
  }
  return(
      <Fragment>
      <form >
        <Input {...query} />
        <Button onClick={hanleSubmit} type="submit">Search</Button>
      </form>

        {isLoading  ? <div>isLoding ...</div> :  <List data={data} />}
        {isError && <div>Something went wrong ...</div>}

    </Fragment>

  )
}

