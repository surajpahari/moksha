import React from 'react'

export const FocusCard = ({ card: { detail } }: any) => {
  return (
    <div className="bg-white px-10 py-2.5 mb-4 ">
      <span className="text-lg font-medium leading-5">
        <img src="./src/assets/focuses.png" className="inline mr-4" />
        {detail}
      </span>
    </div>
  )
}
