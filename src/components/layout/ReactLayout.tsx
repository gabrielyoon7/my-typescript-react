import {reactChildren} from "../../router/routes/children/reactChildren.tsx";
import Layout from "./styles/Layout.tsx";
import {Outlet} from "react-router-dom";

export default function ReactLayout() {
  return (
    <Layout
      title="React/TS"
      routes={reactChildren}
      render={<Outlet/>}
    />
  );

}
