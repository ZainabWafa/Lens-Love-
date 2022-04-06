import analyticsTypes from './analytics.types';

const INITIAL_STATE = {
  
  orders:{}
};

const analyticsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    
    case analyticsTypes.SET_ANALYTICS_ADMIN:
      return{
        ...state,
        orders:action.payload
      }  
    default:
      return state;
  }
};

export default analyticsReducer;
