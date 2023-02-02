import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Section from './components/Section/Section';
const firebase = require("firebase");




const API_KEY = '156de9a632e94cfb9b9a113793c69ef8'

function App() {

  return (
    <>
      <div className='flex'>
        <Section />
        <div className='w-full'>
          <NavBar />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App;
