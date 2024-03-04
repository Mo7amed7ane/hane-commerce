import React from 'react'

export default function Footer() {
  return (
    <footer className=' bg-main-light '>
      <div className="container p-4">
        <h3 className='fw-bolder text-capitalize'>get the fresh cart app</h3>
        <p className='text-capitalize'>we will send you a link, open it in your phone to download the app.</p>
        <form action="">
        <div className="row">
          <div className="col-md-10">
            <input type="text" className='form-control' placeholder='Email' />
          </div>
          <div className="col-md-2">
            <button className='btn text-white bg-main'>Share App Link</button>
          </div>
        </div>
        </form>
      </div>
    </footer>
  )
}
