import React from 'react'

export const ApproachCard = ({ card: { title, icon } }: any) => {
  return (
    <div>
      <div className='bg-white flex justify-center'>
        <div className='flex-col w-full items-center'>
          <div className=' flex justify-center mb-6'>
            <img src='./src/assets/focuses.png' />
          </div>
          <div className='text-center text-moksha-black font-medium text-base max-w-[193px]' >
            <span>
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
