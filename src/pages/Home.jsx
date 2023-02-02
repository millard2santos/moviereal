

import NavBar from '../components/NavBar/NavBar'
import Main from '../components/Main/Main'
import Section from '../components/Section/Section';

function Home() {

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
  
  export default Home;