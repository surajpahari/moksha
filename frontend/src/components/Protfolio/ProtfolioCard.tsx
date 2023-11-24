import React from 'react'
import { Link } from 'react-router-dom'

export const ProtfolioCard = (props: {}) => {
  return (
    <div className='flex w-full gap-20 bg-white flex-wrap'>
      <div className='grow flex justify-center items-center' >
        <div className='flex flex-col gap-6 p-2'>
          <div>
            Back
          </div>
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
          <div>
            Scroll Down
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
