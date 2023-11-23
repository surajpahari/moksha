import React from 'react'

export const HightlightCard = (props: {}) => {
  return (
    <div className='flex w-full gap-20 bg-white flex-wrap'>
      <div className='grow flex justify-center items-center' >
        <div className='flex flex-col gap-6 p-2'>
          <div className='text-moksha-black text-2xl font-semibold leading-7'>
            GIS-Based Municipal Data Management
            <br />
            And Mapping For Disaster Preparedness
          </div>
          <div>
            <span className='text-sm'>
              A GIS and mapping initiative to prepare ward level integrated Geo-database for
              <br />
              all project locations. Data collection method includes: training and mobilizing
              <br />
              local youths, integration of data from multiple existing sources from multiple exi..
            </span>
          </div>
          <div className='flex gap-14 text-sm'>
            <div>
              <div className='mb-1'>
                <span className="text-moksha-blue font-semibold">
                  Client
                </span>
              </div>
              <div>
                <span className="text-moksha-black font-semibold leading-4">
                  CDF Dolakha for Bhimeshwor Municipality
                </span>
              </div>
            </div>

            <div>
              <div>
                <span className="text-moksha-blue font-semibold">
                  Time Duration
                </span>
              </div>
              <div>
                <span className="text-moksha-black font-semibold leading-4">
                  2020-06-13 to 2022-19-02
                </span>
              </div>
            </div>
          </div>
          {/*arrow section*/}
          <div className='flex justify-end m-w-fit'>
            <div>
              <div>
                <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-down-right" opacity="0.6">
                    <path id="Vector" d="M18.375 18.6667L44.625 45.3334" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Vector_2" d="M44.625 18.6667V45.3334H18.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*image part*/}
      <div className='grow flex justify-center'>
        <div>
          <img src='./src/assets/hillside.png' />
        </div>
      </div>

    </div>
  )
}
