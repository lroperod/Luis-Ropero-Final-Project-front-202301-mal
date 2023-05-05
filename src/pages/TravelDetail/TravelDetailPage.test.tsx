import { screen } from '@testing-library/react';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../mocks/test-util';
import { MemoryRouter } from 'react-router-dom';
import TravelDetailPage from './TravelDetailPage';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a TravelDetail page', () => {
  describe('When this page is rendered', () => {
    test('Then should render a card', () => {
      renderWithProviders(
        <MemoryRouter>
          <TravelDetailPage />
        </MemoryRouter>,
      );

      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });
  });
});
