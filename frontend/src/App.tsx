import './App.css'
import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <div className='h-[50px]'>
        <Navbar />
      </div>
      <div className='absolute w-full top-[50px] left-0'>
        <Banner />
      </div>

    </>
  )
}

export default App
