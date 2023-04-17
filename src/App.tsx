import ArrayRoot from './containers/array/ArrayRoot';
import WrapperRoot from './containers/children/WrapperRoot';
import CounterRoot from './containers/counter/CounterRoot';
import UseCallbackRoot from './containers/useCallback/UseCallbackRoot';
import UseReducerRoot from './containers/useReducer/UseReducerRoot';

function App() {
  return (
    <div>
      <CounterRoot />
      <ArrayRoot />
      <WrapperRoot />
      <UseReducerRoot />
      <UseCallbackRoot />
    </div>
  );
}

export default App;
