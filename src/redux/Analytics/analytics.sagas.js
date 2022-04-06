import analyticsTypes from './analytics.types'
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth } from './../../firebase/utils';
import { handleAddAnalytics} from './analytics.helpers'


export function* saveAnalytics({ payload }) {
    try {
      const timestamps = new Date();
      yield  handleAddAnalytics({
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
  
  export function* onSaveAnalyticsStart() {
    yield takeLatest(analyticsTypes.FETCH_ANALYTICS_ADMIN, saveAnalytics);
  };

  
  export default function* ordersSagas() {
    yield all([
      call(onSaveAnalyticsStart)
     
    ])
  }
  