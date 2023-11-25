import { ContactForm } from "../components/ContactForm"

export const Contact = (props: {}) => {
  return (
    <div className='bg-moksha-dark-blue py-20 text-white'>

      <div>
        <div className="w-full flex justify-center">
          <div>
            <div className="mb-10 text-center text-sm text-orange-500 font-medium">
              <span>
                CONTACT US
              </span>

            </div>
            <div className="mb-14">
              <div className="text-center font-[600] mb-4 text-4xl text-white">
                Become a client
              </div>
              <div className="text-center text-sm text-white max-w-[510px]">
                Partner with us today to change how tomorrow looks. Our team is eager to discuss your unique needs, provide insights, and explore how Moksha can be the catalyst for positive change in your community. Your vision, combined with our expertise, is the formula for success.
              </div>
            </div>
            <div className='flex justify-center items-center gap-4 w-full mb-20'>
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
          </div>
        </div>

      </div>

      < ContactForm />
    </div >

  )
}
