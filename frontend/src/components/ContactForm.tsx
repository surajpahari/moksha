import React from 'react'

export const ContactForm = (props: {}) => {
  return (
    <div className="flex justify-center w-full">
      <div className='bg-moksha-blue-mutant w-full max-w-[1090px] rounded pb-[180px]'>
        <div className="text-center text-4xl font-semibold leading-10 mb-20 mt-[140px]">
          <span>
            Need surveying done in your neck of the <br /> woods?
            <span className="text-moksha-blue">Moksha’s down to help.</span>
          </span>
        </div>
        <div className="flex justify-center w-full">
          <div className=' w-full max-w-[1000px]'>


            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div className='mb-4'>
                  Full Name
                </div>
                <div className='mb-8 text-xl flex '>
                  <input name="fullName"
                    placeholder="Type your Full Name"
                    className='bg-transparent border-2 text-white border-white rounded-lg text-center placeholder:text-white w-full p-2 max-w-[626px]' />
                </div>
              </div>
            </div>

            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div className='mb-4'>
                  {/*icond for the mail end*/}
                  <span>
                    Email Address
                  </span>
                </div>
                <div className='mb-8 text-xl flex '>
                  <input name="fullName"
                    placeholder="Type your Email"
                    className='bg-transparent border-2 text-white border-white rounded-lg text-center placeholder:text-white w-full p-2 max-w-[626px]' />
                </div>
              </div>
            </div>
            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div className='mb-4'>
                  Phone Number
                </div>
                <div className='mb-8 text-xl flex '>
                  <input name="fullName"
                    placeholder="Type your Phone Number"
                    className='bg-transparent border-2 text-white border-white rounded-lg text-center placeholder:text-white w-full p-2 max-w-[626px]' />
                </div>
              </div>
            </div>


            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div className='mb-4'>
                  Business Name
                </div>
                <div className='mb-8 text-xl flex '>
                  <input name="fullName"
                    placeholder="Type your Business Name"
                    className='bg-transparent border-2 text-white border-white rounded-lg text-center placeholder:text-white w-full p-2 max-w-[626px]' />
                </div>
              </div>
            </div>


            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div className='mb-4'>
                  Location of Project
                </div>
                <div className='mb-8 text-xl flex '>
                  <input name="fullName"
                    placeholder="Choose the location of your project"
                    className='bg-transparent border-2 text-white border-white rounded-lg text-center placeholder:text-white w-full p-2 max-w-[626px]' />
                </div>
              </div>
            </div>


            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div className='mb-4'>
                  How did you hear about us?
                </div>
                <div className='mb-8 text-xl flex '>
                  <input name="fullName"
                    placeholder="Choose the media"
                    className='bg-transparent border-2 text-white border-white rounded-lg text-center placeholder:text-white w-full p-2 max-w-[626px]' />
                </div>
              </div>
            </div>



            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div className='mb-4'>
                  Tell us about your project
                </div>
                <div className='mb-8 text-xl flex '>
                  <input name="fullName"
                    placeholder="Insert details"
                    className='bg-transparent border-2 text-white border-white rounded-lg text-center placeholder:text-white w-full p-2 max-w-[626px]' />
                </div>
              </div>
            </div>
            <div className='flex w-full justify-center items-center'>
              <div className='w-full max-w-[630px]'>
                <div>
                  <button className="bg-moksha-red rounded px-8 py-[11px]">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
