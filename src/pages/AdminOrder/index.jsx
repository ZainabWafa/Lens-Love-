// import { keys } from '@material-ui/core/styles/createBreakpoints'
// import React,{useEffect,useState} from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import {fetchAdminOrder} from './../../redux/Orders/orders.actions'
// import './styles.scss'

// const mapState =({ordersData})=>({
//     orders:ordersData.orders
// })

// const AdminOrder =props=>{
//     const dispatch = useDispatch();
//     const {orders} = useSelector(mapState)
//     useEffect(()=>{
//         dispatch(
//             fetchAdminOrder()
//         )
//     },[])

//     const {orderTotal,
//         order,
//         documentID} =orders


//     return(
//         <div className='orders'>
//             <div className="manageOrders">
                
               
               
//                 <table>
//                     <tbody>
//                         <tr>
//                             <th>
//                                 <h1>Manage Orders</h1>
//                             </th>
//                         </tr>
//                         <tr>
//                             <td>

//                               {console.log(orders,'+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')}
                              
//                               {console.log(orders.documentID,'========================================================')}
//                                         {/* {console.log(orders,'+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')}

                                      
//                                                 {(orders).map((order,index)=>{
                                                    
//                                                     const {
//                                                         orderCreatedDate,
//                                                         orderTotal,
//                                                         orderUserID
//                                                     }=order;
//                                                     return(
//                                                         <tr key={index}>
//                                                             <td>
//                                                                 {orderCreatedDate}
//                                                             </td>
//                                                             <td>
//                                                                 {orderTotal}
//                                                             </td>
//                                                             <td>
//                                                                 {orderUserID}
//                                                             </td>
//                                                         </tr>
//                                                     )
//                                                 })} */}
                                  
                                    
                                                      
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
               
//             </div>
//         </div>
//     )
// }

// export default AdminOrder;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminOrderHistory } from './../../redux/Orders/orders.actions';
import OrderHistory from './../../components/OrderHistory';
import './styles.scss';

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data
});

const Dashboard = props => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);

  useEffect(() => {
    dispatch(
        getAdminOrderHistory()
    );

  }, []);

  return (
    <div>
      <h1>
        Order History
      </h1>

      <OrderHistory orders={orderHistory} />
    </div>
  );
};

export default Dashboard;
