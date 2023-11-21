import React from 'react'
import ContentSection from '../ContentSection'
import { ServiceInfo } from './ServiceInfo'


export const Services = (props: {}) => {
  return (
    <div>
      <ContentSection content={ServiceInfo} />
    </div>
  )
}
