import React from 'react'

function Footer() {
    return (
        <>

            <div className='row mt-4 p-4'>
                <div className='col-lg-4 p-4 '>
                    <h3 className='fw-bold'>Contact Us</h3>
                    <p>All Bazaar SDN.BHD.</p>
                    <p>7/24 Email Customer Support</p>
                    <p>service@peaksportshoes.com</p>

                </div>
                <div className='col-lg-4 p-4'>
                    <h3 className='fw-bold'>Categories</h3>
                    <p>All Products</p>
                    <p>PEAK Brand</p>
                    <p>Basketball</p>
                    <p>Running</p>
                    <p>Casual
                    </p>

                </div>
                <div className='col-lg-4 p-4'>
                    <h3 className='fw-bold'>Information</h3>
                    <p>Contact Us</p>
                    <p>Shipping Policy</p>
                    <p>Privacy Policy</p>
                    <p>Return&Exchange</p>
                    <p>Payment Method</p>

                </div>
               <div className='flex-column p-4'>
                    <h3 className='fw-bold'>Subscribe to our emails</h3>
                    <input  className='w-25 p-2' type="email" placeholder='Email' />
               </div>

                <hr />
                
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='w-25' src="https://shopify.dev/assets/templated-apis-screenshots/checkout-ui-extensions/2024-10/paymenticon-default.png" alt="" />
                </div>

                <div className='text-center'>
                © 2024, PEAK Powered by Shopify
                </div>
              
            </div>

        </>
    )
}

export default Footer