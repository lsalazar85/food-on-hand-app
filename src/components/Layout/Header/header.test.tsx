import { render } from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toBeDefined();
  });
});
