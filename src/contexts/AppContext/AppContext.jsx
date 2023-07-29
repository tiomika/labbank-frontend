import { createContext } from "react";

export const appContext = createContext({
  valores: { numeroDaConta: "", senha: "" },
  mostrarValores: () => {},
  setNumeroDaConta: () => {},
  setSenha: () => {},
});

const AppContext = appContext.Provider;

export default AppContext;
