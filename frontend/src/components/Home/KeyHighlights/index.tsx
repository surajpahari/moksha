import React from 'react'
import { HighlightContent } from './HighlightContent'
import { highlightInfo } from './hightlightInfo'
import ContentSection from '../ContentSection'
import { KeyHighlightConfig } from '../../../configs/Home/KeyHighlightConfig'

export const KeyHighlight = (props: {}) => {
  return (
    <div className='bg-dotted-pattern'>
      <ContentSection title={KeyHighlightConfig.title}
        subTitle={KeyHighlightConfig.subTitle}
        tagLine={KeyHighlightConfig.tagLine}
        content={<HighlightContent />}
      />
    </div>
  )
}
