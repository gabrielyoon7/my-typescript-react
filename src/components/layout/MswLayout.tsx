import Layout from "./styles/Layout.tsx";
import {Outlet} from "react-router-dom";
import {mswChildren} from "../../router/routes/children/mswChildren.tsx";

export default function MswLayout() {
  return (
    <Layout
      title="msw"
      routes={mswChildren}
      render={<Outlet/>}
    />
  );

}
