import {createBrowserRouter} from 'react-router-dom';
import ArrayRoot from './pages/array/ArrayRoot';
import WrapperRoot from './pages/children/WrapperRoot';
import CounterRoot from './pages/counter/CounterRoot';
import CustomPasswordRoot from './pages/customPassword/CustomPasswordRoot';
import UseCallbackRoot from './pages/useCallback/UseCallbackRoot';
import UseReducerRoot from './pages/useReducer/UseReducerRoot';
import HomeLayout from './components/HomeLayout';
import UseSyncExternalStorageRoot from './pages/useSyncExternalStorage/UseSyncExternalStorageRoot';
import FunctionContextAPIRoot from './pages/functionalContextAPI/FunctionContextAPIRoot';
import UserIdRoot from './pages/useId/UserIdRoot';
import TearingRoot from './pages/tearing/TearingRoot';
import TransitionRoot from './pages/startTransition/TransitionRoot';
import OptimizationRoot from './pages/optimization/OptimizationRoot';
import Temp from './pages/Temp';
import UseTransitionRoot from "./pages/useTransition/UseTransitionRoot.tsx";
import UseFetchRoot from './pages/useFetch/UseFetchRoot.tsx';
import UseDeferredValueRoot from './pages/useDeferredValue/UseDeferredValueRoot.tsx';
import DynamicTableRoot from './pages/dynamcTable/DynamicTableRoot.tsx';
import BatchRoot from "./pages/batch/BatchRoot.tsx";
import SuspenseRoot from "./pages/suspense/SuspenseRoot.tsx";
import UseExternalStateRoot from "./pages/useExternalState/UseExternalStateRoot.tsx";

export const homeChildren = [
  {
    path: '',
    element: <></>,
    title: 'Home'
  },
  {
    path: '/counter',
    element: <CounterRoot/>,
    title: '카운터 예제 for typescript'
  },
  {
    path: '/array',
    element: <ArrayRoot/>,
    title: '배열 예제 for typescript'
  },
  {
    path: '/wrapper',
    element: <WrapperRoot/>,
    title: 'Wrapper 컴포넌트 테스트'
  },
  {
    path: '/custom-password',
    element: <CustomPasswordRoot/>,
    title: '커스텀 패스워드'
  },
  {
    path: '/dynamic-table',
    element: <DynamicTableRoot/>,
    title: '동적 테이블'
  },
  {
    path: '/use-callback',
    element: <UseCallbackRoot/>,
    title: 'UseCallback 예제'
  },
  {
    path: '/use-reducer',
    element: <UseReducerRoot/>,
    title: 'UseReducer 예제'
  },
  {
    path: '/context-api',
    element: <FunctionContextAPIRoot/>,
    title: 'Context API 예제'
  },
  {
    path: '/use-sync-external-storage',
    element: <UseSyncExternalStorageRoot/>,
    title: 'useSyncExternalStorage 예제'
  },
  {
    path: '/use-external-store',
    element: <UseExternalStateRoot/>,
    title: 'useSyncExternalStorage 훅으로 만들어 본 useExternalState (전역상태관리훅)'
  },
  {
    path: '/use-id',
    element: <UserIdRoot/>,
    title: 'userId 예제'
  },
  {
    path: '/tearing',
    element: <TearingRoot/>,
    title: 'tearing 예제'
  },
  {
    path: '/start-transition',
    element: <TransitionRoot/>,
    title: 'StartTransition 예제'
  },
  {
    path: '/optimization',
    element: <OptimizationRoot/>,
    title: '최적화 예제'
  },
  {
    path: '/useTransition',
    element: <UseTransitionRoot/>,
    title: 'useTransition 예제'
  },
  {
    path: '/useDeferredValue',
    element: <UseDeferredValueRoot/>,
    title: 'useDeferredValue 예제'
  },
  {
    path: '/useFetch',
    element: <UseFetchRoot/>,
    title: 'useFetch 예제'
  },
  {
    path: '/batch',
    element: <BatchRoot/>,
    title: 'batch 예제 (React 17/18 변경하면서 테스트)'
  },
  {
    path: '/suspense',
    element: <SuspenseRoot/>,
    title: 'Suspense 예제',
  },
  {
    path: '/temp',
    element: <Temp/>,
    title: '임시 페이지'
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: homeChildren,
  },
], {
  basename: '/my-typescript-react/'
});

export default router;
