import { rest } from 'msw';

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({
            msg: 'Successfully logged in!',
          }),
        );
      }
      return res(ctx.status(500), ctx.json({ msg: 'Error while logging in' }));
    },
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/api/v1/travel/644ce57c7d6724afce37ed32`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ msg: 'The travel has been deleted' }),
      );
    },
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/travel/644ce57c7d6724afce37ed30`,
    (_req, res, ctx) => {
      return res.once(
        ctx.status(404),
        ctx.json({ msg: 'The travel does not exist' }),
      );
    },
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}/api/v1/travel/644ce57c7d6724afce37ed32`,
    (_req, res, ctx) => {
      return res.once(
        ctx.status(404),
        ctx.json({ msg: 'There is not travel to delete' }),
      );
    },
  ),
];
