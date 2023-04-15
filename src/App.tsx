import ArrayRoot from './containers/array/ArrayRoot';
import WrapperRoot from './containers/children/WrapperRoot';
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
