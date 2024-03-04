import React from 'react'
import img from '../../src/assets/error.svg'

export default function NotFound() {
  return (
    <div className='text-center d-flex align-items-center justify-content-center img-fluid parent'>
      <img src={img} alt="not found" />
    </div>
  )
}
