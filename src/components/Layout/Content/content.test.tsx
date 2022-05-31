import { render } from '@testing-library/react';
import { Content } from './index';

describe('Content', () => {
  it('should render successfully', () => {
    const { asFragment } = render(
      <Content>
        <div>Content</div>
      </Content>,
    );
    expect(asFragment()).toBeDefined();
  });
});
