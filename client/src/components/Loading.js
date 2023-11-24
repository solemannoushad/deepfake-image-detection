import React from 'react'
import { InfinitySpin } from  'react-loader-spinner'

export default function Loading() {
  return (
    <div className='loadingMain'>
        <div className="loading">
            <InfinitySpin 
                width='200'
                color="#D34410"
            />
        </div>
    </div>
  )
}
