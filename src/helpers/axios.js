import axios from 'axios';

var axiosObj = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
});

axiosObj.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access-token');

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosObj;

/** Generate new access-token using refresh-token  */
// axiosConfig.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       originalRequest.data &&
//       originalRequest.data.AuthFlow === 'USER_PASSWORD_AUTH'
//     ) {
//       return Promise.reject(error);
//     }

//     const refreshToken = storageService.getRefreshToken();
//     if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
//       originalRequest._retry = true;

//       return axiosAuthInstance
//         .post('/signin', {
//           AuthFlow: 'REFRESH_TOKEN',
//           AuthParameters: {
//             REFRESH_TOKEN: refreshToken
//           }
//         })
//         .then((res) => {
//           if (res.status === 200) {
//             storageService.saveAccessToken(
//               res.data.AuthenticationResult.AccessToken
//             );
//             originalRequest.headers.Authorization =
//               'Bearer ' + res.data.AuthenticationResult.AccessToken;
//             axios.defaults.headers.common['Authorization'] =
//               'Bearer ' + res.data.AuthenticationResult.AccessToken;
//             return axios(originalRequest);
//           }
//         });
//     } else {
//       window.location.href = '/sign-in';
//       //return Promise.reject(error);
//     }
//   }
// );
