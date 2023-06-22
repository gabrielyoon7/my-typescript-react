import {Route} from "../../../types/common.ts";
import TanstackQuerySimple from "../../../pages/tanstackQuery/TanstackQuerySimple";
import TanstackQueryBasic from "../../../pages/tanstackQuery/basic/TanstackQueryBasic.tsx";

export const tanstackQueryChildren: Route[] = [
  {
    path: '',
    element: <>tanstackQuery를 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'tanstack-query-simple',
    element: <TanstackQuerySimple/>,
    title: 'Tanstack Query Simple',
  },
  {
    path: 'tanstack-query-basic',
    element: <TanstackQueryBasic/>,
    title: 'Tanstack Query Basic',
  },
];
