import { createContext, useState } from "react";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";

import "./App.css";

export const appContext = createContext();
const AppContext = appContext.Provider;

function App() {
  const [numeroDaConta, setNumeroDaConta] = useState("");
  const [senha, setSenha] = useState("");

  const mostrarValores = () => {
    alert(`Número da conta: ${numeroDaConta}\nSenha: ${senha}`);
  };

  return (
    <AppContext
      value={{
        mostrarValores: mostrarValores,
        setNumeroDaConta: setNumeroDaConta,
        setSenha: setSenha,
      }}
    >
      <div>
        <Header />
        <Login />
      </div>
    </AppContext>
  );
}

export default App;
