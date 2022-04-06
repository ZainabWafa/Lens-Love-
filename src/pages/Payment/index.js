import React from 'react';
import {useHistory} from 'react-router-dom'
import PaymentDetails from './../../components/PaymentDetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from './../../stripe/config';
import StripeCheckoutButton from '../../components/stripe-button';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from '../../components/Checkout';
import {useDispatch } from 'react-redux'
import {clearCart} from './../../redux/Cart/cart.actions'
import './styles.scss'

const stripePromise = loadStripe(publishableKey);


const Payment = (total) => {
  
  const history = useHistory();
  return (



    <div class='container'>
     
  {/* <a class='button--inverse'>Create Stripe Account</a> */}

   {/* <form action="">
     <label>Email</label>
     <input type="email"></input>
     <a class='button' onClick={() => history.push('/')}>Submit</a>
   </form> */}

   <Elements stripe={stripePromise}>
    < StripeCheckoutButton />

   
    
  </Elements>
  <a class='button' onClick={() => history.push('/')}>Return Home</a>
    
    
  
</div>
   
  //         <div className="stripebtn">
  //     <h1>Pay with Stripe</h1>
  //      <Elements stripe={stripePromise}>
  //   < StripeCheckoutButton />

   
    
  // </Elements>
 
      
  // //   </div>
    
  

  

  //   <div className="stripebtn">
  //     <h1>Pay with Stripe</h1>
  //      <Elements stripe={stripePromise}>
  //   < StripeCheckoutButton />

   
    
  // </Elements></div>
   
  );
}

export default Payment;

