import ArrayRoot from './containers/array/ArrayRoot';
import WrapperRoot from './containers/children/WrapperRoot';
import CounterRoot from './containers/counter/CounterRoot';
import UseReducerRoot from './containers/useReducer/UseReducerRoot';

function App() {
  return (
    <div>
      <CounterRoot />
      <ArrayRoot />
      <WrapperRoot />
      <UseReducerRoot />
    </div>
  );
}

export default App;
