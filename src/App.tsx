import './App.css';
import ArrayRoot from './containers/array/ArrayRoot';
import ItemArray from './containers/array/ItemArray';
import ItemObjectArray from './containers/array/ItemObjectArray';
import Child from './containers/children/Child';
import Wrapper from './containers/children/Wrapper';
import Counter1 from './containers/counter/Counter1';
import Counter2 from './containers/counter/Counter2';
import CounterRoot from './containers/counter/CounterRoot';

function App() {
  return (
    <div>
      <CounterRoot />
      <ArrayRoot />
      <Wrapper></Wrapper>
      <hr />
      <Wrapper>hi</Wrapper>
      <hr />
      <Wrapper><Child /></Wrapper>
    </div>
  );
}

export default App;
