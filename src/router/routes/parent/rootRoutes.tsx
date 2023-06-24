import {reactChildren} from "../children/reactChildren.tsx";
import {Route} from "../../../types/common.ts";
import {recoilChildren} from "../children/recoilChildren.tsx";
import {mswChildren} from "../children/mswChildren.tsx";
import {tanstackQueryChildren} from "../children/tanstackQueryChildren.tsx";
import Layout from "../../../components/Layout";
import {Outlet} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Home from "../../../pages/Home.tsx";
import {zustandChildren} from "../children/zustandChildren.tsx";

const queryClient = new QueryClient();

export const rootRoutes: Route[] = [
  {
    path: '/',
    element: <Home/>,
    title: 'README',
  },
  {
    path: '/react',
    element: (
      <Layout
        title="React/TS"
        routes={reactChildren}
        render={<Outlet/>}
        color="#149eca"
        backgroundColor="#23272F"
      />
    ),
    children: reactChildren,
    title: 'React',
  },
  {
    path: '/recoil',
    element: (
      <Layout
        title="Recoil with TodoExample"
        routes={recoilChildren}
        render={
          <RecoilRoot>
            <Outlet/>
          </RecoilRoot>
        }
      />
    ),
    children: recoilChildren,
    title: 'recoil',
  },
  {
    path: '/msw',
    element: (
      <Layout
        title="msw"
        routes={mswChildren}
        render={<Outlet/>}
        color="#FF6A33"
        backgroundColor="#000000"
      />
    ),
    children: mswChildren,
    title: 'msw',
  },
  {
    path: '/tanstack-query',
    element: (
      <Layout
        title="tanstack-query"
        routes={tanstackQueryChildren}
        render={
          <QueryClientProvider client={queryClient}>
            <Outlet/>
            <ReactQueryDevtools initialIsOpen={false}/>
          </QueryClientProvider>
        }
        color="#EF4444"
        backgroundColor="#1E1E1E"
      />
    ),
    children: tanstackQueryChildren,
    title: 'tanstack-query',
  },
  {
    path: '/zustand',
    element: (
      <Layout
        title="zustand"
        routes={zustandChildren}
        render={
          <Outlet/>
        }
        color="black"
        backgroundColor="#FFBB00"
      />
    ),
    children: zustandChildren,
    title: 'zustand',
  },
];
