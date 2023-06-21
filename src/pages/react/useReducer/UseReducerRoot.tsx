import Counter from "./Counter.tsx";
import ItemsList from "./ItemsList.tsx";

/* eslint-disable import/no-anonymous-default-export */
export default () => {
  return (
    <>
      <Counter/>
      <hr/>
      <ItemsList/>
      <hr/>
    </>
  );
};
