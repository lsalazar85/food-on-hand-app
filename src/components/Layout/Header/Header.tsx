import logo from '../../../images/bettervet.svg';
import { Image } from '../../UI/Image';

const Header = () => (
  <header>
    <div className="headerSide">
      <h2>Food On Hand</h2>
      <span>by</span>
      <Image width="5rem" height="auto" src={logo} alt="BetterVet Logo" />
    </div>
    <div className="headerSide">
      <span>Find restaurants by your favorite location</span>
    </div>
  </header>
);

export default Header;
