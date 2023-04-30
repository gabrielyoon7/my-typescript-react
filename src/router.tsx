import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {
    //     path: '',
    //     element: <Home />,
    //   },
    //   {
    //     path: 'register',
    //     element: <CreditCardRegister />,
    //   },
    //   {
    //     path: 'register-done',
    //     element: <CreditCardRegisterDone />,
    //   },
    // ],
  },
], {
  basename: '/'
});

export default router;