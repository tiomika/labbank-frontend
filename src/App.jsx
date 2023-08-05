import { useState } from "react";

import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

import { Header } from "./components/Header";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home/Home";

// TODO: FAZER A EXTRAÇÃO DOS COMPONENTES DE ROTA PARA UM ARQUIVO SEPARADO
function PrivateRoutes() {
  const { isLogged } = useAuth()

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return (
    <Outlet />
  );
}

// TODO: FAZER A EXTRAÇÃO DOS COMPONENTES DE ROTA PARA UM ARQUIVO SEPARADO
function PublicRoutes() {
  const { isLogged } = useAuth()

  if (isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <Outlet />
  );
}

// TODO: FAZER A EXTRAÇÃO DOS COMPONENTES DE ROTA PARA UM ARQUIVO SEPARADO
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}



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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route element={<PublicRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AppContext>
  );
}

export default App;
