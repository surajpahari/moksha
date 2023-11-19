
export const AboutUs = () => {
  return (
    <div className="bg-white bg-dotted-pattern py-24">
      <div>
        {/*header and intro for the services*/}
        <div className="w-full flex justify-center">
          <div>
            <div className="mb-10 text-center text-sm text-orange-500 font-medium">
              ABOUT US
            </div>
            <div className="mb-14">
              <div className="text-center font-[450] mb-2 text-2xl text-moksha-black">
                <span className="text-moksha-blue" > Geo-ICT technology</span> consulting that strives for innovation in geospatial technologies
                to provide <br />
                solutions to contemporary problems of humanity.
              </div>
              <div className="text-center text-sm text-gray-500">
                Explore a comphrehensive array of Geomatics services metriculosly tailored to
              </div>
              <div className="text-center text-sm text-gray-500">
                meet evolving need of our client
              </div>
            </div>
            <div className="flex justify-center w-full items-center gap-5">
              <div className="bg-moksha-blue p-6 rounded">
                <div className="mb-4">
                  <img src="./src/assets/codesandbox.svg" className="bg-moksha-blue" />
                </div>
                <div className="text-center text-white">
                  <span>
                    Agility
                  </span>
                </div>
              </div>

              <div className="bg-moksha-blue p-6 rounded">
                <div className="mb-4">
                  <img src="./src/assets/codesandbox.svg" className="bg-moksha-blue" />
                </div>
                <div className="text-center text-white">
                  <span>
                    Agility
                  </span>
                </div>
              </div>

              <div className="bg-moksha-blue p-6 rounded">
                <div className="mb-4">
                  <img src="./src/assets/codesandbox.svg" className="bg-moksha-blue" />
                </div>
                <div className="text-center text-white">
                  <span>
                    Agility
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/*services card*/}
        <div className="mt-16">
          <div className="p-2 flex items-center justify-center">
          </div>
          <div className="text-center text-gray-600 text-xs mt-10">
            SHOW MORE
          </div>
        </div>
      </div>
    </div >
  )
}
