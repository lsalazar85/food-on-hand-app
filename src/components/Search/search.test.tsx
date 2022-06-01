import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../redux/store';

import { Search } from './index';

describe('Search', () => {
  it('should render successfully', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Search />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toBeDefined();
  });
});
