import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../redux/store';

import { MainList } from './index';

describe('MainList', () => {
  it('should render successfully', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MainList />
      </Provider>,
    );
    expect(asFragment()).toBeDefined();
  });
});
