import React from "react";
import GlobalProvider from "./provider/GlobalProvider";
import Parent from "./components/Parent";

const FunctionContextAPIRoot: React.FC = () => {
  return (
    <GlobalProvider>
      <h2>Functional Context API</h2>
      <Parent />
    </GlobalProvider>
  );
};

export default FunctionContextAPIRoot;
