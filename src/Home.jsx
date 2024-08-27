import React,{useState} from 'react'

function Home() {

    const [bmi,setBmiValue]=useState("")


    let height = 0
    let weight = 0

    const getHeight = (e)=>{
      height = e.target.value
      console.log(height)
    }

    const getWeight = (val)=>{
      weight = val
      console.log(weight)
    }

    const calculate=()=>{
      const result = weight/(height**2)

      if(result<18.5){
        setBmiValue("underweight")
      }
      else if(result>=18.5 && result<=24.9){
         setBmiValue("Normal")
      }
      else if(result>=25.0 && result<=29.9){
        setBmiValue( "Overweight")
      }
      else if(result>=30.0){
        setBmiValue( "Obesity")
      }

    }

  return (
   
   <>
    <div className='d-flex justify-content-center align-items-center ' style={{height:'90vh'}}>
        <div className='w-50 border shadow p-5'>
            <h3>BMI calculator</h3>
            <input type="text" className='form-control mb-4' placeholder='enter your height in meter' onChange={(e)=>{getHeight(e)}}/>
            <input type="text" className='form-control mb-4' placeholder='enter your weight in kilogram' onChange={(e)=>{getWeight(e.target.value)}}/>
            <button className='btn btn-success'onClick={calculate}>sent</button>
            <h2 className='mt-3'>{bmi}</h2>
        </div> 
        

    </div>
   </>
  )
}

export default Home
