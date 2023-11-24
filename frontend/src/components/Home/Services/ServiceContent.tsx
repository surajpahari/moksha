import { ServiceCard } from './ServiceCard'
import ServiceConfig from '../../../configs/Home/ServiceConfig'

export const ServiceContent = () => {
  console.log(ServiceConfig)
  return (
    <div className='flex w-full flex-wrap justify-center'>
      {ServiceConfig.cards.map((card, index) => (
        <ServiceCard key={index} ServiceCardInfo={card} />
      ))}
    </div>
  )
}
