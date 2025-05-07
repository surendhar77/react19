import React, { useContext } from 'react'
import { BioContext } from '.';

const Services = () => {
  const {myName,myAge} = useContext(BioContext);

  return (<h1>Hi Context API(Services) My name is {myName} and my age is {myAge}</h1>)

}

export default Services
