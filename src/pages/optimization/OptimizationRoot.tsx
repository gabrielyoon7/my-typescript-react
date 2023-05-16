import PickColor from "./pickColor/PickColor";
import NonOptimizationByCallback from "./useCallback/NonOptimizationByCallback";
import OptimizationByCallback from "./useCallback/OptimizationByCallback";
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
      <hr />
      <h1>최적화 by useCallback()</h1>
      <h2>최적화가 안된 예제</h2>
      <NonOptimizationByCallback />
      <h2>최적화가 된 예제</h2>
      <OptimizationByCallback />
      <hr />
      <h1>색상 선택기</h1>
      <h2>최적화가 안된 예제</h2>
      <PickColor />
    </>
  )
}

export default OptimizationRoot;
