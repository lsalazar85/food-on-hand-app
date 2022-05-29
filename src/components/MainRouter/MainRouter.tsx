import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import { PageNotFound } from '../../pages/PageNotFound';
import { MainList } from '../../pages/MainList';

const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results/:latitude/:longitude" element={<MainList />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default MainRouter;
