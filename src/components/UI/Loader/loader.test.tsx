import { render } from '@testing-library/react';
import { Loader } from './index';

describe('Loader', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toBeDefined();
  });
});
