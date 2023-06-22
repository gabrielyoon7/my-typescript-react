import {Route} from "../../../types/common.ts";
import MswBasic from "../../../pages/msw/MswBasic/MswBasic.tsx";

export const mswChildren: Route[] = [
  {
    path: '',
    element: <>msw를 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'msw-basic',
    element: <MswBasic/>,
    title: 'MSW Basic',
  },
];
