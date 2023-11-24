import { Link } from "react-router-dom";
export const HightlightCard = ({ card: { title, description, client, time, link } }: any) => {
  return (
    <div className='flex w-full gap-20 bg-white flex-wrap'>
      <div className='grow flex justify-center items-center' >
        <div className='flex flex-col gap-6 p-2 max-w-[600px]'>
          <div className='text-moksha-black text-2xl font-semibold leading-7'>
            {title}
          </div>
          <div>
            <span className='text-sm'>
              {description}

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
                  {client}
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
                  {time}
                </span>
              </div>
            </div>
          </div>
          {/*arrow section*/}
          <div className='flex justify-end m-w-fit'>
            <div>
              <Link to={'/view-protfolio'}>
                <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-down-right" opacity="0.6">
                    <path id="Vector" d="M18.375 18.6667L44.625 45.3334" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Vector_2" d="M44.625 18.6667V45.3334H18.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </Link>
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
