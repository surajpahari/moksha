import { useRef } from 'react'
import { ProtfolioCard } from '../../components/Protfolio/ProtfolioCard'
import { ProtfolioContent } from '../../components/Protfolio/ProtfolioContent'
import { useNavigate } from 'react-router-dom'


export const View = (props: {}) => {
  const contentReference = useRef<HTMLElement | null>(null)
  const handleScrollDown = () => {
    if (contentReference.current) {
      contentReference.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleGoBack = () => {
    navigate('/protfolio')

  }
  const navigate = useNavigate();
  return (
    <div className='text -blue mt-20'>
      <div className='flex w-full gap-20 bg-white flex-wrap'>
        <div className='grow flex justify-center items-center' >
          <div className='flex flex-col gap-6 p-2'>
            <button onClick={handleGoBack}>
              <div className='flex items-center cursor-pointer mb-16'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M12.6665 8.5H3.33317" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 3.83334L3.33333 8.50001L8 13.1667" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <span>
                    Back
                  </span>
                </div>
              </div>
            </button>
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
            <button onClick={handleScrollDown}>
              <div className='flex cursor-pointer items-center mt-20'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M7.99951 3.83334L7.99951 13.1667" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.33301 8.49984L7.99967 13.1665L12.6663 8.49984" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div>
                  <span>
                    Scroll Down
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/*image part*/}
        <div className='grow flex justify-center'>
          <div>
            <img src='./src/assets/hillside.png' />
          </div>
        </div>

      </div>
      <div ref={contentReference}>
        <ProtfolioContent />
      </div>


    </div >
  )
}
