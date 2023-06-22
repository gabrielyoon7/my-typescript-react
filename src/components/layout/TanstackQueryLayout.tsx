import Layout from "./styles/Layout.tsx";
import {Outlet} from "react-router-dom";
import {tanstackQueryChildren} from "../../router/routes/children/tanstackQueryChildren.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function TanstackQueryLayout() {
  return (
    <Layout
      title="tanstack-query"
      routes={tanstackQueryChildren}
      render={
        <QueryClientProvider client={queryClient}>
          <Outlet/>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      }
    />
  );

}
