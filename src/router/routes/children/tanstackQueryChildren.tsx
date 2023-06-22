import {Route} from "../../../types/common.ts";
import TanstackQueryBasic from "../../../pages/tanstackQuery/TanstackQueryBasic";

export const tanstackQueryChildren: Route[] = [
  {
    path: '',
    element: <>tanstackQuery를 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'tanstack-query-basic',
    element: <TanstackQueryBasic/>,
    title: 'Tanstack Query Basic',
  },
];
