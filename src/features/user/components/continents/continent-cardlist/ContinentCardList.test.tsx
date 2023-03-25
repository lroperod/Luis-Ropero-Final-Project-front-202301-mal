import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../../app/store';
import { mockedContinents } from '../../../../../mocks/data';
import ContinentCardList from './ContinentCardList';

describe('Given a continent card list component', () => {
  describe('When the component loads and Api responds', () => {
    test('Then it should response with a article', async () => {
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

  describe('When the component loads and Api respond', () => {
    test('Then it shoud responde  with a list of continents', () => {
      const continents = [
        {
          nameContinent: 'Asia',
          imageURL: 'assets/images-home/asia.webp',
          alt: 'image-asia',
        },
        {
          nameContinent: 'Africa',
          imageURL: 'assets/images-home/africa.webp',
          alt: 'image-africa',
        },
        {
          nameContinent: 'America',
          imageURL: 'assets/images-home/america.webp',
          alt: 'image-america',
        },
      ];

      render(<ContinentCardList continents={continents} />);

      continents.forEach(async continent => {
        const continentName = screen.getByText(continent.nameContinent);
        expect(continentName).toBeInTheDocument();
        const imageURL = await screen.findByRole('img');
        expect(imageURL).toBeInTheDocument();
      });
    });
  });
});
