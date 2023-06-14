import {ChangeEvent, startTransition, useState} from "react"

function FetchInput() {
  const [input, setInput] = useState("")
  const [list, setList] = useState<string[]>([])

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const newInput = e.target.value;
      setInput(newInput);

      const response = await fetch(`/todos?query=${newInput}`)
      const data = await response.json();
      // startTransition(() => {
      setList(data);
      // })
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange}/>
      {list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  )
}

export default FetchInput;
