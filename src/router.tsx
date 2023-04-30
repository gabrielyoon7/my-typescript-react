import { createBrowserRouter } from 'react-router-dom';
import ArrayRoot from './pages/array/ArrayRoot';
import CardNumbersRoot from './pages/cardNumbers/CardNumbersRoot';
import WrapperRoot from './pages/children/WrapperRoot';
import CounterRoot from './pages/counter/CounterRoot';
import CustomPasswordRoot from './pages/customPassword/CustomPasswordRoot';
import UseCallbackRoot from './pages/useCallback/UseCallbackRoot';
import UseReducerRoot from './pages/useReducer/UseReducerRoot';
import HomeLayout from './components/HomeLayout';
import UseSyncExternalStorageRoot from './pages/useSyncExternalStorage/UseSyncExternalStorageRoot';

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
    path: '/card-number',
    element: <CardNumbersRoot />,
    title: 'CardNumbersRoot'
  },
  {
    path: '/wrapper',
    element: <WrapperRoot />,
    title: 'WrapperRoot'
  },
  {
    path: '/counter',
    element: <CounterRoot />,
    title: 'CounterRoot'
  },
  {
    path: '/custom-password',
    element: <CustomPasswordRoot />,
    title: 'CounterRoot'
  },
  {
    path: '/use-callback',
    element: <UseCallbackRoot />,
    title: 'UseCallbackRoot'
  },
  {
    path: '/use-reducer',
    element: <UseReducerRoot />,
    title: 'UseReducerRoot'
  },
  {
    path: '/use-sync-external-storage',
    element: <UseSyncExternalStorageRoot />,
    title: 'UseSyncExternalStorageRoot'
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