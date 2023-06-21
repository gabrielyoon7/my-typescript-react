import Layout from "./styles/Layout.tsx";
import {rootRoutes} from "../../router/routes/parent/rootRoutes.tsx";

export default function Home() {

  return (
    <Layout
      title="React with TS playground"
      routes={rootRoutes}
      render="홈페이지"
    />
  );
}
