import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';

import { Button } from '../UI/Button';
import { setAddress } from '../../redux/slices/address/addressSlice';

import { AddressState } from '../../interfaces';

const Search = () => {
  const [location, setLocation] = useState<AddressState>({
    addressName: '',
    latitude: 0,
    longitude: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const PLACES_API_KEY = process.env.REACT_APP_PLACES_API_KEY;

  const handleClickNavigate = () => {
    dispatch(
      setAddress({
        addressName: location.addressName,
        latitude: location.latitude,
        longitude: location.longitude,
      }),
    );

    navigate(`search/${location.latitude}/${location.longitude}`, {
      replace: true,
    });
  };

  return (
    <div className="search">
      <Autocomplete
        className="autoComplete"
        apiKey={PLACES_API_KEY}
        onPlaceSelected={(place) => {
          setLocation({
            addressName: place?.formatted_address,
            latitude: place?.geometry.location.lat(),
            longitude: place?.geometry.location.lng(),
          });
        }}
        options={{
          types: ['address'],
        }}
      />
      <Button text="Search" onClick={() => handleClickNavigate()} />
    </div>
  );
};

export default Search;
