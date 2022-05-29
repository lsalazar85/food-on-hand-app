import { Search } from '../../components/Search';
import { Button } from '../../components/UI/Button';

const Home = () => (
  <div className="home">
    <h2>Enter your city or location</h2>
    <div className="homeSearch">
      <Search />
      <Button text="Search" onClick={() => console.log('hello')} />
    </div>
  </div>
);

export default Home;
