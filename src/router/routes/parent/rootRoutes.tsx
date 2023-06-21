import Home from "../../../components/layout/Home";
import ReactLayout from "../../../components/layout/ReactLayout";
import {reactChildren} from "../children/reactChildren.tsx";
import {Route} from "../../../types/common.ts";

export const rootRoutes: Route[] = [
  {
    path: '/',
    element: <Home/>,
    title: 'Home',
  },
  {
    path: '/react',
    element: <ReactLayout/>,
    children: reactChildren,
    title: '리액트',
  },
];
