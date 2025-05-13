import React, { useState } from 'react'
import './Hooks.css'

const ShortCircuit = () => 
  {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [user,setUser] = useState("");

    return (

   <section className='container short-container'>
  <h1>Welcome to ShortCircuit Evaluation !</h1>

  {/* Conditional rendering using short circuit evaluation  */}
  { isLoggedIn && <p>You are logged in !</p> }
  {/* Another Example for Short Circuit Evaluation */}
  {user ? `Hello ${user} `: "Please logged in !" }
  <div className='grid-three-cols'>
   <button onClick={ () => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
   <button onClick={() => setUser("sjs")}>Set User</button>
   <button onClick={ () => setUser("")}>Clear User </button>
  </div>
   </section>
  )
}

export default ShortCircuit
