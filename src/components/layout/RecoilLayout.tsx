import Layout from "./styles/Layout.tsx";
import {Outlet} from "react-router-dom";
import {recoilChildren} from "../../router/routes/children/recoilChildren.tsx";
import {RecoilRoot} from "recoil";

export default function RecoilLayout() {
  return (
    <Layout
      title="Recoil with Todo"
      routes={recoilChildren}
      render={
        <RecoilRoot>
          <Outlet/>
        </RecoilRoot>
      }
    />
  );

}
