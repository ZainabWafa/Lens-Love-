import ordersTypes from './orders.types';

export const saveOrderHistory = order => ({
  type: ordersTypes.SAVE_ORDER_HISTORY_START,
  payload: order
});

export const getAdminOrderHistory =()=>({
  type: ordersTypes.GET_ADMIN_ORDER_HISTORY_START
})

export const getUserOrderHistory = uid => ({
  type: ordersTypes.GET_USER_ORDER_HISTORY_START,
  payload: uid
});

export const setUserOrderHistory = history => ({
  type: ordersTypes.SET_USER_ORDER_HISOTRY,
  payload: history
});

export const getOrderDetailsStart = orderID => ({
  type: ordersTypes.GET_ORDER_DETAILS_START,
  payload: orderID
});

export const setOrderDetails = order => ({
  type: ordersTypes.SET_ORDER_DETAILS,
  payload: order
});

export const fetchAdminOrder=()=>({
  type:ordersTypes.FETCH_ORDER_ADMIN,
})

export const setAdminOrder=orders=>({
  type:ordersTypes.SET_ORDER_ADMIN,
  payload:orders
})

 