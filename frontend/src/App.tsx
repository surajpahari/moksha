import './App.css'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Home/Banner'
import { Collabroration } from './components/Home/Collabroration'
import { Footer } from './components/Footer'
import Approach from './components/Home/Approach'
import { Services } from './components/Home/Services'
import { KeyHighlight } from './components/Home/KeyHighlights'
import LeaderShip from './components/Home/Leadership'
import { FocusArea } from './components/Home/FocusArea'
import { AboutUs } from './components/Home/AboutUs'

function App() {

  return (
    <>
      <div className='fixed w-full  min-h-[50px] z-10 bg-white'>
        <Navbar />
      </div>
      <div className='absolute w-full top-[50px] left-0 z-0 bg-white'>
        <Banner />
        <Services />
        <AboutUs />
        <Approach />
        <FocusArea />
        <KeyHighlight />
        <LeaderShip />
        <Collabroration />
        <Footer />
      </div>

    </>
  )
}

export default App
