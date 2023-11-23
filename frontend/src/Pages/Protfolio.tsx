import React from 'react'
import { KeyHighlight } from '../components/Home/KeyHighlights'

export const Protfolio = (props: {}) => {
  return (
    <div className='py-20 bg-white'>
      <div className="w-full flex justify-center">
        <div>
          <div className="mb-10 text-center text-sm text-orange-500 font-medium">
            PROTFOLIO
          </div>
          <div className="mb-14">
            <div className="text-center font-[450] mb-2 text-2xl text-moksha-dark-blue">
              <span>
                You can't be what you can't see. Check out
                <br />
                the works we are proud of.
              </span>

              SERVICES
              Geomatics Excellence Unleashed
            </div>
            <div className="text-center text-sm text-white">
              Explore a comprehensive array of geomatics services, meticulously tailored to <br />
              meet the evolving needs of our clients.
            </div>
          </div>
        </div>
      </div>

      {/*section for the links*/}
      <div className='flex grid-cols-5 items-center justify-center gap-2 mb-2'>
        <div className='border border-moksha-blue p-2'>
          <span className="text-moksha-blue">
            key highlightsdsdfasdfa
          </span>
        </div>

        <div className='border border-moksha-blue p-2'>
          <span className="text-moksha-blue">
            key highlightsdsdfasdfa
          </span>
        </div>
        <div className='border border-moksha-blue p-2 max-w-fit'>
          <span className="text-moksha-blue">
            key highlight
          </span>
        </div>
        <div className='border border-moksha-blue p-2'>
          <span className="text-moksha-blue">
            key highlight
          </span>
        </div>
        <div className='border border-moksha-blue p-2'>
          <span className="text-moksha-blue">
            key highlight
          </span>
        </div>
      </div>

      <div className='flex grid-cols-5 items-center justify-center gap-2'>
        <div className='border border-moksha-blue p-2'>
          <span className="text-moksha-blue">
            key highlightsdsdfasdfa
          </span>
        </div>
        <div className='border border-moksha-blue p-2 max-w-fit'>
          <span className="text-moksha-blue">
            key highlight
          </span>
        </div>
        <div className='border border-moksha-blue p-2'>
          <span className="text-moksha-blue">
            key highlight
          </span>
        </div>
        <div className='border border-moksha-blue p-2'>
          <span className="text-moksha-blue">
            key highlight
          </span>
        </div>
      </div>

      <div>
        <KeyHighlight />
      </div>
    </div>
  )
}
