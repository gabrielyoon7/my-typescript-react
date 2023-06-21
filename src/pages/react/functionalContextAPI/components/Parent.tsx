import React from "react";
import Child1 from "./Child1.tsx";

const Parent: React.FC = () => {
  return (
    <>
      <div>
        부모
      </div>
      <div>
        (뎁스0)
      </div>
      <Child1/>
      <Child1/>
    </>
  );
};

export default Parent;
