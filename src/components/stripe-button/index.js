import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com'
import Checkout from '../Checkout';
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal,selectCartItemsCount } from './../../redux/Cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import {clearCart} from './../../redux/Cart/cart.actions'
import {saveOrderHistory} from './../../redux/Orders/orders.actions'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



toast.configure()
// const mapState = ({ user }) => ({
//   currentUser: user.currentUser
// })
const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
});


const StripeCheckoutButton = (props) => {

  const { cartItems, total, itemCount } = useSelector(mapState);
  
  const dispatch = useDispatch();
  const configOrder={
    orderTotal:total,
    orderItems: cartItems.map(item => {
      const { documentID, productThumbnail, productName,
        productPrice, quantity } = item;

        return {
          documentID,
          productThumbnail,
          productName,
          productPrice,
          quantity
        }
      })

  }




  
  // const sendMail=(e)=>{
  //   emailjs.sendForm('service_xnzrgv2','template_6poiomb',"user_vZEPRIeB2GfTHO8K2KJjb").then(res=>{
  //     console.log(res);
  //   }).catch(err=>console.log(err))
  // }
  // const { currentUser } = useSelector(mapState);

  // const { email } = currentUser;
  // const dispatch = useDispatch()
  const history = useHistory()
  const notify =()=>{
    toast.success('Order Succesfull')
  } 

  //  const priceForStripe = price * 100;
   const publishableKey = 'pk_test_KzWXSJxJu3foClpqvGjmUlnp00c4Xcfgbb';
   
   const onToken = token => {
    history.push('/dashboard')
    dispatch(clearCart())
    // dispatch(sendMail(email))
    dispatch(saveOrderHistory(configOrder))
    dispatch(notify())
    
   };
  //  const mapState = createStructuredSelector({
  //     cartItems: selectCartItems,
  //     total: selectCartTotal
  //   });
 
   return (
      
     <StripeCheckout
       label='Pay with 💳'
       name='FoodStore Ltd.'
      
       billingAddress
       shippingAddress
      image='https://scontent-tir2-1.xx.fbcdn.net/v/t1.6435-9/171289109_121223046724368_981274772739343386_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=481g9-mrx4oAX-lWjiN&_nc_ht=scontent-tir2-1.xx&oh=da8c8805bf5288f037923ab30546a366&oe=61BF5982'
       description={`Secure Payment with Stripe`}
       panelLabel='Pay now'
      //  amount={priceForStripe}
       token={onToken}
       stripeKey={publishableKey}

         />

         
   );
 };
 
//  const mapDispatchToProps = dispatch => ({
//    resetCart: () => dispatch(resetCartAction()),
//    push: route => dispatch(push(route))
//  });
 
 export default (StripeCheckoutButton);