
// import axios from 'axios';

// // import { url } from '../../utils/config';

// import {
//   USER_LOGIN,
 
// } from './types';

// // Import redirect logic
// import { redirectUser } from './redirectUser';

// //USER LOGIN
// export const loginUser = (signInData, history) => (dispatch) => {
//   axios
//     .post(`${url}/auth/userSignIn`, signInData)
//     .then((res) => {
//       if (res.data.status === true) {
//         redirectUser(res.data, history);
//       } else if (res.data.status === false) {
//         if (res.data.data.isPasswordExpired === true) {
//           history.push(`/passwordexpiry/${res.data.data.resetPasswordToken}`);
//         }
//       }
//     })
//     .catch((err) => {
//       if (err.response.status === 401 || err.response.status === 400) {
//         dispatch({
//           type: USER_LOGIN,
//           payload: err.response.data,
//         });
//       }
//     });
// };


