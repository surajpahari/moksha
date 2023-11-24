import ContentSection from '../ContentSection'


export const Services = ({ ServiceConfig }: any) => {
  console.log(ServiceConfig)
  return (
    <div className='bg-moksha-gray'>
      <ContentSection content={ServiceInfo} />
    </div>
  )
}
