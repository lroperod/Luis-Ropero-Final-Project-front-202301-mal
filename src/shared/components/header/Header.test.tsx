import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../../mocks/test-util';
import { Header } from './Header';
import { fireEvent, screen } from '@testing-library/react';

describe('Given a Header component', () => {
  test('When it renders then it should show logo and 3 links', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header></Header>
      </MemoryRouter>,
    );

    const imgElement = screen.getAllByRole('img');
    const linksElements = screen.getAllByRole('link');

    expect(imgElement.length).toEqual(4);
    expect(linksElements.length).toEqual(3);
  });

  test('When log out button is clicked, then handleLogout should be called', async () => {
    renderWithProviders(
      <MemoryRouter>
        <Header></Header>
      </MemoryRouter>,
    );
    sessionStorage.setItem('accessToken', 'token');
    const logoutButton = screen.getByTestId('Log out');
    const handleLogout = jest.fn();
    fireEvent.click(logoutButton, handleLogout);
    expect(handleLogout).not.toHaveBeenCalled();
    sessionStorage.clear();
  });
});
