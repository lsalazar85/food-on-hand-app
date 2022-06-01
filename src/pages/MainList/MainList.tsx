import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Card } from '../../components/Card';
import { Button } from '../../components/UI/Button';
import { Loader } from '../../components/UI/Loader';

import { addressData } from '../../redux/store';
import useFetchCoordinatesData from '../../hooks/useFetchCoordinatesData';

import { CardElements } from '../../interfaces';

const MainList = () => {
  const [sortType, setSortType] = useState<string>('review_count');
  const address = useSelector(addressData);
  const { data, loading } = useFetchCoordinatesData(
    address?.latitude,
    address?.longitude,
    sortType,
  );
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  const setNavigateHome = () => navigate('/');

  return (
    <div className="mainList">
      <div className="listWrapper">
        <div className="listDetails">
          <span>
            Address:
            <strong>{address?.addressName}</strong>
          </span>
          <div className="listFilter">
            <div className="selectOptions">
              <span>Filter by</span>
              <select
                value={sortType}
                onChange={(e) => handleChange(e)}
              >
                <option value="rating">Top Rating</option>
                <option value="distance">Most Nearby</option>
                <option value="review_count">Total Reviews</option>
              </select>
            </div>
            <Button onClick={setNavigateHome} text="Return to Search" />
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <ul className="listContent">
            {data?.businesses.map((item: CardElements) => (
              <Card key={item.id} details={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MainList;
