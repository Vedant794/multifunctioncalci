import { abs } from 'mathjs'
import React,{useState} from 'react'

export default function DateCalculation(props) {
    const [days,setDays] = useState('')
    const [date1,setDate1] = useState('')
    const [date2,setDate2] = useState('')

    const handleDateChange1=(event)=>{
        setDate1(event.target.value)
    }

    const handleDateChange2=(event)=>{
        setDate2(event.target.value)
    }

    const calcDate=()=>{
        let a_date=new Date(date1).getTime()
        let b_date=new Date(date2).getTime()
        let differnce_ms=Math.abs(a_date-b_date)
        let year_diff=(differnce_ms/(1000*60*60*24*365)).toFixed(0)
        let day_difference=(differnce_ms/(1000*60*60*24))
        if(year_diff<1){
            setDays(day_difference+' days')
        }else{
            setDays(year_diff+' year &'+(day_difference-year_diff*365+' days '+'('+day_difference+' days)'))
        }

    }
  return (
    <>
    <div className='difference-dates flex flex-col justify-center h-[330px] ml-8'>
      <h3 className='text-xl font-bold' style={{color:props.mode==='light'?'black':'white'}}>Difference between Dates</h3>
      <div className="from mt-6">
        <h3 className='text-lg font-semibold' style={{color:props.mode==='light'?'black':'white'}}>From</h3>
        <input type="date" value={date1} onChange={handleDateChange1} style={{backgroundColor:props.mode==='light'?'white':'#292828',color:props.mode==='light'?'black':'white'}}/>
      </div>

      <div className="to mt-6">
        <h3 className='text-lg font-semibold' style={{color:props.mode==='light'?'black':'white'}}>To</h3>
        <input type="date" value={date2} onChange={handleDateChange2} style={{backgroundColor:props.mode==='light'?'white':'#292828',color:props.mode==='light'?'black':'white'}}/>
      </div>
      <div className="output mt-6">
        <button className='bg-green-700 font-bold text-white border w-fit h-fit p-[11px] rounded-lg hover:bg-green-600' onClick={calcDate}>Get Difference</button>
        <p className='text-lg font-cursive mt-3 font-bold' style={{color:props.mode==='light'?'black':'white'}}>{days}</p>
      </div>
    </div>

    
    </>
  )
}

