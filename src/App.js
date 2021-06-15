import Screen from './Screen';
import './css/calculator.css';
import Keypad from './Keypad';

function App() {
  return (
    <div className='calculator'>
        <Screen/>
        <Keypad/>
    </div>
  );
}

export default App;