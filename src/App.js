// import logo from './logo.svg';
import React,{useState} from 'react';
import Navbar from "./Components/Navbar";
import Standard from "./Components/Standard";
import Scientific from './Components/Scientific';
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import DateCalculation from './Components/DateCalculation';


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#292828'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route exact key="standard" path='/' element={<Standard mode={mode}/>}></Route>
        <Route exact key="scientific" path='/scientific' element={<Scientific mode={mode}/>}></Route>
        <Route exact key="Date Calculation" path='/dateCalc' element={<DateCalculation mode={mode}/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
