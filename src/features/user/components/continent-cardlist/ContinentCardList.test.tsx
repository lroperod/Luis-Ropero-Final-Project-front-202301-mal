import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { mockedContinents } from '../../../../mocks/data';
import ContinentCardList from './ContinentCardList';

describe('Given a continent card list component', () => {
  describe('When the component loads and Api responds with continents', () => {
    test('Then it should response with a continent list', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <ContinentCardList continents={[mockedContinents[1]]} />
          </MemoryRouter>
        </Provider>,
      );
      const continentList = await screen.findByRole('article');

      expect(continentList).toBeInTheDocument();
    });
  });
});
