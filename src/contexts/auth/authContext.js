import { createContext } from "react";

export const authContext = createContext({
  isLogged: undefined,
  setIsLogged: () => {},
});
