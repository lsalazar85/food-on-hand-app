import { useEffect, useState } from 'react';
import axios from 'axios';

import { StateType } from '../types';

const useFetchCoordinatesData = (latitude: number, longitude: number, sortType: string) : StateType => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const corsUrlHelper = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`,
        },
        params: {
          term: 'restaurants',
          latitude,
          longitude,
          sort_by: sortType,
          limit: 30,
        },
      };

      try {
        setLoading(true);
        const { data: response } = await axios.get(
          `${corsUrlHelper}${process.env.REACT_APP_URL_BASE}`,
          config,
        );
        setData(response);
      } catch (e) {
        setLoading(false);
        throw new Error(`${e}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sortType]);

  return {
    data,
    loading,
  };
};

export default useFetchCoordinatesData;
