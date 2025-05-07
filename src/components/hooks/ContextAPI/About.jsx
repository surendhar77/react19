import React, { useContext } from 'react'
import { BioContext } from '.'

export const About = () => {
  const {myName,myAge} = useContext(BioContext);
  return (<h1>Hi Context API(About) My name is {myName} and my age is {myAge}</h1>)
}

