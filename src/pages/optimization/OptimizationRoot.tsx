import NonOptimization from "./useMemo/NonOptimization";
import Optimization from "./useMemo/Optimization";

function OptimizationRoot() {
  return (
    <>
      <h1>최적화 by useMemo()</h1>
      <h2>최적화가 안된 예제</h2>
      <NonOptimization />
      <h2>최적화가 된 예제</h2>
      <Optimization />
      <h1>최적화 by useCallback()</h1>
      <h2>최적화가 안된 예제</h2>
      <h2>최적화가 된 예제</h2>
    </>
  )
}

export default OptimizationRoot;
