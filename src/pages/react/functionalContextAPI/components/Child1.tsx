import React from "react";
import Child2 from "./Child2.tsx";

const Child1: React.FC = () => {
  return (
    <div>
      -- 자식(뎁스1)
      <Child2/>
      <Child2/>
    </div>
  );
};

export default Child1;
