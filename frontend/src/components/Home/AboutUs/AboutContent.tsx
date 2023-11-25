import React from 'react'
import { AboutCard } from './AboutCard'
import { AboutUsConfig } from '../../../configs/Home/AboutUsConfig'

export const AboutContent = (props: {}) => {
  return (
    <div className="flex justify-center w-full items-center flex-wrap gap-5">
      {AboutUsConfig.cards.map((card, index) => (
        <AboutCard card={card} key={index} />
      ))}
    </div>
  )
}
