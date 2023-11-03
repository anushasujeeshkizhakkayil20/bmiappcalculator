
import React, { useState } from 'react'
import './index.css'

function App() {
// state
const[weight,setWeight]=useState(0)
const[height,setHeight]=useState(0)
const[bmi,setBmi]=useState('')
const[message,setMessage]=useState('')


  //show image base on bmi calculation
  let imgSrc;
   if(bmi<1){
    imgSrc = null
   }else{
    if(bmi <25){
      

    }

   }


  let calcBmi =(event) =>{
    //prevent submitting
    event.preventDefault()

   if(weight===0 || height===0){
    alert('please enter a valid weight and height')

   }else{
     let bmi=(weight/(height*height)*703)
     setBmi(bmi.toFixed[1])

   //logic for message

    if(bmi<25){
      setMessage('you are underweight')
    }else if(bmi>=25 && bmi<30){
      setMessage('you are healthy weight')

    }else{
      setMessage('you are overweight')
    }
   }
    }


  let reload = () =>{
    window.location.reload()
  }


  return (
    <>
    <div  className='app'>
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
     <form onSubmit={calcBmi}>
      <div>
      <label>Weight (lbs)</label>
      <input value={ weight} onChange={(e)=>setWeight(e.target.value)} />
      </div>
      <div>
      <label>Height (in) </label>
      <input value={height}  onChange={(event)=>setHeight(event.target.value)}/>
      </div>
      <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline'onclick={reload} type='submit'>Reload</button>
      </div>
     </form>
    <div className='center'>
      <h3> your BMI is : {bmi}</h3>
      <p>{message}</p>
      
    </div>
     <div className='img-container'>
      <img src={imgSrc} alt=''></img>
    </div>
    </div>
    </div>

    </>
  );
  }

export default App;
