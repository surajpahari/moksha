import './App.css'
import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

function App() {

  return (
    <>
      <div className='fixed w-full  h-[50px] z-10 bg-white'>
        <Navbar />
      </div>
      <div className='absolute w-full top-[50px] left-0 z-0'>
        <Banner />
        <Services />
      </div>

    </>
  )
}

export default App
