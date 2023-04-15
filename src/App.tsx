import './App.css';
import ArrayRoot from './containers/array/ArrayRoot';
import ItemArray from './containers/array/ItemArray';
import ItemObjectArray from './containers/array/ItemObjectArray';
import Child from './containers/children/Child';
import Wrapper from './containers/children/Wrapper';
import WrapperRoot from './containers/children/WrapperRoot';
import Counter1 from './containers/counter/Counter1';
import Counter2 from './containers/counter/Counter2';
import CounterRoot from './containers/counter/CounterRoot';

function App() {
  return (
    <div>
      <CounterRoot />
      <ArrayRoot />
      <WrapperRoot />
    </div>
  );
}

export default App;
