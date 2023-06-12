import React, {ChangeEvent, useState} from 'react'
import List from './List.tsx';

function useDeferredValueWithUseMemo() {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <>
      <input type='text' value={input} onChange={handleChange}/>
      <List input={input}/>
    </>
  )
}

export default useDeferredValueWithUseMemo
