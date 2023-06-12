import UseDeferredValueWithUseMemo from './withUseMemo/UseDeferredValueWithUseMemo.tsx'

function UseDeferredValueRoot() {
  return (
    <>
      <h1>useDeferredValue 예제</h1>
      <div>
        <h2>useDeferredValue with useMemo</h2>
        <UseDeferredValueWithUseMemo/>
      </div>
    </>
  )
}

export default UseDeferredValueRoot
