// src/mocks/handlers.js
import {rest} from 'msw';
import todos from './json-placeholders/todos.json';
import photos from './json-placeholders/photos.json';
import {getSessionStorage, setSessionStorage} from "../utils/storage.ts";
import {SESSION_KEY_OPTIMISTIC_UPDATES, SESSION_KEY_TODO} from "../store/storageKeys.ts";
import {TodoItem} from "../pages/tanstackQuery/types.ts";
import {StationsRequest} from "../pages/googleMaps/ReactWrapperWithTanstackQuery/types/type.ts";
import {markers} from "../pages/googleMaps/ReactWrapperWithTanstackQuery/data/markers.ts";

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

  rest.get('/api/data', (req, res, ctx) => {

    const items = getSessionStorage<TodoItem[]>(SESSION_KEY_OPTIMISTIC_UPDATES, []);

    return res(
      ctx.delay(1000),
      ctx.json({
        ts: Date.now(),
        items,
      })
    );

  }),

  rest.post('/api/data', (req, res, ctx) => {

    const items = getSessionStorage<TodoItem[]>(SESSION_KEY_OPTIMISTIC_UPDATES, []);

    const {text} = req.body as { text: string };

    // sometimes it will fail, this will cause a regression on the UI

    if (Math.random() > 0.7) {
      alert('failed');
      return res(
        ctx.status(500),
        ctx.json({message: 'Could not add item!'})
      );
    }
    const newTodo: TodoItem = {id: Math.random().toString(), text: text.toUpperCase()};
    setSessionStorage<TodoItem[]>(SESSION_KEY_OPTIMISTIC_UPDATES, [...items, newTodo]);
    return res(
      ctx.json(newTodo)
    );
  }),

  rest.get('/tanstack-query/todo', (req, res, ctx) => {
    const todoList = getSessionStorage<TodoItem[]>(SESSION_KEY_TODO, []);

    return res(
      ctx.delay(500),
      ctx.json(todoList)
    );
  }),

  rest.post('/tanstack-query/todo/create', async (req, res, ctx) => {
    const body: {
      text: string
    } = await req.json();

    const {text} = body;

    const prevTodoList = getSessionStorage<TodoItem[]>(SESSION_KEY_TODO, []);
    setSessionStorage(SESSION_KEY_TODO,
      [
        ...prevTodoList,
        {
          id: prevTodoList.length,
          text: text
        }
      ]
    );

    return res(
      ctx.delay(500),
      ctx.status(200),
    );
  }),


  rest.post('/getStations', async (req, res, ctx) => {
    const body: StationsRequest = await req.json();
    const {longitude, latitude, longitudeDelta, latitudeDelta} = body;
    // console.log(lng, lat, deltaX, deltaY,)

    const y1 = (latitude + latitudeDelta);
    const y2 = (latitude - latitudeDelta);
    const x1 = (longitude + longitudeDelta);
    const x2 = (longitude - longitudeDelta);

    const foundMarkers = markers.filter((marker) =>
      (marker.latitude < y1 && marker.latitude > y2) && (marker.longitude < x1 && marker.longitude > x2)
    );
    console.log(foundMarkers.length);
    // console.log(x1, x2, y1, y2)
    return res(
      // Respond with a 200 status code
      ctx.delay(200),
      ctx.status(200),
      ctx.json(foundMarkers)
    );
  }),
];
