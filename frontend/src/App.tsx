import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Pages/Layout'
import { Services } from './Pages/Services'
import Home from './Pages/Home'
import { Protfolio } from './Pages/Protfolio';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="protfolio" element={<Protfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
