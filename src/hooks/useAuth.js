import React, { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endpoints from '@/services/api';

const AuthContext = createContext();

export const ProviderAuth = ({ children }) => {
  const auth = useAuthProvider(); // Function que contiene la lógica de Auth

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const singIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const {
      data: { access_token },
    } = await axios.post(endpoints.auth.login, { email, password }, options);

    if (access_token) {
      const token = access_token;
      Cookies.set('token', token, { expires: 5 });

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data: user } = await axios.get(endpoints.auth.profile);

      console.log(user);

      setUser(user);
    }
  };

  const logOut = () => {
    Cookies.remove('token');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    window.location.href = '/login';
  };

  return { user, singIn, logOut };
};

// Para Analizar

// // Libraries
// import { useState, useContext, createContext, useEffect, useCallback } from 'react';
// import cookie from 'js-cookie';
// import axios from 'axios';

// // Services
// import endPoints from '@services/api/index';

// const AuthContext = createContext();

// const useAuthProvider = () => {
//   const [user, setUser] = useState(null);

//   /**
//    * Function to get the user from the API with the token stored in the cookies
//    */
//   const fetchUser = useCallback(async () => {
//     try {
//       const token = cookie.get('token');

//       if (token) {
//         axios.defaults.headers.Authorization = `Bearer ${token}`;
//         const { data: user } = await axios.get(endPoints.auth.profile);

//         setUser(user);
//       }
//     } catch (error) {
//       setUser(null);
//     }
//   }, []);

//   const signIn = async (email, password) => {
//     try {
//       const options = {
//         Headers: {
//           accept: '*/*',
//           'Content-Type': 'application/json',
//         },
//       };

//       const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

//       if (access_token) {
//         const token = access_token.access_token;
//         cookie.set('token', token, { expires: 5 });
//       }

//       await fetchUser();
//     } catch (error) {
//       setUser(null);
//     }
//   };

//   useEffect(fetchUser, [fetchUser]);

//   return { user, signIn };
// };

// export const AuthProvider = ({ children }) => {
//   const auth = useAuthProvider();

//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
