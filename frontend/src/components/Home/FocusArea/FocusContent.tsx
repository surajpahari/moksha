import { FocusAreaConfig } from '../../../configs/Home/FocusAreaConfig'
import { FocusCard } from './FocusCard'
export const FocusContent = (props: {}) => {
  return (

    <div className="flex flex-wrap justify-center w-full gap-3 text-moksha-black ">
      <div className='grid grid-cols-2'>
        {FocusAreaConfig.cards.map((card, index) => (
          <FocusCard
            card={card}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
