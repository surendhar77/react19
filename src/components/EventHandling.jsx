import React from 'react'
import './EV.css'


const EventHandling = () => {
  //  function handleButtonClick()
  //  {
  //   alert("Hey I am onClick Event");

  //  }

  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey I am onClick Event");
  }

  const handleWelcomeUser = (user) => {
     console.log(`hey ${user},Welcome`);
  }
  
  return (
 <>
 {/* Function Components with Named Functions */}
{/* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to pass reference and not call here.  */}

 <button onClick={handleButtonClick}>Cli ck Me</button>
 <br />
      {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
 <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
{/* Inline Event Handlers */}
<button onClick={(event) => console.log(event) }>Inline Function </button>
 {/* Function Components with Inline Arrow Function */}
 <button onClick={() => alert("Hey I am inline event function ")}>Inline Arr Function</button>
 {/* Passing Aruguments to Event Handlers */}

 {/* <button onClick={handleWelcomeUser}>Click Me</button> */}
 <button onClick={() => handleWelcomeUser("sjs ")}>click Me</button>

 </>
  )
}

export default EventHandling
