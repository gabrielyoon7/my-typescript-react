import {Route} from "../../../types/common.ts";

export const mswChildren: Route[] = [
  {
    path: '',
    element: <>msw를 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'msw-basic',
    element: <>MSW</>,
    title: 'MSW Basic',
  },
];
