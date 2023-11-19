import { ReactNode } from "react"

const ContentSection = (children: ReactNode) => {
  const white = true
  const properties = {
    title: "OUR FOCUS AREA",
    subtitle: " Geomatics Excellence  Unleashed",
    sentence1: "Explore a comphrehensive array of Geomatics services metriculosly tailored to",
    sentence2: "Meet evolving neet of our client"

  }
  return (
    <div>
      <div className={`${white ? 'bg-white' : 'bg-gray'} pt-16 pb-4`}>
        <div>
          {/*header and intro for the services*/}
          <div className="w-full flex justify-center">
            <div>
              <div className="my-6 text-center text-xs text-orange-500 font-medium">
                {properties.title}
              </div>
              <div className="text-center font-[450] mb-2">
                {properties.subtitle}
              </div>
              <div className="text-xs text-gray-500">
                {properties.sentence1}
              </div>
              <div className="text-center text-xs text-gray-500">
                {properties.sentence2}
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
      </div>
    </div>
  )
}

export default ContentSection
