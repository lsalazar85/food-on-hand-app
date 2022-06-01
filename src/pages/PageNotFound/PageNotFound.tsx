import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/UI/Button';

const PageNotFound = () => {
  const navigate = useNavigate();

  const setNavigate = () => navigate('/');

  return (
    <div className="pageNotFound">
      <span>Page Not Found</span>
      <Button text="Back to home" onClick={() => setNavigate()} />
    </div>
  );
};

export default PageNotFound;
