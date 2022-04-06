import ordersTypes from './orders.types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleSaveOrder, handleGetUserOrderHistory,handleGetAdminOrderHistory,
  handleGetOrder,handleFetchAdminOrder } from './orders.helpers';
import { auth } from './../../firebase/utils';
import { clearCart } from './../Cart/cart.actions';
import { setUserOrderHistory, setOrderDetails,setAdminOrder } from './orders.actions';
import { yellow } from '@material-ui/core/colors';
import productsTypes from '../Products/products.types';

export function* getAdminOrderHistory({ payload }) {
  try {
    const history = yield handleGetAdminOrderHistory(payload);
    yield put(
      setUserOrderHistory(history)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetAdminOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_ADMIN_ORDER_HISTORY_START, getAdminOrderHistory);
};








export function* getUserOrderHistory({ payload }) {
  try {
    const history = yield handleGetUserOrderHistory(payload);
    yield put(
      setUserOrderHistory(history)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetUserOrderHistoryStart() {
  yield takeLatest(ordersTypes.GET_USER_ORDER_HISTORY_START, getUserOrderHistory);
};

export function* saveOrder({ payload }) {
  try {
    const timestamps = new Date();
    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser.uid,
      orderCreatedDate: timestamps
    });
    // yield put(
    //   clearCart()
    // )

  } catch (err) {
    // console.log(err);
  }
};

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
};

export function* getOrderDetails({ payload }) {
  try {
    const order = yield handleGetOrder(payload);
    console.log(order)
    yield put(
      setOrderDetails(order)
    )

  } catch (err) {
    // console.log(err);
  }
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ordersTypes.GET_ORDER_DETAILS_START, getOrderDetails);
};

export function* fetchAdminOrder(){
  try{

    const orders = yield handleFetchAdminOrder();
    yield put(
      setAdminOrder(orders)
    )

  }catch(err){
    // console.log(err)
  }
}


export function* onFetchOrderAdminStart(){
  yield takeLatest(ordersTypes.FETCH_ORDER_ADMIN,fetchAdminOrder)
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetAdminOrderHistoryStart),
    call(onGetUserOrderHistoryStart),
    call(onGetOrderDetailsStart),
    call(onFetchOrderAdminStart)
    
  ])
}
