import './App.css';
import ClickCounter from './containers/ContadorClicks';

function App() {
  return (
    <>
      <div className="App">
        <div className='counters'>
          <ClickCounter />
        </div>
      </div>
    </>
  );
}

export default App;
