import ArrayRoot from './containers/array/ArrayRoot';
import CardNumbersRoot from './containers/cardNumbers/CardNumbersRoot';
import WrapperRoot from './containers/children/WrapperRoot';
import CounterRoot from './containers/counter/CounterRoot';
import CustomPasswordRoot from './containers/customPassword/CustomPasswordRoot';
import UseCallbackRoot from './containers/useCallback/UseCallbackRoot';
import UseReducerRoot from './containers/useReducer/UseReducerRoot';
import AnotherApp from './containers/useSyncExternalStorage/AnotherApp';
import TodosApp from './containers/useSyncExternalStorage/TodoApp';

function App() {
  return (
    <div>
      <CounterRoot />
      <ArrayRoot />
      <WrapperRoot />
      <UseReducerRoot />
      <UseCallbackRoot />
      <CardNumbersRoot />
      <CustomPasswordRoot />
      <TodosApp />
      <AnotherApp />
    </div>
  );
}

export default App;
