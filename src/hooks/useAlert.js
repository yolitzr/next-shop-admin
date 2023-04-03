import { useState } from 'react';

const useAlert = (options) => {
  const defaultOption = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };

  const [alert, setAlert] = useState({ ...defaultOption, ...options });

  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return { alert, setAlert, toggleAlert };
};

export default useAlert;
