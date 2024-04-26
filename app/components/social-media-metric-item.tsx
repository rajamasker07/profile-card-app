import React from 'react'
import { formatNumber } from '../utils/utils'

type props = {
  name: string,
  metrics: number
}

export default function SocialMediaMetricItem({
  name,
  metrics
}: props) {
  return (
    <div className='flex w-full place-content-center place-items-center flex-col'>
      <h1 className='text-normal font-extrabold text-dark-blue'>
        {  formatNumber(metrics) }
      </h1>
      <h2 className='text-sm font-thin'>
        { name }
      </h2>
    </div>
  )
}
