import React, { useContext } from 'react'
import { useBioContext } from '.';
// import { BioContext } from '.'

const Home = () => {
  const {myName,myAge} = useBioContext();
  return (<h1>Hi Context API My name is {myName} and my age is {myAge}</h1>)

}

export default Home
