import React,{useState,useRef} from 'react'
import backspace from './backspace.png'
import { evaluate } from 'mathjs';

export default function Scientific(props) {
    const [inputVal,setInputVal]=useState('');
    const displayRef = useRef(null);
    const DECIMAL_PLACES = 2;
    const displayInput=(btnValue)=>()=>{
        setInputVal(inputVal+btnValue)
    }

    const clearDisplay=()=>{
        setInputVal('')
    }

    const handleBackspace=()=>{
        setInputVal(inputVal.slice(0,-1))
    }

    const evaluateValue=()=>{
        try {
            let expression = inputVal.replace('/\^/g', '**');
            setInputVal(evaluate(expression).toFixed(DECIMAL_PLACES).toString());
        } catch (error) {
            setInputVal('Undefined');
        }
    }

    const recentlyCallValue=(callback)=>{
    let parts=inputVal.split(/([+\-*/()^])/)
    let recentVal=parts.pop()
    let remaining=parts.join('')
    let result=callback(recentVal)
    setInputVal(remaining + parseFloat(result).toFixed(DECIMAL_PLACES))
    }

    const inverseCalc = () => {
        recentlyCallValue((recentVal)=>{
            if(parseFloat(recentVal)===0)return 'Infinite'
            else return 1/parseFloat(recentVal).toString();
        })
      }

      const handlePi=()=>{
        setInputVal((parseFloat(inputVal)+Math.PI.toFixed(DECIMAL_PLACES)).toString())
      }

      const squareRoot=()=>{
        recentlyCallValue((recentVal)=>{
            let number=parseFloat(recentVal)
            if(isNaN(number))return 'Null'
            else if(number<0)return 'Imaginary'
            else return (Math.sqrt(number)).toString()
        })
      }
      
      const calcFactorial=()=>{
        recentlyCallValue((recentVal)=>{
            let number=parseFloat(recentVal)
        if(number===0){
            return '1'
        }
        let ans=1
        for (let index = 1; index <= number; index++) {
            ans*=index;
            
        }
        return ans.toString()
        })
        
      }

      const naturalLogarithmic=()=>{
        recentlyCallValue((recentVal)=>{
            let number=parseFloat(recentVal)
            if(number===0)return 'Undefined'
            else return (Math.log(number)).toString()
        })
      }

      const logarithmicFunc=()=>{
        recentlyCallValue((recentVal)=>{
            let number=parseFloat(recentVal)
            if(number===0)return 'Undefined'
            else return (Math.log10(number)).toString()
        })
      }

      
  return (
    <>
    <div className="body-style flex flex-col justify-center items-center w-4/5 h-[677px]" style={{backgroundColor:props.mode==='light'?'rgba(229,231,235,1)':'#292828'}}>
        <div className="display flex justify-center items-center w-full h-[20rem]">
            <input className='w-full h-full border-none text-8xl text-right' style={{backgroundColor:props.mode==='light'?'white':'#292828',color:props.mode==='light'?'black':'white'}} ref={displayRef} value={inputVal} type="text"id="display-box" readOnly/>
        </div>
        <div className="numPad grid grid-cols-5 ml-2 w-full">
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('.')}>.</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={calcFactorial}>n!</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={logarithmicFunc}>log</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={clearDisplay}>C</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm' style={{backgroundColor:props.mode==='light'?'white':'#494848'}} onClick={handleBackspace}><img className='w-[30px] h-[30px] m-auto' src={backspace} alt="" /></button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={naturalLogarithmic}>ln</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(7)}>7</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(8)}>8</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(9)}>9</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('+')}>+</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={inverseCalc}>1/x</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(4)}>4</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(5)}>5</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(6)}>6</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('/')}>/</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={squareRoot}>&radic;x</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(1)}>1</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(2)}>2</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(3)}>3</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('*')}>*</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('^')}>x<sup>y</sup></button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('(')}>(</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(0)}>0</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(')')}>)</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('-')}>-</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('^2')}>x<sup>2</sup></button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={handlePi}>&Pi;</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('10^')}>10<sup>x</sup></button>
            <button className='w-[230px] h-14 mt-2 rounded-sm text-xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('%')}>%</button>
            <button className='w-[230px] h-14 mt-2 rounded-sm bg-blue-600 text-xl' onClick={evaluateValue}>=</button>
        </div>
      </div>
    </>
  )
}
