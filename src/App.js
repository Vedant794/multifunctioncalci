// import logo from './logo.svg';
import React,{useState} from 'react';
import Navbar from "./Components/Navbar";
import Standard from "./Components/Standard";



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
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Standard mode={mode}/>
      </div>
  );
}

export default App;
