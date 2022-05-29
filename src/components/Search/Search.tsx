import Autocomplete from 'react-google-autocomplete';

const Search = () => (
  <Autocomplete
    className="search"
    apiKey="AIzaSyBoR9BaNcKHIP1klpOdc-tMgHVlayrbnbU"
    onPlaceSelected={(place) => {
      console.log(place.geometry.location);
    }}
  />
);

export default Search;
