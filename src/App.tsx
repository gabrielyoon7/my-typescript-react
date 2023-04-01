import './App.css';
import ItemArray from './containers/array/ItemArray';
import ItemObjectArray from './containers/array/ItemObjectArray';
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
    </div>
  );
}

export default App;
