import ContentSection from '../ContentSection'
import { AboutInfo } from './AboutInfo'

export const AboutUs = (props: {}) => {
  return (
    <div className='bg-moksha-gray'>
      <ContentSection content={AboutInfo} />
    </div>
  )
}
