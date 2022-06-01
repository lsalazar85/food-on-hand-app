import { render } from '@testing-library/react';
import { Image } from './index';

describe('Image', () => {
  it('should render successfully', () => {
    const { asFragment } = render(
      <Image width="100px" height="100px" src="https://" alt="Image" />,
    );
    expect(asFragment()).toBeDefined();
  });
});
