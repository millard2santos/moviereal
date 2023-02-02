import { useEffect, useState } from "react"
import EachSec from "../EachSec/EachSec"



const Section = () => {
    const [genres, setGenres] = useState([])
    const getGenres = () => {
        return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=156de9a632e94cfb9b9a113793c69ef8&language=en-US').then(res=> res.json())
        
    }

    useEffect(() => {

        getGenres().then(res=> setGenres(res.genres))
                            
        
    },[])


    return (
        <>
            <section className="w-[13%] fixed z-10 h-screen px-5 flex flex-col text-gray-600 overflow-scroll dark:bg-gray-700 dark:text-white">
                {
                    genres.map((e,i)=> <EachSec key={i} name={e.name}/> )
                }
            </section>
        </>
    )
}

export default Section