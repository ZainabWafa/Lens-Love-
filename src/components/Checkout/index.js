import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal,selectCartItemsCount,selectCartTax } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from './../forms/Button';
import Item from './Item';
import {saveOrderHistory} from './../../redux/Orders/orders.actions'
import {addAnalyticsStart} from './../../redux/Analytics/analytics.actions'
import {clearCart} from './../../redux/Cart/cart.actions'

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
   taxPrice: selectCartTax,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
});

const Checkout = ({ }) => {
  const history = useHistory();
  const { cartItems, total, itemCount, taxPrice } = useSelector(mapState);
  
  
  const dispatch = useDispatch();
  const configOrder={
    orderTotal:total, 
    orderItems: cartItems.map(item => {
      const { documentID, productThumbnail, productName,
        productPrice, quantity } = item;
         
        
        // const taxPrice = productPrice * 0.14;
        // const total = productPrice + taxPrice;

        return {
          documentID,
          productThumbnail,
          productName,
          productPrice,
          quantity,
          
        }
      })

  }

  // const configAnalytics={
  //   orderItems: cartItems.map(item => {
  //     const { documentID, productThumbnail, productName,
  //       productPrice, quantity } = item;

  //       return {
  //         documentID,
  //         productThumbnail,
  //         productName,
  //         productPrice,
  //         quantity
  //       }
  //     })
  // }
  const orderHis=()=>{
    // dispatch(saveOrderHistory(configOrder));
    // dispatch(addAnalyticsStart(configAnalytics))
    // dispatch(clearCart())
    history.push('/payment');
  }

  const errMsg = 'You have no items in your cart.';

  return (
    <div className="checkout">
      <h1>
        Checkout
      </h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <th>
                          Product
                        </th>
                        <th>
                          Description
                        </th>
                        <th>
                          Quantity
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Remove
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      {cartItems.map((item, pos) => {
                        return (
                          <tr key={pos}>
                            <td>
                              <Item {...item} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <h4>
                                    taxPrice: ₹{taxPrice}
                                  </h4>
                                </td>
                                <td>
                                <h3>
                                  Total: ₹{total+taxPrice}
                                </h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <Button onClick={() => history.goBack()}>
                                    Continue Shopping
                                  </Button>
                                </td>
                                <td>
                                  <Button onClick={() => orderHis()}>
                                    Checkout
                                  </Button>
                                  {/* <Button>
                                    Checkout
                                  </Button> */}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
            <p>
              {errMsg}
            </p>
          )}
      </div>
    </div>
  );
};

export default Checkout;
