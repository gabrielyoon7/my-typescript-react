import ArrayRoot from './containers/array/ArrayRoot';
import CardNumbersRoot from './containers/cardNumbers/CardNumbersRoot';
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
      <CardNumbersRoot />
    </div>
  );
}

export default App;
