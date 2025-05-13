import React, { use, useContext } from 'react'
import {  BioContext, useBioContext } from '.'

export const About = () => {
  // const {myName,myAge} = useBioContext();
  // const {myName,myAge} = useContext(BioContext);
  // const {myName,myAge} = use(BioContext);

  const newHook = true;
  let myName,myAge ;
if(newHook)
{
  // ({myName,myAge} = useContext(BioContext));  // ocuur error render  inside condtions does not use useContext 
  ({myName,myAge} = use(BioContext));
}
  
  return (<h1>Hi Context API(About) My name is {myName} and my age is {myAge}</h1>)
}

