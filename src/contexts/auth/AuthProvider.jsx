import PropTypes from "prop-types";
import { useState } from "react";
import { authContext } from "./authContext";

export const AuthProvider = ({ children, value = {} }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <authContext.Provider value={{ ...value, isLogged, setIsLogged }}>
      {children}
    </authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object,
};
