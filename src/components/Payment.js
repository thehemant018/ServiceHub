import React from 'react'

const Payment = () => {
    return (
        <>
            <div class="bill">

                <div class="payment-card-1">
                    <h3>Payment Summery</h3><br />
                    <p>Item Total <span style={{marginLeft:"141px"}}>500/-</span></p>
                    <p>Convenience Fee<span style={{marginLeft: "187px"}}>25/-</span></p>
                    <hr />
                    <p>Total <span style={{marginLeft:"173px"}}>525/-</span></p>
                </div>
                <a href="" class="payment-btn" role="button">Proceed to Checkout</a>
                <div class="payment-card-2" style={{borderWidth:"4px"}}>
                    <h3>Order Details</h3><br />
                    <p>Shahpur Furniturewala<span style={{marginLeft: "130px"}}>500/-</span></p>
                    <hr style={{marginTop:"38px"}}/>
                    <p>Total <span style={{marginLeft: "181px"}}>500/-</span></p>
                </div>

                <div class="payment-img">
                    <img src="/images/Furniture.jpg" alt="no img" style={{height: "500px"}} />
                </div>
            </div>

        </>
    )
}

export default Payment
