
import './App.css';
import { useState } from "react";
import Todos from './components/Todos';
// import Timer from './components/Timer';
import Todosaxios from './components/Todosaxios';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer'

function App() {
  const [show,setShow] =useState(true);


  return (
    <div className="App">
  
     <Todos />
     <Todosaxios />
     <Timer />
     <Stopwatch />
   
    </div>
  );
}

export default App;
