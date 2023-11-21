import React from 'react'
import { HighlightContent } from './HighlightContent'
import { highlightInfo } from './hightlightInfo'
import ContentSection from '../ContentSection'

export const KeyHighlight = (props: {}) => {
  return (
    <div>
      <ContentSection content={highlightInfo} />
    </div>
  )
}
