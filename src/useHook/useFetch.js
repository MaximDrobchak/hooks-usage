import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setError(false);

      try {
        const result = await axios(url);
        setData(result.data);
        setLoading(false);

      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    setTimeout(() => fetchData(), 3000);
    console.log('fetchData');

  }, [url]); //  to show case isLoading ( destoroy catch side effect )

  const doFetch = url => {
    setUrl(url);
  };

  return { data, isLoading, isError, doFetch };
}