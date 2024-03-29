import { useState } from 'react';
import { CardProps } from '../../interfaces';
import { Modal } from '../UI/Modal';
import { Image } from '../UI/Image';
import { Button } from '../UI/Button';

const Card = ({ details }: CardProps) => {
  const {
    name,
    phone,
    is_closed,
    rating,
    image_url,
    location,
    distance,
    review_count,
  } = details;
  const [showModal, setShowModal] = useState(false);
  const totalDistance = parseInt(`${distance}`, 10);

  return (
    <li className="card">
      <span>Name: {name}</span>
      <span>Phone: {phone}</span>
      <span>{is_closed ? 'Open' : 'Closed'}</span>
      <span>Rating: {rating}</span>
      <span>Reviews: {review_count}</span>
      <span>
        Distance: {totalDistance < 1000 ? `${totalDistance} meters` : `${totalDistance / 1000} km`}
      </span>
      <Button
        text="More details"
        onClick={() => setShowModal((prevState) => !prevState)}
      />
      {showModal && (
        <Modal
          title={`${name}`}
          show={showModal}
          onClose={() => setShowModal((prevState) => !prevState)}
          content={(
            <div className="content">
              <Image width="260px" height="auto" src={image_url} alt={name} />
              <div className="details">
                <span>Address: {location?.address1}</span>
                <span>City: {location?.city}</span>
                <span>Zip code: {location?.zip_code}</span>
                <span>Country: {location?.country}</span>
              </div>
            </div>
          )}
        />
      )}
    </li>
  );
};

export default Card;
