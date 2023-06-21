import CounterRoot from "../../../pages/react/counter/CounterRoot.tsx";
import ArrayRoot from "../../../pages/react/array/ArrayRoot.tsx";
import WrapperRoot from "../../../pages/react/children/WrapperRoot.tsx";
import CustomPasswordRoot from "../../../pages/react/customPassword/CustomPasswordRoot.tsx";
import DynamicTableRoot from "../../../pages/react/dynamcTable/DynamicTableRoot.tsx";
import UseCallbackRoot from "../../../pages/react/useCallback/UseCallbackRoot.tsx";
import UseReducerRoot from "../../../pages/react/useReducer/UseReducerRoot.tsx";
import FunctionContextAPIRoot from "../../../pages/react/functionalContextAPI/FunctionContextAPIRoot.tsx";
import UseSyncExternalStorageRoot from "../../../pages/react/useSyncExternalStorage/UseSyncExternalStorageRoot.tsx";
import UseExternalStateRoot from "../../../pages/react/useExternalState/UseExternalStateRoot.tsx";
import UserIdRoot from "../../../pages/react/useId/UserIdRoot.tsx";
import TearingRoot from "../../../pages/react/tearing/TearingRoot.tsx";
import TransitionRoot from "../../../pages/react/startTransition/TransitionRoot.tsx";
import OptimizationRoot from "../../../pages/react/optimization/OptimizationRoot.tsx";
import UseTransitionRoot from "../../../pages/react/useTransition/UseTransitionRoot.tsx";
import UseDeferredValueRoot from "../../../pages/react/useDeferredValue/UseDeferredValueRoot.tsx";
import UseFetchRoot from "../../../pages/react/useFetch/UseFetchRoot.tsx";
import BatchRoot from "../../../pages/react/batch/BatchRoot.tsx";
import SuspenseRoot from "../../../pages/react/suspense/SuspenseRoot.tsx";
import Temp from "../../../pages/react/Temp.tsx";
import {Route} from "../../../types/common.ts";

export const reactChildren: Route[] = [
  {
    path: '',
    element: <>리액트를 테스트하는 페이지입니다.</>,
    title: 'Home'
  },
  {
    path: 'counter',
    element: <CounterRoot/>,
    title: '카운터 예제 for typescript'
  },
  {
    path: 'array',
    element: <ArrayRoot/>,
    title: '배열 예제 for typescript'
  },
  {
    path: 'wrapper',
    element: <WrapperRoot/>,
    title: 'Wrapper 컴포넌트 테스트'
  },
  {
    path: 'custom-password',
    element: <CustomPasswordRoot/>,
    title: '커스텀 패스워드'
  },
  {
    path: 'dynamic-table',
    element: <DynamicTableRoot/>,
    title: '동적 테이블'
  },
  {
    path: 'use-callback',
    element: <UseCallbackRoot/>,
    title: 'UseCallback 예제'
  },
  {
    path: 'use-reducer',
    element: <UseReducerRoot/>,
    title: 'UseReducer 예제'
  },
  {
    path: 'context-api',
    element: <FunctionContextAPIRoot/>,
    title: 'Context API 예제'
  },
  {
    path: 'use-sync-external-storage',
    element: <UseSyncExternalStorageRoot/>,
    title: 'useSyncExternalStorage 예제'
  },
  {
    path: 'use-external-store',
    element: <UseExternalStateRoot/>,
    title: 'useSyncExternalStorage 훅으로 만들어 본 useExternalState (전역상태관리훅)'
  },
  {
    path: 'use-id',
    element: <UserIdRoot/>,
    title: 'userId 예제'
  },
  {
    path: 'tearing',
    element: <TearingRoot/>,
    title: 'tearing 예제'
  },
  {
    path: 'start-transition',
    element: <TransitionRoot/>,
    title: 'StartTransition 예제'
  },
  {
    path: 'optimization',
    element: <OptimizationRoot/>,
    title: '최적화 예제'
  },
  {
    path: 'useTransition',
    element: <UseTransitionRoot/>,
    title: 'useTransition 예제'
  },
  {
    path: 'useDeferredValue',
    element: <UseDeferredValueRoot/>,
    title: 'useDeferredValue 예제'
  },
  {
    path: 'useFetch',
    element: <UseFetchRoot/>,
    title: 'useFetch 예제'
  },
  {
    path: 'batch',
    element: <BatchRoot/>,
    title: 'batch 예제 (React 17/18 변경하면서 테스트)'
  },
  {
    path: 'suspense',
    element: <SuspenseRoot/>,
    title: 'Suspense 예제',
  },
  {
    path: 'temp',
    element: <Temp/>,
    title: '임시 페이지'
  },
];
