
export const ServiceCard = (props: {}) => {
  const cardInfo = {
    bannerImage: '',
    icon: "./src/assets/focuses.png",
    title: "Consulting and Advisory Services",
    details:
      <span className="text-white">
        Elevate your geospatial strategies with Moksha's Consulting and<br />
        Advisory Services.Our seasoned professionals serve as strategic<br />
        partners throughout your project lifecycle.From initial ideation to<br />
        seamless execution, we provide valuable insights and guidance, helping < br />
        you navigate the complexities of geomatics, land use planning, and digital < br />
        solutions.Trust us to be your compass in the ever - evolving landscape < br />
        of spatial technologies.
      </span >
    ,

  }
  return (
    <>
      {/*<div className='flex  flex-wrap items-center justify-center w-full max-h-fit'>
        <div className="bg-moksha-blue-mutant flex flex-wrap justify-center gap-24 h-full rounded-l-md">
          <div className=' className rounded-l-md'>
            <svg width="556" height="407" viewBox="0 0 556 407" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10C0 4.47716 4.47715 0 10 0H556V407H9.99998C4.47714 407 0 402.523 0 397V10Z" fill="#D9D9D9" />
            </svg>
          </div>
          <div className='bg-moksha-blue-mutant items-center flex justify-center h-full p-1'>
            <div className="h-full pt-[45px] pb-[65px] pr-[111px]">
              <div className='mb-12  flex'>
                <div className="bg-white p-3 rounded-full">
                  <img src={cardInfo.icon} className='h-[41px] w-[41px] bg-white ' />
                </div>
              </div>
              <div className='bg-moksha-blue-mutant text-white mb-8'>
                <span className="text-3xl text-medium leading-8 font-normal">
                  {cardInfo.title}
                </span>
              </div>
              <div className='text-sm leading-4'>
                {cardInfo.details}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center bg-moksha-blue-mutant min-w-fit rounded-l-md gap-28  ">
        <div className="bg-moksha-white w-[556px] max-w-[556px] min-w-max min-h-full grow rounded-l-md">
        </div>

        <div className="500 full grow pt-[43px] pb-[73px] pr-[111px]">
          <div className="flex mb-12">
            <div className="bg-white p-3 rounded-full">
              <img src='./src/assets/focuses.png' className='h-[41px] w-[41px] bg-white ' />
            </div>
          </div>
          <div>
            <span className="text-white text-3xl text-semibold">
              Consulting and Advisory Services
            </span>
          </div>
          <div>
            <span className="text-white">
              Elevate your geospatial strategies with Moksha's Consulting and
              Advisory Services.<br />Our seasoned professionals serve as strategic<br />
              partners throughout your project lifecycle.From initial ideation to<br />
              seamless execution, we provide valuable insights and guidance, helping < br />
              you navigate the complexities of geomatics, land use planning, and digital < br />
              solutions.Trust us to be your compass in the ever - evolving landscape < br />
              of spatial technologies.
            </span >
          </div>


        </div>
      </div>

      */}
      <div className="w-full p-16">
        <div className="w-full flex justify-center h-full rounded-l-md mb-24">
          <div className="bg-green-50 h-full flex  w-full max-w-[1500px] flex-wrap reverse rounded-l-md">
            <div className="min-h-full bg-moksha-white max-w-[556px] w-[556px] grow rounded-md">
              white
            </div>
            <div className="m-h-full  grow bg-moksha-blue-mutant pl-24 pt-10 pb-20" >
              <div className="flex mb-12">
                <div className="bg-white p-3 rounded-full">
                  <img src='./src/assets/focuses.png' className='h-[41px] w-[41px] bg-white ' />
                </div>
              </div>
              <div>
                <span className="text-white text-3xl text-semibold">
                  Consulting and Advisory Services
                </span>
              </div>
              <div>
                <span className="text-white">
                  Elevate your geospatial strategies with Moksha's Consulting and
                  Advisory Services.<br />Our seasoned professionals serve as strategic<br />
                  partners throughout your project lifecycle.From initial ideation to<br />
                  seamless execution, we provide valuable insights and guidance, helping < br />
                  you navigate the complexities of geomatics, land use planning, and digital < br />
                  solutions.Trust us to be your compass in the ever - evolving landscape < br />
                  of spatial technologies.
                </span>
              </div>


            </div>
          </div>
        </div>

        <div className="w-full flex justify-center h-full rounded-l-md">
          <div className="bg-green-50 h-full flex  w-full max-w-[1500px] flex-wrap flex-row-reverse rounded-l-md">
            <div className="min-h-full bg-moksha-white max-w-[556px] w-[556px] grow rounded-md">
              white
            </div>
            <div className="m-h-full  grow bg-moksha-blue-mutant pl-24 pt-10 pb-20" >
              <div className="flex mb-12">
                <div className="bg-white p-3 rounded-full">
                  <img src='./src/assets/focuses.png' className='h-[41px] w-[41px] bg-white ' />
                </div>
              </div>
              <div className="mb-8">
                <span className="text-white text-3xl text-semibold">
                  Land Use Planning
                </span>
              </div>
              <div className="max-w-[565px]">
                <div className="text-white">
                  <div className="mb-2">
                    <span>
                      <i>
                        Reshaping Spaces, Building Futures
                      </i>
                    </span>
                  </div>
                  <div>
                    <span>
                      At Moksha, our commitment to excellence
                      extends to our core focus: Land Use Planning. With
                      a track record of successful projects at local levels, we specialize in creating sustainable, efficient, and purposeful land use plans that stand the test of time.
                    </span>
                  </div>
                </div>
                <br />
                <span className="text-2xl text-semibold text-white">
                  Our Comprehensive Approach
                </span>
                <ol className="text-white">
                  <li>
                    <div className="mt-4 mb-2">
                      <span className="text-xl text-semibold">
                        1. Urban Visioning
                      </span>
                    </div>
                    <span>
                      We delve into the unique identity of each municipality, creating land use plans that align with the community's vision for urban development. Utilizing cutting-edge technology, we harness data for informed decision-making, providing municipalities with a robust foundation for sustainable development.
                    </span>
                  </li>

                  <li>
                    <div className="mt-4 mb-2">
                      <span className="text-xl text-semibold">
                        1. Regularlity  Compliance
                      </span>
                    </div>
                    <span>
                      We delve into the unique identity of each municipality, creating land use plans that align with the community's vision for urban development. Utilizing cutting-edge technology, we harness data for informed decision-making, providing municipalities with a robust foundation for sustainable development.
                    </span>
                  </li>

                  <li>
                    <div className="mt-4 mb-2">
                      <span className="text-xl text-semibold">
                        1.Public Engagement
                      </span>
                    </div>
                    <span>
                      We delve into the unique identity of each municipality, creating land use plans that align with the community's vision for urban development. Utilizing cutting-edge technology, we harness data for informed decision-making, providing municipalities with a robust foundation for sustainable development.
                    </span>
                  </li>

                </ol>

              </div>


            </div>
          </div>
        </div>
      </div >

    </>
  )
}
