import { Outlet, Link } from "react-router-dom";
import React from 'react'
import { Navbar } from "../components/Navbar";
import { Collabroration } from "../components/Home/Collabroration";
import { Footer } from "../components/Footer";

export const Layout = (props: {}) => {
  return (
    <>

      <div className='fixed w-full  min-h-[50px] z-10 bg-white'>
        <Navbar />
      </div>
      <div className='absolute w-full top-[50px] left-0 z-0 bg-white'>
        <Outlet />
        <Collabroration />
        <Footer />

      </div>
    </>
  )
}
