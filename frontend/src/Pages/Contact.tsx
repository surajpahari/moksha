import { ContactForm } from "../components/ContactForm"

export const Contact = (props: {}) => {
  return (
    <div className='bg-moksha-dark-blue py-20 text-white'>

      <div className="mt-16">
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
              <div className="flex items-center justify-center">
                <div className="text-center text-sm text-white max-w-[510px]">
                  Partner with us today to change how tomorrow looks. Our team is eager to discuss your unique needs, provide
                  insights, and explore how Moksha can be the catalyst for positive change in your community. Your vision, combined with our expertise, is the formula for success.
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center gap-16 w-full mb-20 flex-wrap'>

              {/*Location icon and Location*/}
              <div className="flex gap-2 items-center">
                <div>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon">
                      <circle id="Ellipse 9" cx="17.5" cy="17.5" r="17.5" fill="white" />
                      <g id="map-pin" clip-path="url(#clip0_121_2540)">
                        <path id="Vector" d="M23.5156 16.1632C23.5156 20.842 17.5 24.8524 17.5 24.8524C17.5 24.8524 11.4844 20.842 11.4844 16.1632C11.4844 14.5678 12.1182 13.0377 13.2463 11.9095C14.3745 10.7814 15.9046 10.1476 17.5 10.1476C19.0954 10.1476 20.6255 10.7814 21.7537 11.9095C22.8818 13.0377 23.5156 14.5678 23.5156 16.1632Z" stroke="#131623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Vector_2" d="M17.5001 18.1684C18.6075 18.1684 19.5053 17.2706 19.5053 16.1632C19.5053 15.0557 18.6075 14.158 17.5001 14.158C16.3926 14.158 15.4949 15.0557 15.4949 16.1632C15.4949 17.2706 16.3926 18.1684 17.5001 18.1684Z" stroke="#131623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_121_2540">
                        <rect width="16.0417" height="16.0417" fill="white" transform="translate(9.47925 9.47917)" />
                      </clipPath>
                    </defs>
                  </svg>                </div>
                <div>
                  <span>Birendranagar-04, Surkhet, Nepal</span>
                </div>
              </div>

              {/*Phone icon and phone number*/}
              <div className="flex gap-2 items-center">
                <div>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon">
                      <circle id="Ellipse 9" cx="17.5" cy="17.5" r="17.5" fill="white" />
                      <g id="phone" clip-path="url(#clip0_121_2543)">
                        <path id="Vector" d="M24.1839 20.7885V22.7938C24.1847 22.9799 24.1465 23.1642 24.0719 23.3347C23.9974 23.5053 23.888 23.6584 23.7508 23.7842C23.6137 23.9101 23.4517 24.0059 23.2754 24.0655C23.099 24.1252 22.9122 24.1473 22.7268 24.1306C20.67 23.9071 18.6943 23.2042 16.9585 22.0786C15.3435 21.0523 13.9743 19.6831 12.948 18.0681C11.8184 16.3244 11.1154 14.3391 10.8961 12.2731C10.8793 12.0883 10.9013 11.902 10.9606 11.7261C11.0198 11.5502 11.115 11.3886 11.2401 11.2515C11.3652 11.1145 11.5175 11.0049 11.6873 10.93C11.8571 10.855 12.0406 10.8161 12.2262 10.816H14.2314C14.5558 10.8128 14.8702 10.9277 15.1162 11.1392C15.3621 11.3507 15.5228 11.6444 15.5682 11.9656C15.6528 12.6073 15.8098 13.2374 16.0361 13.8438C16.126 14.0831 16.1455 14.3431 16.0922 14.593C16.0388 14.843 15.915 15.0724 15.7353 15.2542L14.8864 16.103C15.8379 17.7764 17.2235 19.1619 18.8968 20.1135L19.7457 19.2646C19.9274 19.0849 20.1569 18.961 20.4068 18.9077C20.6568 18.8544 20.9168 18.8739 21.156 18.9638C21.7625 19.1901 22.3925 19.3471 23.0342 19.4317C23.3589 19.4775 23.6555 19.641 23.8674 19.8912C24.0794 20.1414 24.192 20.4607 24.1839 20.7885Z" stroke="#131623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_121_2543">
                        <rect width="16.0417" height="16.0417" fill="white" transform="translate(9.479 9.47917)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span>083523975</span>
                </div>
              </div>

              {/*Email icon and email*/}
              <div className="flex gap-2 items-center">
                <div>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="icon">
                      <circle id="Ellipse 9" cx="17.5" cy="17.5" r="17.5" fill="white" />
                      <g id="mail" clip-path="url(#clip0_121_2546)">
                        <path id="Vector" d="M12.1527 12.1528H22.8472C23.5824 12.1528 24.184 12.7543 24.184 13.4896V21.5104C24.184 22.2457 23.5824 22.8472 22.8472 22.8472H12.1527C11.4175 22.8472 10.8159 22.2457 10.8159 21.5104V13.4896C10.8159 12.7543 11.4175 12.1528 12.1527 12.1528Z" stroke="#131623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Vector_2" d="M24.184 13.4896L17.4999 18.1684L10.8159 13.4896" stroke="#131623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_121_2546">
                        <rect width="16.0417" height="16.0417" fill="white" transform="translate(9.479 9.47917)" />
                      </clipPath>
                    </defs>
                  </svg>                </div>
                <div>
                  <span>@info.moksha.com </span>
                </div>
              </div>



              <div>

              </div>
            </div>
          </div>
        </div>

      </div>

      < ContactForm />
    </div >

  )
}
