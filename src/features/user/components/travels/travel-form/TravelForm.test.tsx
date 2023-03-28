import { MemoryRouter } from 'react-router-dom';
import { server } from '../../../../../mocks/server';
import { renderWithProviders } from '../../../../../mocks/test-util';
import TravelForm from './TravelForm';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a TravelForm component', () => {
  describe('When the user tries create his travel', () => {
    test('Then the travel should be created', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          msg: 'Your travel has been successfully created.',
        }),
      });
      renderWithProviders(
        <MemoryRouter>
          <TravelForm />
        </MemoryRouter>,
      );
      const inputUserName = screen.getByLabelText('Name');
      await userEvent.type(inputUserName, 'Luis');
      await userEvent.selectOptions(screen.getByRole('combobox'), 'Asia');
      await userEvent.upload(
        screen.getByTestId('photo'),
        new File([''], 'asia.webp'),
      );

      await userEvent.click(screen.getByRole('button'));

      expect(window.location.pathname).toEqual('/');
    });
  });
});
