import { createBrowserRouter } from 'react-router-dom';
import ArrayRoot from './pages/array/ArrayRoot';
import CardNumbersRoot from './pages/cardNumbers/CardNumbersRoot';
import WrapperRoot from './pages/children/WrapperRoot';
import CounterRoot from './pages/counter/CounterRoot';
import CustomPasswordRoot from './pages/customPassword/CustomPasswordRoot';
import UseCallbackRoot from './pages/useCallback/UseCallbackRoot';
import UseReducerRoot from './pages/useReducer/UseReducerRoot';
import AnotherApp from './pages/useSyncExternalStorage/AnotherApp';
import TodosApp from './pages/useSyncExternalStorage/TodoApp';
import HomeLayout from './components/HomeLayout';

export const homeChildren = [
  {
    path: '',
    element: <></>,
    title: 'Home'
  },
  {
    path: '/array',
    element: <ArrayRoot />,
    title: 'ArrayRoot'
  },

  {
    path: '/card-number-root',
    element: <CardNumbersRoot />,
    title: 'CardNumbersRoot'
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: homeChildren,
  },
], {
  basename: '/'
});

export default router;