import { render } from '@testing-library/react';
import { Modal } from './index';

describe('Modal', () => {
  it('should render successfully', () => {
    const { asFragment } = render(
      <Modal
        show
        onClose={jest.fn}
        title="Modal"
        content={<div>Content</div>}
      />,
    );
    expect(asFragment()).toBeDefined();
  });
});
