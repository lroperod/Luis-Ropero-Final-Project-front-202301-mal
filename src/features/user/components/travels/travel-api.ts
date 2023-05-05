export const getTravelsByEmailCreator = async (userEmail: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/travel/user/${userEmail}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};

export const getTravelById = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/travel/${id}`,
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

export const deleteTravelById = async (id: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/travel/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    },
  );
  return response;
};
