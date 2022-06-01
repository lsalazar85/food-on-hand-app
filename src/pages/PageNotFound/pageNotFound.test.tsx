import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { PageNotFound } from './index';

describe('PageNotFound', () => {
  it('should render successfully', () => {
    const { asFragment } = render(
      <Router>
        <PageNotFound />
      </Router>,
    );
    expect(asFragment()).toBeDefined();
  });
});
