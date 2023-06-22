import Home from "../../../components/layout/Home";
import ReactLayout from "../../../components/layout/ReactLayout";
import {reactChildren} from "../children/reactChildren.tsx";
import {Route} from "../../../types/common.ts";
import {recoilChildren} from "../children/recoilChildren.tsx";
import RecoilLayout from "../../../components/layout/RecoilLayout.tsx";
import {mswChildren} from "../children/mswChildren.tsx";
import MswLayout from "../../../components/layout/MswLayout.tsx";

export const rootRoutes: Route[] = [
  {
    path: '/',
    element: <Home/>,
    title: 'README',
  },
  {
    path: '/react',
    element: <ReactLayout/>,
    children: reactChildren,
    title: '리액트',
  },
  {
    path: '/recoil',
    element: <RecoilLayout/>,
    children: recoilChildren,
    title: 'recoil',
  },
  {
    path: '/msw',
    element: <MswLayout/>,
    children: mswChildren,
    title: 'msw',
  }
];
