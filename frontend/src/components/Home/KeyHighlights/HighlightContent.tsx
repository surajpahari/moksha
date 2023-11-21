import React from 'react'
import { HightlightCard } from './HightlightCard'

export const HighlightContent = (props: {}) => {
  return (
    <div className='flex flex-col gap-8'>
      <HightlightCard />
      <HightlightCard />
      <HightlightCard />
      <HightlightCard />
      <HightlightCard />

    </div>
  )
}
