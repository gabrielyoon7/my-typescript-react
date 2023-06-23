import {Route} from "../../../types/common.ts";
import TanstackQueryBasic from "../../../pages/tanstackQuery/basic/TanstackQueryBasic.tsx";
import TanstackQuerySimple from "../../../pages/tanstackQuery/simple/TanstackQuerySimple.tsx";

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
];
