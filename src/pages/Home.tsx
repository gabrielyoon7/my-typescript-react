import Layout from "../components/Layout";
import {rootRoutes} from "../router/routes/parent/rootRoutes.tsx";

export default function Home() {

  return (
    <Layout
      title="React with TS playground"
      routes={rootRoutes}
      render="리액트를 비롯한 각종 라이브러리를 테스트하는 플레이그라운드입니다. 좌측에서 주제별로 선택하여 예제를 확인할 수 있습니다."
      color="black"
      backgroundColor="#EAEAEA"
    />
  );
}
