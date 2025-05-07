import React from 'react'
import './EV.css'

const EventProps = () => {
  const HandleWelcomeUser = (user) =>{
    alert(`Hey ${user} `);
  };
  const handleHover = () =>{
    alert(`Hey  Thanks for Hovreing me `);
  };
  
  
    return (
        <>
        {/* props  give any name porps property have function  */}
<WelcomeUser onButtonClick ={() => HandleWelcomeUser("sjs")}
 onMouseEnter ={handleHover} />
        </>
  );
}

const WelcomeUser =(props) =>{
    const { onButtonClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log(`Hey User Welcome`);
        onClick();
    }
    
    return(
        <>
            <button onClick={onButtonClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover me </button>
            <button onClick={handleGreeting}>Greeting </button>
        </>
    )

}
export default EventProps
