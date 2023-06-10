import { useMemo, useDeferredValue, useEffect } from 'react'

function List({ input }: { input: string }) {
  const LIST_SIZE = 20000;
  // const deferredInput = input;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let index = 0; index < LIST_SIZE; index++) {
      l.push(<div key={index}>{deferredInput}</div>)
    }
    return l;

  }, [deferredInput])

  useEffect(() => {
    console.log(`input: ${input} / deferredInput: ${deferredInput}`)
  }, [input, deferredInput])

  return (
    <>
      {list}
    </>
  )
}

export default List