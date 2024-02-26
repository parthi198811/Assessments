import {useEffect, useState} from 'react';

const useFetchData = (url, data = {}, headers = {}) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, data, {headers: headers})
      .then(response => {
        return response.json();
      })
      .then(results => {
        setResults(results);
        setError(null);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {results, error, loading};
};

export default useFetchData;
