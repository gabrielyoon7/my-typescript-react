import {createBrowserRouter} from 'react-router-dom';
import {rootRoutes} from "./routes/parent/rootRoutes.tsx";

const router = createBrowserRouter(rootRoutes, {
  basename: '/my-typescript-react/'
});

export default router;
