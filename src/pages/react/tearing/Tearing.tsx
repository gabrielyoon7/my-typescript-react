/* eslint-disable no-empty */
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
  return (
    <div style={{ margin: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>MouseX</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>{x}</div>
    </div>
  );
};

const Tearing = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    startTransition(() => {
      setCount((c: any) => c + 1);
    });
  };
  return (
    <div>
      <div style={{ display: 'flex', padding: '4px' }}>
        <div style={{ margin: '8px', width: '100px' }}>Count: {count}</div>
        <button style={{ width: '100%' }} onClick={inc}>Click and Move Mouse Anywhere</button>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)'
      }}>
        {[...Array(50).fill(null)].map((_, key) => (
          <MousePositionX key={key} />
        ))}
      </div>
    </div>
  );
};
export default Tearing;
