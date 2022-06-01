import { render } from '@testing-library/react';
import { Button } from './index';

describe('Button', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Button text="Button" onClick={jest.fn} />);
    expect(asFragment()).toBeDefined();
  });
});
