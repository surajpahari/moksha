import { ServiceCard } from './ServiceCard'
export const ServiceContent = (props: {}) => {
  return (
    <div className='flex w-full flex-wrap justify-center'>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />

    </div>
  )
}
