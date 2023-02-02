
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Rating from '../Stars/Stars'


const MovieCard = ({ title, img, rating,id }) => {



    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/movie/${id}`)} 
        className='rounded-lg
         bg-blue-300 overflow-hidden p-3 flex flex-col items-center w-[150px]
          gap-3 hover:scale-105 transition-transform duration-100 cursor-pointer
           dark:bg-gray-500 dark:text-white'>

            <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt="asdasd" />
            {/* <p className='text-center'>{title.length >= 14 ? title.slice(0, 13) + '...' : title}</p> */}
            <Rating rating={rating} />

        </div>

    )
}

export default MovieCard