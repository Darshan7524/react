import './App.css';
import { Helloworld, Byeworld } from './components/Helloworld';

function App() {
  return (
    <div className="App">
      <h1>first line</h1>
      <p> I am learning react.js</p>
     <Helloworld text="react js is a javascript library"></Helloworld>
     <Byeworld text = "react is easy"></Byeworld>
    </div>
  );
}

export default App;
