import { render } from '@testing-library/react';
import { Card } from './index';

describe('Card', () => {
  it('should render successfully', () => {
    const detailsMock = {
      id: '123',
      name: 'Name',
      phone: 12344556,
      is_closed: true,
      rating: 4.5,
      image_url: 'https://',
      location: {
        address1: 'Buenos aires 134',
        city: 'Buenos Aires',
        zip_code: '1407',
        country: 'ARG',
      },
    };

    const { asFragment } = render(<Card details={detailsMock} />);
    expect(asFragment()).toBeDefined();
  });
});
