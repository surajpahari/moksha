export const Contact = (props: {}) => {
  return (
    <div className='bg-moksha-dark-blue py-20 text-white'>
      <div>
        {/*header and intro for the services*/}
        <div className="w-full flex justify-center">
          <div>
            <div className="mb-10 text-center text-sm text-orange-500 font-medium">
              <span>
                CONTACT US
              </span>

            </div>
            <div className="mb-14">
              <div className="text-center font-[600] mb-2 text-4xl text-white">
                BECOME A CLIENT
              </div>
              <div className="text-center text-sm text-white max-w-[510px]">
                Partner with us today to change how tomorrow looks. Our team is eager to discuss your unique needs, provide insights, and explore how Moksha can be the catalyst for positive change in your community. Your vision, combined with our expertise, is the formula for success.
              </div>
            </div>
            <div className='flex justify-center items-center gap-4 w-full'>
              <div>
                Birendranagar-04, Surkhet, Nepal
              </div>
              <div>
                083523975
              </div>
              <div>
                @info.moksha.com
              </div>
            </div>
            <div className="flex justify-center max-w-[1100px] bg-moksha-blue-mutant">
              <div className="text-center">
                <span className="text-3xl">
                  Need surveying done in your neck of<br /> the woods? Moksha’s down to help.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*services card*/}

      </div>
    </div >
  )
}
