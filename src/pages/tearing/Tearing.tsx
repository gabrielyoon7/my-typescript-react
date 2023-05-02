import { startTransition, useEffect, useRef, useState } from "react";

const useMouseX = () => {
  const ref = useRef(0);
  useEffect(() => {
    const callback = (event: any) => {
      ref.current = event.clientX;
    };
    window.addEventListener("mousemove", callback);
    return () => window.removeEventListener("mousemove", callback);
  }, []);
  return ref.current;
};
const MousePositionX = () => {
  const x = useMouseX();
  const start = performance.now();
  while (performance.now() - start < 20) { }
  return <div>Mouse X : {x}</div>;
};

const Tearing = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    startTransition(() => {
      setCount((c: any) => c + 1);
    })
  };
  return (<div>
    {count} <button onClick={inc}>click</button>
    {[...Array(50).fill(null)].map((_, key) => (
      <MousePositionX key={key} />
    ))}
  </div>
  );
}
export default Tearing;
