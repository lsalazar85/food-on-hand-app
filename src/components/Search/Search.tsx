import Autocomplete from 'react-google-autocomplete';
import { Button } from '../UI/Button';

const Search = () => {
  const PLACES_API_KEY = process.env.REACT_APP_PLACES_API_KEY;

  return (
    <div className="search">
      <Autocomplete
        className="autoComplete"
        apiKey={PLACES_API_KEY}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        options={{
          types: ['address'],
        }}
      />
      <Button text="Search" onClick={() => console.log('hello')} />
    </div>
  );
};

export default Search;
