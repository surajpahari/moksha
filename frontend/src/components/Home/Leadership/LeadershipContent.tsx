import React from 'react'
import { LeaderShipCard } from './LeaderShipCard'

export const LeadershipContent = (props: {}) => {
  return (
    <div className='flex w-full gap-5'>
      <LeaderShipCard />
      <LeaderShipCard />
      <LeaderShipCard />
      <LeaderShipCard />

    </div>
  )
}
