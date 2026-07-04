import React from 'react'
import Banner from './Banner'

export default function Orderplaced() {
  return (
   <>
   <Banner title="Checkout"></Banner>
    <div className='container mt-100'>
        <div className='row justify-content-center'>
            <div className='col-lg-7'>
                <div className='card food-card'>
                    <div className='card-body text-center'>
                        <h5 className='h55 text-center'>All Done</h5>
                            <i class="fa-solid fa-circle-check ico mt-20"></i>
                            <p className='para mt-3'>Thank you for ordering with us.<br></br> Your order is on its way to being prepared and will be delivered soon.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
