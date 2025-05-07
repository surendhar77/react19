import React from 'react'
import { useBioContext } from '.';

const Services = () => {
  const {myName,myAge} = useBioContext();

  return (<h1>Hi Context API(Services) My name is {myName} and my age is {myAge}</h1>)

}

export default Services
