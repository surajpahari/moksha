import React from 'react'
import { Banner } from '../components/Home/Banner'
import { Collabroration } from '../components/Home/Collabroration'
import { Footer } from '../components/Footer'
import Approach from '../components/Home/Approach'
import { KeyHighlight } from '../components/Home/KeyHighlights'
import LeaderShip from '../components/Home/Leadership'
import { FocusArea } from '../components/Home/FocusArea'
import { AboutUs } from '../components/Home/AboutUs'

const Home = (props: {}) => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Approach />
      <FocusArea />
      <KeyHighlight />
      <LeaderShip />
    </div>
  )
}
export default Home;