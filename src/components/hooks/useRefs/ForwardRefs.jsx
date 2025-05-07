import React, { forwardRef, useId, useRef } from 'react'

const ForwardRefs = () => {
        const username = useRef(null);
        const password =  useRef(null);

        const handleFormSubmit = (e) => {
            e.preventDefault();
            console.log(username.current.value , password.current.value);

        }
  return (
    <form onSubmit={handleFormSubmit}>
        <BeforeReact19Input label ="username" ref = {username}/>
        <BeforeReact19Input label ="password"  ref ={password} />
        <button>Submit</button>
    </form>
  )
}

// need to create BeforeReact19Input 

// const  BeforeReact19Input = forwardRef((props,ref) => {

//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//              <input type="text" ref ={ref} />
//         </div>
//     )
// });

// after React 19
// const  BeforeReact19Input = (props) => {

//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//              <input type="text" ref ={props.ref} />
//         </div>
//     )
// };
// destructing eassy

const  BeforeReact19Input = ({label,ref}) => {

    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
             <input type="text" ref ={ref} />
        </div>
    )
};
export default ForwardRefs

// this we pass data from parent to child