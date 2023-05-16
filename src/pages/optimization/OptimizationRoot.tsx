import NonOptimizationByMemo from "./useMemo/NonOptimizationOptimizationByMemo";
import OptimizationByMemo from "./useMemo/OptimizationByMemo";

function OptimizationRoot() {
  return (
    <>
      <h1>최적화 by useMemo()</h1>
      <h2>최적화가 안된 예제</h2>
      <NonOptimizationByMemo />
      <h2>최적화가 된 예제</h2>
      <OptimizationByMemo />
      <h1>최적화 by useCallback()</h1>
      <h2>최적화가 안된 예제</h2>
      <h2>최적화가 된 예제</h2>
    </>
  )
}

export default OptimizationRoot;
