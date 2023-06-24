import {Route} from "../../../types/common.ts";
import Counter from "../../../pages/zustand/Counter";

export const zustandChildren: Route[] = [
  {
    path: '',
    element: <>zustand를 테스트하는 페이지입니다.</>,
    title: 'README'
  },
  {
    path: 'counter',
    element: <Counter/>,
    title: 'counter'
  },
];
