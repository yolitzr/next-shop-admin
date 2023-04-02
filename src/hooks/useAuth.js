import React, { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export const ProviderAuth = ({ children }) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const singIn = async (email, password) => {
    setUser('login');
  };

  return { user, singIn };
};
