import { useReducer } from "react";
// import { useState } from "react"

export const ReducerComp = () => {
  // const [count,SetCount] = useState("0");
  const initialState = {
    count: 0,
    inc:2,
    dec:2,
    name:"sjs",
    place:"erode"
  };
  const reducer = (state, action) => {
    console.log(state, action);

    // if(action.type === "INCREMENT")
    // {
    //     return state +1 ;
    // }
    // if(action.type === "DECREMENT")
    //     {
    //         return state -1 ;
    //     }

    //     if(action.type === "RESET")
    //         {
    //             return state = 0;
    //         }

    switch (action.type) {
      case "INCREMENT":
        return { ...state,
            count:state.count+1};

      case "DECREMENT":
        return { ...state,count:state.count-1};
      case "RESET":
        return { ...state,
            count:0};
      default:
        return state;
    }
  };
  // const [count,disptach] = useReducer(reducer,0);
  const [state, disptach] = useReducer(reducer, initialState);
  console.log(useReducer());
  return (
    <>
      <div className=" p-4 h-lvh flex flex-col justify-center items-center ">
        <h1>{state.count}</h1>
        <button
          onClick={() =>
            disptach({
              type: "INCREMENT",
            })
          }
        >
          Increement
        </button>
        <button
          onClick={() =>
            disptach({
              type: "DECREMENT",
            })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            disptach({
              type: "RESET",
            })
          }
        >
          Reset
        </button>
      </div>
    </>
  );
};
