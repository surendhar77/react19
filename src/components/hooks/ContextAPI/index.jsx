import { createContext, use, useContext }  from "react";


// 1 step
export const BioContext = createContext();

// 2nd step

export const BioProvider = ({children}) => {
const myName ="sjs";
const myAge = "29"
console.log(children);

return (<BioContext.Provider  value ={{myName:myName,
myAge:myAge}}>
{children}
</BioContext.Provider>)
}; 


// Custom Hooks
export const useBioContext = () =>{
    // const context = useContext(BioContext);
    const context = use(BioContext);

    
    if(context === undefined)
    {
        throw new Error("Component must be Wrapped with BioProvider");
    }
    
    return context;
}