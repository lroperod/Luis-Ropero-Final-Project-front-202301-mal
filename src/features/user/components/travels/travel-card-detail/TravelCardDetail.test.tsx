/* eslint-disable testing-library/no-unnecessary-act */
import { MemoryRouter } from 'react-router-dom';
import { server } from '../../../../../mocks/server';
import TravelCardDetail from './TravelCardDetail';
import { renderWithProviders } from '../../../../../mocks/test-util';
import { waitFor, screen, act } from '@testing-library/react';
import { handlers } from '../../../../../mocks/handlers';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a TravelCardDetail component', () => {
  describe('When the id is correct', () => {
    test('Then it should render a card', async () => {
      renderWithProviders(
        <MemoryRouter>
          <TravelCardDetail _id="644ce57c7d6724afce37ed32" />
        </MemoryRouter>,
      );

      await waitFor(() => {
        const description = screen.getByRole('img');
        expect(description).toBeInTheDocument();
      });
    });
  });
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('When the user tries delete her travel', () => {
  test('Then its should be deleted', async () => {
    server.use(...handlers);
    renderWithProviders(
      <MemoryRouter>
        <TravelCardDetail _id="644ce57c7d6724afce37ed32" />
      </MemoryRouter>,
    );

    await act(async () => {
      await userEvent.type(screen.getByTestId('delete'), 'delete');
      userEvent.click(screen.getByRole('button'));
    });
    await waitFor(() => {
      expect(
        screen.getByText('The travel has been deleted'),
      ).toBeInTheDocument();
    });
  });
});

describe('When the user tries delete a travels with wrong data', () => {
  test('Then its should recived a error', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({
        msg: 'The travel does not exist',
      }),
    });
    renderWithProviders(
      <MemoryRouter>
        <TravelCardDetail _id="644ce57c7d6724afce37ed3" />
      </MemoryRouter>,
    );

    await act(async () => {
      await userEvent.type(screen.getByTestId('delete'), 'delete');
      userEvent.click(screen.getByRole('button'));
    });
    await waitFor(() => {
      const errorMsg = screen.getByText('The travel does not exist');
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
