import React from 'react'

export const ApproachCard = () => {
  return (
    <div>
      <div className='bg-white border border-black max-w-[200px] flex justify-center m-1'>
        <div className='flex-col w-full items-center'>
          <div className=' flex justify-center mb-6'>
            <img src='./src/assets/focuses.png' />
          </div>
          <div className='text-center text-moksha-black font-medium'>
            <span>
              Participatory Approach
              Backed by
              Scientific Methods
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
