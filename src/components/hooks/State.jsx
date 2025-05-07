import React, { useState } from 'react'
import '../EV.css'

const State = () => {
//   let value  = 0 ;
//   const handleButtonClick =()=>{
//     value++;
//     console.log(value);
//   }
// console.log(useState());
let [count , setCount] = useState(0);
console.log("Parent Component rendered");

// console.log(array);
const handleButtonClick = () => {
    setCount (() => count +1)
};
return (
<>
<div className='main-div'>
{/* <h1>{value}</h1> */}
{/* <button onClick={handleButtonClick}>Increment</button> */}
<h1>{count}</h1>
<button onClick={handleButtonClick}>Increment</button>
</div>
<ChildComponent count ={count} />
</>
  );
};

function ChildComponent ({count}) 
{
    console.log("Child Component rendered");
    return <div className='main-div'>
        <h1>Child Component - {count}</h1></div>
}

export default State
