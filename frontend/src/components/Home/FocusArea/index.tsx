import ContentSection from '../ContentSection'
import { FocusAreaConfig } from '../../../configs/Home/FocusAreaConfig'
import { FocusContent } from './FocusContent'

export const FocusArea = (props: {}) => {
  return (
    <div className='bg-moksha-gray'>
      <ContentSection
        title={FocusAreaConfig.title}
        subTitle={FocusAreaConfig.subTitle}
        tagLine={FocusAreaConfig.tagLine}
        content={<FocusContent />}
      />
    </div>
  )
}
