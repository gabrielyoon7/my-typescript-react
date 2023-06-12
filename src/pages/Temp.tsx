/**
 * 컴포넌트 하나만 테스트 할 때 사용
 */
import {ChangeEvent, useState, useTransition} from "react";

function Temp() {

  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([])

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)

    startTransition(() => {
      const l: string[] = []
      console.log(l)
      for (let i = 0; i < 20000; i++) {
        // l.push(e.target.value)
        l.push(e.target.value)
        setList(l)
      }
    })
  }

  return (
    <>
      <input type={"text"} value={input} onChange={handleChange}/>
      {
        isPending
          ? <div>Loading..</div>
          : list.map((item, index) => <div key={index}>{item}</div>)}


    </>
  )
}

export default Temp;
