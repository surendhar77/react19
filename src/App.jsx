// import React from 'react'
// import Netflixseries from "./components/NetflixSeries";
// combined export and import
// import { Fragment } from "react";
// import "./components/Netflix.css";
// import { DerivedState } from "./components/DerviedState";
// import LiftStateUp from "./components/LiftStateUp";
// import "./components/Netflix.module.css"
// import './components/EV.css'
// import ToggleSwitch from "../src/projects/ToggleSwitch/ToggleSwitch"
// import { Keys } from './keys';
// import Todo from './projects/Todo/Todo';
// import State from "./components/hooks/State"
// import EventPropagation  from "./components/EventPropagation"
// import EventHandling from "./components/EventHandling"
// import EventProps from "./components/EventProps"
// console.log("✅ This will appear in the browser console");
// console.log(React.createElement("h1",null,"Hello Surendhar."));  // js code
// import ShortCircuit from "./components/hooks/ShortCircuit";
//  import {Counter } from "./components/hooks/useState";
// import {ControlledForm} from "./components/hooks/useState/Controlled";
// import { RegistrationForm } from "./components/hooks/useState/Registeration";
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact.jsx";
// import HowNotToFetchApi from "./components/hooks/useEffect/HowNotToFetchApi";
// import HarryPotterCharacter from "./projects/HarryPotter/HarryPotterCharacter";
// import CleanUp from "./components/hooks/useEffect/CleanUp";
// import { Challenge } from "./components/hooks/useEffect/EffectChallenge";
// import { ReactUseEffect } from "./components/hooks/useEffect";
// import ContactForm from "./components/hooks/useState/ContactForm";
// import LoginForm from "./components/hooks/useState/LoginForm";
// import { UseId } from "./components/hooks/UseId";
// import ForwardRefs from "./components/hooks/useRefs/ForwardRefs";
// import { ParentComponent } from "./components/PropDrilling";
// import { UseRef } from "./components/hooks/useRefs";
// import { BioProvider } from "./components/hooks/ContextAPI";
// import { About } from "./components/hooks/ContextAPI/About";
// import Home from "./components/hooks/ContextAPI/Home";
// import Services from "./components/hooks/ContextAPI/Services";
// import ReactMemo from "./components/hooks/Memo/ReactMemo";
// import MemoParentComponent from "./components/hooks/Memo/UseMemo";
// import UseCallback from "./components/hooks/Memo/UseCallback";
// import"./index.css";
// import { ThemeProvider } from "./components/hooks/ContextAPI/DarkLight";
// import { DarkLight } from "./components/hooks/ContextAPI/DarkLight";
// import { ReducerComp } from "./components/hooks/UseReducer";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
// import {Home} from "./ReactRouter/Pages/Home";
// import About from "./ReactRouter/Pages/About";
// import {Movie} from "./ReactRouter/Pages/Movie";
// import {Contact, contactData} from "./ReactRouter/Pages/Contact";
// import AppLayout from "./ReactRouter/Pages/layout/AppLayout";
// import "./ReactRouter/css/index.css";
// import {ErrorPage} from "./ReactRouter/Pages/ErrorPage"
// import { NotFound } from "./ReactRouter/Pages/NotFound";
// import { getMoviesData } from "./api/GetApiData";
// import { MovieDetails } from "./components/UI/MovieDetails";
// import { getMovieDetails } from "./api/GetMovieDetails";
// import { AxiosMovie } from "./axios/pages/Movie";
// import { useEffect } from "react";
// import {getPost} from "./full_stack_with_axios/PostApi"
// import Posts from "./crud/Posts";
// import "./crud/crud.css"

import HeroSection from "./components/Navbar/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import "../src/components/Navbar/index.css"

// import Accordion from "./components/Accordion/Accordion";

const App = () => {
  return (
    // <section className="main-section">
    //     {/* <Posts /> */}
    // </section>
    // <Accordion />,
    <>
      <Navbar />
      <HeroSection />
    </>


  )
};

// Axios Get Post
// console.log(getPost());
//   const getPostData = async() => {
//     const res = await getPost();
//     console.log(res.data);
//   }
//   useEffect (() => {
//     getPostData();
//   },[]);
// return (<>
// <h1>Hello React Crud Operations </h1>
// </>);

// react route provider
//   const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<AppLayout />,
//     errorElement:<ErrorPage />,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About />
//       },
//       {
//         path:"/movie",
//         element:<Movie />,
//         loader:getMoviesData,        
//       },  
//        {
//         path:"/movie/:movieId",
//         element: <MovieDetails />,
//         loader:getMovieDetails,
//       },  
//        {
//         path:"/contact",
//         element:<Contact />,
//         action:contactData,
//       },
//       // {
//       //   path:"*",
//       //   element:<NotFound />
//       // },
//     ]
//   },

// ]);
// return <RouterProvider router ={router} />

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
// {/* <Route path ="*" element ={ <ErrorPage/>} /> */}
//       <Route path ="/" element ={ <Home />} />
//       <Route path ="/about" element ={ <About />} />
//       <Route path ="/contact" element ={ <Contact />} />
//       <Route path ="/movie" element ={ <Movie />} />
//     </>
//   )
// );
// return <RouterProvider router ={router} />
// React components and hooks
//   return <section className="container">
//     {/* <h1 className="card-heading"> List of Best Netflix Series</h1> */}
//   {/* <Netflixseries />   */}
//   {/* <EventHandling /> */}
//   {/* < EventProps  /> */}
//   {/* <EventPropagation  /> */}
//   {/* <State  /> */}
//   {/* <DerivedState /> */}
//   {/* <Sibling /> */}
//   {/* <LiftStateUp /> */}
//   {/* <ToggleSwitch /> */}
//   {/* <Todo /> */}
//   {/* <Keys /> */}
//   {/* <ShortCircuit /> */}
//   {/* <Counter />  */}
//   {/* <ControlledForm /> */}
//   {/* <RegistrationForm /> */}
//   {/* <RegistrationFormReact /> */}
//   {/* <LoginForm /> */}
//   {/* <ContactForm /> */}
//   {/* <ReactUseEffect />  */}
//   {/* <Challenge /> */}
//   {/* <CleanUp /> */}
//   {/* <HowNotToFetchApi />   */}
//   {/* <HarryPotterCharacter /> */}
//   {/* <UseRef />  */}
//   {/* <ForwardRefs /> */}
//   {/* <UseId /> */}
//   {/* <ParentComponent /> */}
//   {/* <BioProvider >
//   <Home />
//   <About />
//   <Services />
//   </BioProvider> */}
// {/* <ThemeProvider >
// <DarkLight />
// </ThemeProvider > */}
// {/* <ReducerComp /> */}
// {/* <ReactMemo /> */}
// {/* <MemoParentComponent /> */}
// {/* <UseCallback /> */}
//   </section>

// return (
// parent tag is neeed
// <div>  this i extra div
// <React.Fragment></React.Fragment><Fragment></Fragment>  this type also we call fragment it used deleted extra nodes
// <>
//  {/* <Header /> */}
// {/* <Netflixseries /> */}
// {/* // */}
// {/* <Netflixseries /> */}
// {/* // */}
// {/* <Netflixseries /> */}
// {/*  */}
// {/* <Netflixseries /> */}
// {/* */}
// {/* <Netflixseries /> */}
// {/* 0<Footer /> */}
// </>
// </div>  this i extra div'
// );
// }; // react code

// function Sibling ()
// {
//     console.log("Sibling Component rendered");
//     return <div className='main-div'>
//         <h1>Sibling Component - {}</h1></div>
// }
export default App;
