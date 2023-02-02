import MovieCard from "../MovieCard/MovieCard"
import { useEffect, useState } from 'react'

const Main = () => {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)



    const getMovies = (page) => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=156de9a632e94cfb9b9a113793c69ef8&language=en-US&page=${page}`).then(res => res.json())
    }

    useEffect(() => {

        getMovies(page).then(res => {
            setMovies(res.results)
            console.log(res.results[0]);
        })


    }, [page])




    return (
        <>
            <section className="ml-[13%] mt-[50px] flex flex-col gap-5 p-10 flex-wrap items-center justify-center dark:bg-gray-600 dark:text-white">
                <h2 className="text-center text-4xl">Movies</h2>
                <h3 className="text-2xl text-center mt-3">Populares</h3>
                <div className="flex gap-5 flex-wrap justify-center">
                    {
                        movies.map((e, i) => <MovieCard key={i} id={e.id} title={e.title} img={e.poster_path} rating={Math.round(e.vote_average / 2)} />)
                    }
                </div>
                <div className="p-3 flex  gap-4 items-center text-2xl">
                    <i onClick={() => setPage(prev=> prev - 1)} className={`fa-solid fa-arrow-left cursor-pointer hover:scale-110 transition-transform duration-150 ${page === 1 ? 'invisible' : 'visible'}`}></i>
                    <span className="relative bottom-0.5">{page}</span>
                    <i onClick={() => setPage(prev=> prev + 1)} className={`fa-solid fa-arrow-right cursor-pointer hover:scale-110 transition-transform duration-150 ${page === 500 ? 'invisible' : 'visible'}`}></i>
                    
                </div>
            </section>

        </>
    )
}

export default Main