import { firestore } from './../../firebase/utils';

export const handleAddAnalytics = order => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('analytics')
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}