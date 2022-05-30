import logo from '../../../images/bettervet.svg';
import { Image } from '../Image';

const Loader = () => (
  <div className="loader">
    <Image src={logo} width="100px" height="100px" alt="BetterVet loader" />
  </div>
);

export default Loader;
