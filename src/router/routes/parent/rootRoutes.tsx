import Home from "../../../components/Home";
import ReactLayout from "../../../components/ReactLayout";
import {reactChildren} from "../children/reactChildren.tsx";

export const rootRoutes = [
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
