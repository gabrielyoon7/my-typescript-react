import AnotherApp from "./AnotherApp"
import TodosApp from "./TodoApp"

/* eslint-disable import/no-anonymous-default-export */
export default () => {
  return (
    <>
      <TodosApp />
      <AnotherApp />
    </>
  )
}
