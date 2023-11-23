import { ServiceCard } from '../components/Services/ServiceCard'

export const Services = (props: {}) => {
  return (
    <>
      <div className='py-20 bg-moksha-dark-blue'>
        <div className="w-full flex justify-center">
          <div>
            <div className="mb-10 text-center text-sm text-orange-500 font-medium">
              SERVICES
            </div>
            <div className="mb-14">
              <div className="text-center font-[450] mb-2 text-2xl text-moksha-white">
                Geomatics Excellence Unleashed
              </div>
              <div className="text-center text-sm text-white">
                Explore a comprehensive array of geomatics services, meticulously tailored to <br />
                meet the evolving needs of our clients.
              </div>
            </div>
          </div>
        </div>

        {/*header and intro for the services*/}
        <ServiceCard />

        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div >


    </>
  )
}
