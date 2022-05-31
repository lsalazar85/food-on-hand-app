import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '../../components/UI/Loader';
import { Card } from '../../components/Card';

import { addressData } from '../../redux/store';
import useFetchCoordinatesData from '../../hooks/useFetchCoordinatesData';

const MainList = () => {
  const [term, setTerm] = useState<string>('restaurants');
  const [sortType, setSortType] = useState<string>('rating');
  const address = useSelector(addressData);
  const { data, loading } = useFetchCoordinatesData(
    address?.latitude,
    address?.longitude,
    term,
    sortType,
    1000,
  );

  return (
    <div className="mainList">
      {loading ? (
        <Loader />
      ) : (
        <div className="listWrapper">
          <div className="title">
            <span>
              Address:
              <strong>{address?.addressName}</strong>
            </span>
            <button
              style={{ display: 'none' }}
              type="button"
              onClick={() => setTerm('hello')}
            >
              Hello
            </button>
            <button
              style={{ display: 'none' }}
              type="button"
              onClick={() => setSortType('bye')}
            >
              bye
            </button>
          </div>
          <p>Restaurants List</p>
          <ul className="listContent">
            {data?.businesses.map((item: any) => (
              <Card
                key={item.id}
                name={item.name}
                phone={item.phone}
                isClosed={item.is_closed}
                rating={item.rating}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainList;
