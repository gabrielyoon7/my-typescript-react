import {Route} from "../../../types/common.ts";
import TodoPage from "../../../pages/recoil/TodoPage.tsx";
import TodoWithCustomHookPage from "../../../pages/recoil/TodoWithCustomHookPage";
import TodoWithUseRecoilCallbackPage from "../../../pages/recoil/TodoWithUseRecoilCallbackPage";
import TodoWithGetCallbackPage from "../../../pages/recoil/TodoWithGetCallbackPage";
import CountRoot from "../../../pages/recoil/Count/CountRoot.tsx";

export const recoilChildren: Route[] = [
  {
    path: '',
    element: <>리코일을 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'todo',
    element: <TodoPage/>,
    title: 'TodoList',
  },
  {
    path: 'todo-with-custom-hook',
    element: <TodoWithCustomHookPage/>,
    title: 'TodoExample With Custom Hook',
  },
  {
    path: 'todo-with-use-recoil-callback',
    element: <TodoWithUseRecoilCallbackPage/>,
    title: 'TodoExample With useRecoilCallback',
  },
  {
    path: 'todo-with-get-callback',
    element: <TodoWithGetCallbackPage/>,
    title: 'TodoExample With getCallback',
  },
  {
    path: 'count',
    element: <CountRoot/>,
    title: '상태 참조에 대한 영향을 확인하기 위한 페이지',
  },
];
