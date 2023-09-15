import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

import { Home } from './pages/Home';
import { PixArea } from './pages/PixArea';
import { Cambio } from './pages/Cambio';

import { AppLayout } from './components/AppLayout';
import { PrivateRoutes } from './components/PrivateRoutes';
import { PublicRoutes } from './components/PublicRoutes';

import { AppProvider, AuthProvider } from './contexts';

function App() {
  const [numeroDaConta, setNumeroDaConta] = useState('');
  const [senha, setSenha] = useState('');

  const mostrarValores = () => {
    alert(`Número da conta: ${numeroDaConta}\nSenha: ${senha}`);
  };

  return (
    <AppProvider
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
                <Route path="/pix" element={<PixArea />} />
                <Route path="/cambio" element={<Cambio />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
