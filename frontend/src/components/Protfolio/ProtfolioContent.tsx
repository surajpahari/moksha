import React from 'react'

export const ProtfolioContent = (props: {}) => {
  return (
    <div className='p-16'>
      <div className='w-full flex justify-center p-3 pt-20  items-center text-moksha-black bg-moksha-gray rounded-md'>

        <div className='grid max-w-[1290px]'>
          <div>
            <div className='text-2xl font-medium mb-8'>
              <span>
                Project Description
              </span>
            </div>
            <div className='mb-8'>
              <span>
                IOM Nepal, under the overall leadership of the Ministry of Home Affairs (MoHA),
                had conducted a rapid assessment of open spaces, identified and mapped 83 open spaces in Kathmandu valley in 2013. These open spaces were later proven to be very useful during Nepal Earthquake 2015. Realizing the importance of open spaces identification, International Organization for Migration (IOM) planned to identify and map open spaces in five other
                locations; earthquake-affected municipalities outside the Kathmandu valley.
              </span>
            </div>
          </div>
          <div>
            <div className='text-2xl font-medium mb-8'>
              <span>
                Project Description - 02
              </span>
            </div>
            <div className='mb-8'>
              <span>
                IOM Nepal, under the overall leadership of the Ministry of Home Affairs (MoHA),
                had conducted a rapid assessment of open spaces, identified and mapped 83 open spaces in Kathmandu valley in 2013. These open spaces were later proven to be very useful during Nepal Earthquake 2015. Realizing the importance of open spaces identification, International Organization for Migration (IOM) planned to identify and map open spaces in five other
                locations; earthquake-affected municipalities outside the Kathmandu valley.
              </span>
            </div>
          </div>

          <div>
            <div className='text-2xl font-medium mb-8'>
              <span>
                Challenges
              </span>
            </div>
            <div className='mb-8 font-[400]'>
              <span>
                IOM Nepal, under the overall leadership of the Ministry of Home Affairs (MoHA),
                had conducted a rapid assessment of open spaces, identified and mapped 83 open spaces in Kathmandu valley in 2013. These open spaces were later proven to be very useful during Nepal Earthquake 2015. Realizing the importance of open spaces identification, International Organization for Migration (IOM) planned to identify and map open spaces in five other
                locations; earthquake-affected municipalities outside the Kathmandu valley.
              </span>
            </div>
          </div>

          <div>
            <div className='text-2xl font-medium mb-8'>
              <span>
                The technical team at Moksha provided the following services.
              </span>
            </div>

            <div className='mb-8 font-[400]'>
              <div className='flex gap-1'>
                <div>
                  <img src='./src/assets/check-square.png' />
                </div>
                <div>
                  <span>
                    Carried out a GPS survey at 83 open spaces in Kathmandu valley and collected data on the current status of those open spaces.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
