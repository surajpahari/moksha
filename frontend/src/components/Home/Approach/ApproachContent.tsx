import React from 'react'
import { ApproachCard } from './ApproachCard'

export const ApproachContent = (props: {}) => {
  return (
    <div className='flex justify-center gap-10 flex-wrap'>
      <ApproachCard />
      <ApproachCard />
      <ApproachCard />

    </div>
  )
}
