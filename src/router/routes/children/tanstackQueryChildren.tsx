import {Route} from "../../../types/common.ts";
import TanstackQueryBasic from "../../../pages/tanstackQuery/basic/TanstackQueryBasic.tsx";
import TanstackQuerySimple from "../../../pages/tanstackQuery/simple/TanstackQuerySimple.tsx";
import TanstackQueryOptimisticUpdatesRoot
  from "../../../pages/tanstackQuery/optimistic-updates/TanstackQueryOptimisticUpdatesRoot.tsx";
import TodoRoot from "../../../pages/tanstackQuery/todo/TodoRoot.tsx";
import DynamicSearchRoot from "../../../pages/tanstackQuery/dynamic-search/DynamicSearchRoot.tsx";

export const tanstackQueryChildren: Route[] = [
  {
    path: '',
    element: <>tanstackQuery를 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'simple',
    element: <TanstackQuerySimple/>,
    title: 'Simple',
  },
  {
    path: 'basic',
    element: <TanstackQueryBasic/>,
    title: 'Basic',
  },
  {
    path: 'optimistic-updates',
    element: <TanstackQueryOptimisticUpdatesRoot/>,
    title: 'Optimistic Updates',
  },
  {
    path: 'todo',
    element: <TodoRoot/>,
    title: 'Todo Example',
  },
  {
    path: 'dynamic-search',
    element: <DynamicSearchRoot/>,
    title: 'Dynamic Search'
  }
];
