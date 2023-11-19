import { ServiceCards } from "./cards/ServiceCards"
export const Services = () => {
  return (
    <div className="bg-gray-100 pt-24 pb-4">
      <div>
        {/*header and intro for the services*/}
        <div className="w-full flex justify-center">
          <div>
            <div className="mb-10  text-center text-sm text-orange-500 font-medium">
              SERVICES
            </div>
            <div className="text-center text-2xl mb-4 text-moksha-black">
              Geomatics Excellence  Unleashed
            </div>
            <div className="text-sm text-gray-500">
              Explore a comphrehensive array of Geomatics services metriculosly tailored to
            </div>
            <div className="text-center text-sm text-gray-500">
              meet evolving need of our client
            </div>
          </div>
        </div>
        {/*services card*/}
        <div className="mt-16">
          <div className="p-2 flex items-center justify-center">
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
          </div>
          <div className="text-center text-gray-600 text-xs mt-10">
            SHOW MORE
          </div>
        </div>
      </div>
    </div>
  )
}
