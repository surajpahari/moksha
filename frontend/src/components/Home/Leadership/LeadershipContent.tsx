import { LeaderShipCard } from './LeaderShipCard'
import { LeadershipConfig } from '../../../configs/Home/LeaderShipConfig'

export const LeadershipContent = (props: {}) => {
  return (
    <div className='flex w-full justify-center gap-5 flex-wrap'>
      {LeadershipConfig.cards.map((card, index) => (
        <LeaderShipCard card={card} key={index} />
      ))}
    </div>
  )
}
