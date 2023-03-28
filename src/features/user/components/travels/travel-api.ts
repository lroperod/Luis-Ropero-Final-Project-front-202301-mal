export const getAllTravels = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/travel`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};

export const createNewTravel = async (newTravel: FormData) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/travel`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: newTravel,
    },
  );
  return response;
};
