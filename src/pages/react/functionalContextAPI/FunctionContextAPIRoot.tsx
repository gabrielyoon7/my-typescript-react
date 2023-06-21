import React from "react";
import GlobalProvider from "./provider/GlobalProvider.tsx";
import Parent from "./components/Parent.tsx";

const FunctionContextAPIRoot: React.FC = () => {
  return (
    <GlobalProvider>
      <h2>Functional Context API</h2>
      <Parent/>
    </GlobalProvider>
  );
};

export default FunctionContextAPIRoot;
