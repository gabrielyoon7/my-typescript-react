import {useState, useLayoutEffect} from "react";

/**
 * @DOCS: https://github.com/reactwg/react-18/discussions/21
 */

function LogEvents() {
  useLayoutEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}

function BatchRoot() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    setCount((c) => c + 1); // Does not re-render yet
    setFlag((f) => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{color: flag ? "blue" : "black"}}>{count}</h1>
      <LogEvents/>
    </div>
  );
}

export default BatchRoot;
