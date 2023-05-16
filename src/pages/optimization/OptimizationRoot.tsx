import NonOptimization from "./NonOptimization";
import Optimization from "./Optimization";

function OptimizationRoot() {
  return (
    <>
      <h1>최적화</h1>
      <h2>최적화가 안된 예제</h2>
      <NonOptimization />
      <h2>최적화가 된 예제</h2>
      <Optimization />
    </>
  )
}

export default OptimizationRoot;
