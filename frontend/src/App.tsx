import './App.css'
import { AboutUs } from './components/AboutUs'
import { Banner } from './components/Banner'
import { FocusArea } from './components/FocusArea'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import ContentSection from './components/ContentSection'
import { Collabroration } from './components/Collabroration'
import { Footer } from './components/Footer'
import { ServicesAlt } from './components/ServicesAlt'
import { ServicesAlt2 } from './components/ServiceAlt2'
import { NavbarAlt } from './components/NavbarAlt'

function App() {

  return (
    <>
      <div className='fixed w-full  h-[60px] z-10 bg-white'>
        <Navbar />


      </div>
      <div className='absolute w-full top-[60px] left-0 z-0'>
        <Banner />
        <Services />
        <AboutUs />
        <FocusArea />
        <Collabroration />

        <Footer />
      </div>

    </>
  )
}

export default App
