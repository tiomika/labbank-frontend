import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContext } from './contexts/AppContext';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home/Home';

import { PrivateRoutes } from './components/PrivateRoutes';
import { PublicRoutes } from './components/PublicRoutes';
import { AppLayout } from './components/AppLayout';

function App() {
  const [numeroDaConta, setNumeroDaConta] = useState('');
  const [senha, setSenha] = useState('');

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
