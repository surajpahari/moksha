import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Pages/Layout'
import { Services } from './Pages/Services'
import Home from './Pages/Home'
import { Contact } from './Pages/Contact';

import { Protfolio } from './Pages/Protfolio/Protfolio';
import { View } from './Pages/Protfolio/View';
import ScrollToTop from './components/helpers/ScrollToTop';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="protfolio" element={<Protfolio />} />
            <Route path="view-protfolio" element={<View />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter >



    </>
  )
}

export default App
