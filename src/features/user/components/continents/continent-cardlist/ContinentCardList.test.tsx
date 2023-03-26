import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockedContinents } from '../../../../../mocks/data';
import { renderWithProviders } from '../../../../../mocks/test-util';
import ContinentCardList from './ContinentCardList';

describe('Given a continent card list component', () => {
  describe('When the component loads and Api responds', () => {
    test('Then it should response with a article', async () => {
      renderWithProviders(
        <MemoryRouter>
          <ContinentCardList continents={[mockedContinents[1]]} />
        </MemoryRouter>,
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

      renderWithProviders(
        <MemoryRouter>
          <ContinentCardList continents={continents} />;
        </MemoryRouter>,
      );

      continents.forEach(async continent => {
        const continentName = screen.getByText(continent.nameContinent);
        expect(continentName).toBeInTheDocument();
        const imageURL = await screen.findByRole('img');
        expect(imageURL).toBeInTheDocument();
      });
    });
  });
});
