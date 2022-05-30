import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/UI/Button';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="pageNotFound">
      <span>Page Not Found</span>
      <Button text="Back to home" onClick={() => navigate('/')} />
    </div>
  );
};

export default PageNotFound;
