import { ServiceCard } from './ServiceCard'
import ServiceConfig from '../../../configs/Home/ServiceConfig'

export const ServiceContent = (ServiceInfo: any) => {
  return (
    <div className='flex w-full flex-wrap justify-center'>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />

    </div>
  )
}
