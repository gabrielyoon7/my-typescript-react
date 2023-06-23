import { reactChildren } from "../children/reactChildren.tsx";
import { Route } from "../../../types/common.ts";
import { recoilChildren } from "../children/recoilChildren.tsx";
import { mswChildren } from "../children/mswChildren.tsx";
import { tanstackQueryChildren } from "../children/tanstackQueryChildren.tsx";
import Layout from "../../../components/layouts/Layout.tsx";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "../../../pages/Home.tsx";

const queryClient = new QueryClient();

export const rootRoutes: Route[] = [
  {
    path: '/',
    element: <Home />,
    title: 'README',
  },
  {
    path: '/react',
    element: (
      <Layout
        title="React/TS"
        routes={reactChildren}
        render={<Outlet />}
      />
    ),
    children: reactChildren,
    title: '리액트',
  },
  {
    path: '/recoil',
    element: (
      <Layout
        title="Recoil with Todo"
        routes={recoilChildren}
        render={
          <RecoilRoot>
            <Outlet />
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
        render={<Outlet />}
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
            <Outlet />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        }
      />
    ),
    children: tanstackQueryChildren,
    title: 'tanstack-query',
  }
];
