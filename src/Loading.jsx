import React from 'react'
import {Triangle} from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='Loading'>
        <Triangle
  visible={true}
  height="120"
  width="120"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}
