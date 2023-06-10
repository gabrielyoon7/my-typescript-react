import { ChangeEvent, useState, useTransition } from "react"

function TransitionedInput() {
  const [input, setInput] = useState("")
  const [list, setList] = useState<string[]>([])
  const LIST_SIZE = 20000

  const [isPending, startTransition] = useTransition();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
    startTransition(() => {
      const l: string[] = []

      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value)
        setList(l)
      }
    })
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {
        isPending
          ? 'Loading...'
          : list.map((item, index) => <div key={index}>{item}</div>)
      }
    </>
  )
}

export default TransitionedInput;
