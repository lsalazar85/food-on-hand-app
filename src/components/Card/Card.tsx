import React from 'react';
import { CardProps } from '../../interfaces';

const Card = ({
  name, phone, isClosed, rating,
}: CardProps) => (
  <li className="card">
    <span> Name: {name}</span>
    <span> Phone: {phone}</span>
    <span>{isClosed ? 'Open' : 'Closed'}</span>
    <span>Rating: {rating}</span>
    <button type="button" onClick={() => alert('hello')}>
      More Details
    </button>
  </li>
);

export default Card;
