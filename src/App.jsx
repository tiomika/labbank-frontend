import { useState } from "react";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";

import { AppContext } from "./contexts/AppContext";

function App() {
  const [numeroDaConta, setNumeroDaConta] = useState("");
  const [senha, setSenha] = useState("");

  const mostrarValores = () => {
    alert(`Número da conta: ${numeroDaConta}\nSenha: ${senha}`);
  };

  return (
    <AppContext
      value={{
        valores: { numeroDaConta, senha },
        mostrarValores,
        setNumeroDaConta,
        setSenha,
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
