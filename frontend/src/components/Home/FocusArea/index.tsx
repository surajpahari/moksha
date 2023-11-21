import ContentSection from '../ContentSection'
import { FocusInfo } from './FocusInfo'

export const FocusArea = (props: {}) => {
  return (
    <div className='bg-moksha-gray'>
      <ContentSection content={FocusInfo} />
    </div>
  )
}
