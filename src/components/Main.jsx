import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import requests from '../Requests';

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) =>{
            setMovies(response.data.results)
        })
    }, [])
    // console.log(movie);

    const truncateString = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + "....";
        } else {
            return str;
        }
    }



  return (
    <div className='w-full h-[800px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[800px] bg-gradient-to-tr from-black'></div>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] mt-5 p-4 md:p-8 '>
              <h1 className='text-3xl md:text-5xl font-bold '>{movie?.title}</h1>
                <div className='my-4 '>
                    <button className='border bg-gray-300 text-black py-2 px-5 hover:scale-105 rounded-md'>Play</button>
                  <button className='border text-white py-2 px-5 ml-4 hover:scale-105 rounded-md'>Watch Later </button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='my-4 w-full md:max-w-[70%] lg:max-w-[50%] xl-max-w-[35%] text-gray-300'>{truncateString(movie?.overview, 180)}</p>
            </div>
      </div>
    </div>
  )
}

export default Main