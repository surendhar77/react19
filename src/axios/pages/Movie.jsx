import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AxiosCard } from '../UI/Card';
import {getMovie} from "../services/GetServices"
import "../UI/Card.css"


export const AxiosMovie = () => {
  const [data, setData] = useState([]);

  const API = `https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1`;

  const getMovieData = async () => {
    try {
      // const res = await axios.get(API);
      const res = await getMovie();
      console.log(res.data.Search); // shoulad be an array
      setData(res.data.Search); // make sure it's an array
    } catch (error) {
      console.log("Error Message:",error.message);
      console.log("Error Status:",error.response.status);
      console.log("Error Data:",error.response.data);

    
    
    }
  };

  useEffect(() => {
    getMovieData();
  }, []); // ✅ run once only on mount

  return (
    <ul className='container grid grid-four--cols'>
      {Array.isArray(data) && data.map((curElem) => (
        <AxiosCard key={curElem.imdbID} movieData={curElem} />
      ))}
    </ul>
  );
};
