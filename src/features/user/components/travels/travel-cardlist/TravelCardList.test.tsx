import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../../../mocks/handlers';
import { server } from '../../../../../mocks/server';
import { renderWithProviders } from '../../../../../mocks/test-util';
import { TravelPage } from '../../../../../pages/MyTravels/TravelPage';
import { Travel } from '../../../../../shared/models/travel-model';
import { TravelCardList } from './TravelCardList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a continent card list component', () => {
  describe('When the component loads and Api responds', () => {
    test('Then it should response with a article', async () => {
      const travels: Travel[] = [
        {
          continent: 'Asia',
          travelImage: 'https://example.com/image1.jpg',
          travelCreator: 'Antonio',
          _id: 1,
          userAssociatedVaccines: [
            {
              nameVaccines: 'Neumococo',
              stateVaccines: true,
            },
            {
              nameVaccines: 'Fiebre amarilla',
              stateVaccines: false,
            },
          ],
          travelAssociatedVaccines: [
            {
              nameVaccines: 'Colera',
              stateVaccines: true,
            },
          ],
        },
        {
          continent: 'Asia',
          travelImage: 'https://example.com/image2.jpg',
          travelCreator: 'Alex',
          _id: 2,
          userAssociatedVaccines: [
            {
              nameVaccines: 'Hepatitis A',
              stateVaccines: true,
            },
          ],
          travelAssociatedVaccines: [
            {
              nameVaccines: 'Fiebre tifoidea',
              stateVaccines: true,
            },
            {
              nameVaccines: 'Fiebre amarilla',
              stateVaccines: false,
            },
          ],
        },
      ];
      renderWithProviders(
        <MemoryRouter>
          <TravelCardList travels={travels} />
        </MemoryRouter>,
      );

      await waitFor(() => {
        const travelList = screen.getAllByRole('article');

        expect(travelList[1]).toBeInTheDocument();
      });
    });
  });
});

describe('When component loads and API responds with error', () => {
  test('Then it should show loading and after response should render the error message', async () => {
    server.use(...errorHandlers);
    renderWithProviders(
      <MemoryRouter>
        <TravelPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      const errorMessage = screen.getByText('There is not travels to show');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
