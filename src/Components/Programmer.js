import React,{useState,useRef} from 'react'
import { evaluate } from 'mathjs';
import backspace from './backspace.png'

export default function Programmer(props) {
    const [inputVal,setInputVal]=useState('');
    const [deci,setDeci] = useState('')
    const displayRef = useRef(null);
    const displayInput=(btnValue)=>()=>{
        setInputVal(inputVal+btnValue)
    }

    const clearDisplay=()=>{
        setInputVal('')
        setDeci('')
    }

    const handleBackspace=()=>{
        setInputVal(inputVal.slice(0,-1))
    }

    const evaluateValue=()=>{
        try {
            setInputVal(evaluate(inputVal).toString())
            let num=evaluate(inputVal)
            setDeci(num.toString())
        } catch (error) {
            setInputVal('Undefined')
        }
    }
  return (
    <>
    <div className="body-style flex flex-col justify-center items-center w-4/5 h-[677px]" style={{backgroundColor:props.mode==='light'?'rgba(229,231,235,1)':'#292828'}}>
        <div className="display flex justify-between items-center w-full h-[20rem]">
        <div className="display-prog flex flex-col" style={{color:props.mode==='light'?'black':'white'}}>
                <p>Decimal:{deci}</p>
                <p>Binary:{deci?(deci>>>0).toString(2):''}</p>
                <p>Octal:{deci?(deci>>>0).toString(8):''}</p>
                <p>HexaDecimal:{deci?(deci>>>0).toString(16).toUpperCase():''}</p>
            </div>
            <input className='w-3/4 h-full border-none text-8xl text-right' style={{backgroundColor:props.mode==='light'?'rgba(229,231,235,1)':'#292828',color:props.mode==='light'?'black':'white'}} ref={displayRef} value={inputVal} type="text"id="display-box" readOnly/>
            
        </div>
        <div className="inputValPad grid grid-cols-4 ml-2 w-full">
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('.')}>.</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('%')}>%</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={clearDisplay}>C</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg' style={{backgroundColor:props.mode==='light'?'white':'#494848'}} onClick={handleBackspace}><img className='w-[30px] h-[30px] m-auto' src={backspace} alt="" /></button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('<<<')}>&lt;&lt;</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('>>>')}>&gt;&gt;</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('')}>+/-</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('+')}>+</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(7)}>7</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(8)}>8</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(9)}>9</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('/')}>/</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(4)}>4</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(5)}>5</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(6)}>6</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('*')}>*</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(1)}>1</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(2)}>2</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(3)}>3</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('-')}>-</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput('(')}>(</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(0)}>0</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg text-2xl' style={{backgroundColor:props.mode==='light'?'white':'#494848',color:props.mode==='light'?'black':'white'}} onClick={displayInput(')')}>)</button>
            <button className='w-[290px] h-16 mt-2 rounded-lg bg-blue-600 text-xl' onClick={evaluateValue}>=</button>
        </div>
      </div>
    </>
  )
}
