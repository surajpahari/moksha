import { ApproachCard } from './ApproachCard'
import { ApproachConfig } from '../../../configs/Home/ApproachConfig'

export const ApproachContent = (props: {}) => {
  return (
    <div className='flex justify-center gap-10 flex-wrap'>
      {ApproachConfig.cards.map((card, index) => (
        < ApproachCard card={card} key={index} />
      ))}

    </div>
  )
}
