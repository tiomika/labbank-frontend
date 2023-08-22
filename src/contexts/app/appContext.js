import { createContext } from "react";

export const appContext = createContext({
  valores: { numeroDaConta: "", senha: "" },
  mostrarValores: () => {},
  setNumeroDaConta: () => {},
  setSenha: () => {},
});
