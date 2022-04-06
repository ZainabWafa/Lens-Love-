import { auth } from './../../firebase/utils';
import {firestore} from './../../firebase/utils'

export const handleResetPasswordAPI = (email) => {
  const config = {
    url: 'http://localhost:3000/login'
  };

  return new Promise((resolve, reject) => {
    auth.sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ['Email not found. Please try again.'];
        reject(err);
      });
  });
};


// export const handleFetchAdminOrder=()=>{
//   return new Promise((resolve,reject)=>{
//     firestore
//     .collection('users')
//     .get()
//     .then(snapshot=>{
//       const ordersArray=snapshot.docs.map(doc=>{
//         return {
//           ...doc.data(),
//           documentID:doc.id
//         }
//       })
//       resolve(usersArray)

//     })
//     .catch(err=>{
//       reject(err)
//     })
//   })
// }

