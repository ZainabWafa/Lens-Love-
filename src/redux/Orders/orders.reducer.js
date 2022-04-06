import ordersTypes from './orders.types';

const INITIAL_STATE = {
  orderHistory: [],
  orderDetails: {},
  orders:{}
};

const ordersReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ordersTypes.SET_USER_ORDER_HISOTRY:
      return {
        ...state,
        orderHistory: action.payload
      };
    case ordersTypes.SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload
      };
    case ordersTypes.SET_ORDER_ADMIN:
      return{
        ...state,
        orders:action.payload
      }  
    default:
      return state;
  }
};

export default ordersReducer;
