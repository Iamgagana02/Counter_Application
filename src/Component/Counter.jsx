import React, { useState } from 'react'
import './counter.css'

function Counter() {
    const[count,setCount]=useState(0)
    const[content,setContent]=useState(false)
  return (
    <div >
        <div className="container">
            <h1>SAMPLE COUNTER APPLICATION:</h1>
            <div className="mini-container">
                <button className='hidebutton' onClick={()=>setContent(!content)}>{content? 'hide' : 'show'}</button>
            </div>
            <div className="counter_container">
                {
                content?
                <>
                    <h2>Count is : {count}</h2>
                    <button onClick={()=>{setCount(count+1)}}>+</button>
                    <button onClick={()=>{setCount(count-1)}}>-</button>
                </>
                :null
                }
            </div>
        </div>

    </div>
  )
}

export default Counter
