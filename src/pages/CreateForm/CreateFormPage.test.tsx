import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-util';
import { screen, waitFor } from '@testing-library/react';
import CreateFormPage from './CreateFormPage';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a TravelForm component', () => {
  describe('When the user tries create his travel', () => {
    test('Then the travel should be created and it will be redirected to travel', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          msg: 'Your travel has been successfully created.',
        }),
      });
      renderWithProviders(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<CreateFormPage />}></Route>
            <Route path="/travel" element={<h1>Hello Travels</h1>}></Route>
          </Routes>
        </MemoryRouter>,
      );
      const inputUserName = screen.getByLabelText('Name');
      await userEvent.type(inputUserName, 'Luis');
      await userEvent.selectOptions(screen.getByRole('combobox'), 'Asia');
      await userEvent.upload(
        screen.getByTestId('photo'),
        new File([''], 'asia.webp'),
      );

      userEvent.click(screen.getByRole('button'));
      const travelsTitle = await screen.findByRole('heading');
      expect(travelsTitle).toHaveTextContent('Hello Travels');
    });
  });
});

describe('When the user tries create a travels with wrong data', () => {
  test('Then its should recived a error', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({
        msg: ' An error has occurred, try again.',
      }),
    });
    renderWithProviders(
      <MemoryRouter>
        <CreateFormPage />
      </MemoryRouter>,
    );
    const inputUserName = screen.getByLabelText('Name');
    await userEvent.type(inputUserName, 'Luis');
    await userEvent.selectOptions(screen.getByRole('combobox'), 'Asia');
    await userEvent.upload(
      screen.getByTestId('photo'),
      new File([''], 'asia.webp'),
    );

    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      const errorMsg = screen.getByText('An error has occurred, try again.');
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
