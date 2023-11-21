import ContentSection from '../ContentSection'
import { AboutInfo } from './AboutInfo'

export const AboutUs = (props: {}) => {
  return (
    <div className='bg-dotted-pattern'>
      <ContentSection content={AboutInfo} />
    </div>
  )
}
