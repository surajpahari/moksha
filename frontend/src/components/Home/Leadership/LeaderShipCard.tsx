import React from 'react'

export const LeaderShipCard = (props: {}) => {
  return (
    <div className='flex flex-col items-center justify-center  gap-6'>
      <div className='relative leadership-img'>
        <div className='relative w-80 h-96'>
          <div className='absolute rounded-full border bg-gray-200 border-blue-50 w-80 h-[310px] bottom-0 z-0'>
          </div>
          <div className='absolute bottom-0'>
            <img src='./src/assets/ceo.png' className='h-96 w-80' />
          </div>

        </div>
      </div>
      <div className='text-center text-moksha-black'>
        <span className='font-medium'>
          Dave Martin
          <br />
        </span>
        <span className='text-sm'>
          CEO
        </span>
      </div>

    </div>
  )
}
