import React from 'react'

import { FocusCard } from './FocusCard'
export const FocusContent = (props: {}) => {
  return (

    <div className="flex justify-center w-full gap-3 text-moksha-black">
      <div>
        <FocusCard />
        <FocusCard />
        <FocusCard />
        <FocusCard />
        <FocusCard />
      </div>
      <div>
        <FocusCard />
        <FocusCard />
        <FocusCard />
        <FocusCard />
        <FocusCard />
      </div>
    </div>
  )
}
