import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import MainMovie from "../components/MainMovie/MainMovie";



function Movie() {


    const {id} = useParams()
    console.log(id);


    return (
      <>
        <NavBar />
        <MainMovie id={id}/>
      </>
    )
  }
  
  export default Movie;