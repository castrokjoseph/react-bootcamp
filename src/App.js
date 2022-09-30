import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message />
      {/* <Greet name="CASTRO" nme="asd">
        <p>HI this is casty</p>
        </Greet>

      <Greet name=" ASTRO" nme=" sd">
        <button> Action Click</button>
        </Greet>
      <Greet name="  STRO" nme="as "/>
      <Welcome name="Jonny" nme="12">
        </Welcome> */} 
    </div>
  );
}

export default App;
