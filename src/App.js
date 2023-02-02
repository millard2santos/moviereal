
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Movie from './pages/Movie'



const API_KEY = '156de9a632e94cfb9b9a113793c69ef8'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
