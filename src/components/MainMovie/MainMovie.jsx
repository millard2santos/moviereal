import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieCard from "../MovieCard/MovieCard"
import Details from "../Details/Details"



const MainMovie = ({id}) => {

    const [movie, setMovie] = useState({})
    

    const getMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=156de9a632e94cfb9b9a113793c69ef8&language=en-US`).then(res => res.json())
    }

    useEffect(() => {

        getMovies().then(res => {
            setMovie(res)
            console.log(res);
        })


    }, [])














    return (
        <section className="ml-[200px] mt-[50px] flex flex-col gap-5 p-10 flex-wrap items-center justify-center dark:bg-gray-600 dark:text-white">
        <h2 className="text-center text-4xl">Movies</h2>
        <h3 className="text-2xl text-center mt-3">Populares</h3>
        <Details title={movie.title} img={movie.poster_path} rating={Math.round(movie.vote_average / 2)} />
        
    </section>
)
}

export default MainMovie