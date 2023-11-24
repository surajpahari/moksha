import React from 'react'
import { HightlightCard } from '../../components/Home/KeyHighlights/HightlightCard'
import { ProtfolioCard } from '../../components/Protfolio/ProtfolioCard'
import { ProtfolioContent } from '../../components/Protfolio/ProtfolioContent'

export const View = (props: {}) => {
  return (
    <div className='text -blue mt-20'>
      <ProtfolioCard />
      <ProtfolioContent />
    </div>
  )
}
