export const getAllTravels = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}api/vi/travel`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
