import { useEffect, useState } from "react"
import MyMovies from "../MyMovies/MyMovies"



const NavBar = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)

    useEffect(() => {
        const html = document.querySelector('html')
        if (darkMode) {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    

    useEffect(() => {

    },[])
    https://api.themoviedb.org/3/search/movie?api_key=156de9a632e94cfb9b9a113793c69ef8&query=jack%20reacher

    return (
        <>
            <nav className="fixed z-50 w-[83%] flex justify-between ml-[200px] items-center h-10 bg-blue-400 p-8 dark:bg-gray-700 text-white">
                <i onClick={() => darkMode ? setDarkMode(false) : setDarkMode(true)} className={(darkMode ? "fa-sun" : "fa-moon") + " text-white fa-solid cursor-pointer"}></i>
                <div className="border-b border-white p-2 pb-0 flex gap-2 items-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="search" className="bg-transparent focus:outline-none" />
                </div>
                <MyMovies />
            </nav>
        </>
    )
}

export default NavBar