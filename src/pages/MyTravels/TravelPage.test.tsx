import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-util';
import { TravelPage } from './TravelPage';

describe('Given a home page', () => {
  test('When the home is used, then it should render a div element', () => {
    renderWithProviders(
      <MemoryRouter>
        <TravelPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
