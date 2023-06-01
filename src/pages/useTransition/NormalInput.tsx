import {ChangeEvent, useState} from "react"

function NormalInput() {
  const [input, setInput] = useState("")
  const [list, setList] = useState<string[]>([])
  const LIST_SIZE = 20000

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
    const l: string[] = []
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value)
      setList(l)
    }
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange}/>
      {list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  )
}

export default NormalInput;
