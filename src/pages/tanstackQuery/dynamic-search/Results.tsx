import {useResult} from "./useResult.ts";

function Results() {
  const {...queryInfo} = useResult();
  const todos = queryInfo.data as string[];
  return (
    <div>
      {
        queryInfo.isSuccess && todos.map((todo, i) => <div key={i}>{todo}</div>)
      }
    </div>
  );
}

export default Results;
