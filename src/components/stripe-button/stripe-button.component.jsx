import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HzNkfEug3o4FtRPDmrJiI0KwjOQbimapgNIcEGtabOhJCKeDGBXfdY21sUmzgeRHZwtjct3kbBTzrD7tgoxYGDz00E1JakDX3'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Ecom Store'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton