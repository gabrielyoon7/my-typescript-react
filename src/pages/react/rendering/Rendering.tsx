import {useEffect, useState} from "react";

const step1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const step2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function Foo({s}: { s: string }) {
  console.log('render', s);
  useEffect(() => {
    console.log('Foo', s);
  }, [s]);

  return (
    <div>{s}</div>
  );
}

function Rendering() {
  const [step, setStep] = useState(step1);

  return (
    <>
      {
        step.map((s) => <Foo key={s} s={s}/>)
      }
      <button onClick={() => {
        console.log('click');
        setStep(step2);
      }}>step2
      </button>
    </>
  );
}

export default Rendering;
