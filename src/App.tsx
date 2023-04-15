import './App.css';
import ItemArray from './containers/array/ItemArray';
import ItemObjectArray from './containers/array/ItemObjectArray';
import Child from './containers/children/Child';
import Wrapper from './containers/children/Wrapper';
import Counter1 from './containers/counter/Counter1';
import Counter2 from './containers/counter/Counter2';

function App() {
  return (
    <div>
      <Counter1 />
      <hr />
      <Counter2 />
      <hr />
      <ItemArray />
      <hr />
      <ItemObjectArray />
      <hr />
      <Wrapper></Wrapper>
      <hr />
      <Wrapper>hi</Wrapper>
      <hr />
      <Wrapper><Child /></Wrapper>
    </div>
  );
}

export default App;
