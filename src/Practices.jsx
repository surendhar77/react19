import React from 'react'

const Practices = () => {
    const students= ['5'];
    // console.log(students.length);
    
  return (
    <>
    {/* <p>{students.length && "No Students found"}</p> */}
    {/* 1st */}
   {/* <p>{students.length ===0 && "No Students found"}</p> */}
     {/* 2nd */}
     {/* <p>{ !students.length && "No Students found"}</p> */}
    {/* 3rd */}
    <p>{ !Boolean(students.length) && "No Students found"}</p>    
    <p>Number of Students : {students.length}</p>
    </>
  )
}

export default Practices
