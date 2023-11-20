import './App.css'
import { AboutUs } from './components/AboutUs'
import { Banner } from './components/Banner'
import { FocusArea } from './components/FocusArea'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Collabroration } from './components/Collabroration'
import { Footer } from './components/Footer'
import { ApproachContent } from './components/Home/Approach/ApproachContent'
import Approach from './components/Home/Approach'

function App() {

  return (
    <>
      <div className='fixed w-full  h-[50px] z-10 bg-white'>
        <Navbar />
      </div>
      <div className='absolute w-full top-[50px] left-0 z-0 bg-white'>
        <Banner />
        <Services />
        <AboutUs />
        <FocusArea />
        <ApproachContent />
        <Collabroration />
        <Approach />
        <Footer />
      </div>

    </>
  )
}

export default App
