import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '../../components/UI/Loader';
import { Card } from '../../components/Card';

import { addressData } from '../../redux/store';
import useFetchCoordinatesData from '../../hooks/useFetchCoordinatesData';

import { CardElements } from '../../interfaces';

const MainList = () => {
  const [term, setTerm] = useState<string>('restaurants');
  const address = useSelector(addressData);
  const { data, loading } = useFetchCoordinatesData(
    address?.latitude,
    address?.longitude,
    term,
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
              style={{
                display: 'none',
              }}
              type="button"
              onClick={() => setTerm('hello')}
            >
              Hello
            </button>
          </div>
          <p className="listNearby">Nearby restaurants</p>
          <ul className="listContent">
            {data?.businesses.map((item: CardElements) => (
              <Card key={item.id} details={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainList;
