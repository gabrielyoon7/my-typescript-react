import {Route} from "../../../types/common.ts";
import CounterRoot from "../../../pages/zustand/counter/CounterRoot.tsx";
import TodoRoot from "../../../pages/zustand/todo/TodoRoot.tsx";

export const zustandChildren: Route[] = [
  {
    path: '',
    element: <>zustand를 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'counter',
    element: <CounterRoot/>,
    title: 'counter'
  },
  {
    path: 'todo',
    element: <TodoRoot/>,
    title: 'todo'
  },
];
