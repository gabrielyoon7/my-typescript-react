// src/mocks/handlers.js
import {rest} from 'msw';
import todos from './json-placeholders/todos.json';
import photos from './json-placeholders/photos.json';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),

  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    );
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),

  rest.get('/todos', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');
    console.log(query);
    if (query) {
      const matches = todos.filter((todo) => todo.title.includes(query)).map(todo => todo.title);
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.json(matches),
      );
    }

    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json([]),
    );
  }),

  rest.get('/photos', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');
    console.log(query);
    if (query) {
      const matches = photos.filter((photo) => photo.title.includes(query));
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.json(matches),
      );
    }

    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json([]),
    );
  }),
];
