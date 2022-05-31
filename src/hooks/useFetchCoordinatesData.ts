import { useEffect, useState } from 'react';
import axios from 'axios';

type State = {
  data: any
  loading: boolean
}

const useFetchCoordinatesData = (
  latitude: number,
  longitude: number,
  term: string,
  sortType: string,
  radius: number,
) : State => {
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
          term: `${term}`,
          latitude: `${latitude}`,
          longitude: `${longitude}`,
          sort_by: `${sortType}`,
          radius: `${radius}`,
          limit: 50,
        },
      };

      try {
        const { data: response } = await axios.get(
          `${corsUrlHelper}${process.env.REACT_APP_URL_BASE}`,
          config,
        );
        setData(response);
      } catch (error) {
        throw new Error(`${error}`);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchCoordinatesData;
