import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const useGetData = (api) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
      axios.get(api)
      .then(({data}) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));  
    }, []);

    return { data, isLoading, error };
}

