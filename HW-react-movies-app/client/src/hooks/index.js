import { useState, useEffect } from 'react';

const useRequest = (request) => {
  const [dataState, setDataState] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    request()
      .then((data) => setDataState(data))
      .then(() => setDataLoading(false));
  }, [request]);
  return [dataState, dataLoading];
};

export { useRequest };
