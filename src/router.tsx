import { createBrowserRouter } from 'react-router-dom';
import ArrayRoot from './pages/array/ArrayRoot';
import WrapperRoot from './pages/children/WrapperRoot';
import CounterRoot from './pages/counter/CounterRoot';
import CustomPasswordRoot from './pages/customPassword/CustomPasswordRoot';
import UseCallbackRoot from './pages/useCallback/UseCallbackRoot';
import UseReducerRoot from './pages/useReducer/UseReducerRoot';
import HomeLayout from './components/HomeLayout';
import UseSyncExternalStorageRoot from './pages/useSyncExternalStorage/UseSyncExternalStorageRoot';
import FunctionContextAPIRoot from './pages/functionalContextAPI/FunctionContextAPIRoot';

export const homeChildren = [
  {
    path: '',
    element: <></>,
    title: 'Home'
  },
  {
    path: '/counter',
    element: <CounterRoot />,
    title: '카운터 예제 for typescript'
  },
  {
    path: '/array',
    element: <ArrayRoot />,
    title: '배열 예제 for typescript'
  },
  {
    path: '/wrapper',
    element: <WrapperRoot />,
    title: 'Wrapper 컴포넌트 테스트'
  },
  {
    path: '/custom-password',
    element: <CustomPasswordRoot />,
    title: '커스텀 패스워드'
  },
  {
    path: '/use-callback',
    element: <UseCallbackRoot />,
    title: 'UseCallback 예제'
  },
  {
    path: '/use-reducer',
    element: <UseReducerRoot />,
    title: 'UseReducer 예제'
  },
  {
    path: '/context-api',
    element: <FunctionContextAPIRoot />,
    title: 'Context API 예제'
  },
  {
    path: '/use-sync-external-storage',
    element: <UseSyncExternalStorageRoot />,
    title: 'UseSyncExternalStorage 예제'
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