import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import { PageNotFound } from '../../pages/PageNotFound';
import { MainList } from '../../pages/MainList';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search/:latitude/:longitude" element={<MainList />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default MainRouter;
