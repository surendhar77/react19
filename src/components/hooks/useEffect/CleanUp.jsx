import React, { useEffect, useState } from 'react';
import "./index.css";

const CleanUp = () => {
    const [count,setCount] = useState(0);
    useEffect(()=> {
   const timer = setInterval(()=> {
        setCount((prev) => prev + 1);
    },1000);

    return () => clearInterval(timer)    },[])
  
  return (
    <div className='container'>
        <div className='counter'>
            <p>MY OWM REACT APPLICATION</p>
            <div className='odometer' id="odometer">
                {count}
            </div>
            <h3 className='title'>
               Own<br /> RealtimeCounter
            </h3>
        </div>
    </div>
  )
}

export default CleanUp
