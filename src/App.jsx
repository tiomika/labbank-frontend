import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

import { Header } from "./components/Header";

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
