import React from 'react'

export const getMoviesData  = async() => {
  try {
    const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
    );
    const data =  response.json();
    //  console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}

