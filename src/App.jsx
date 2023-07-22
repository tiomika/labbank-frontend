import { useState } from "react";
import WalletIllustration from "./assets/imgs/wallet.svg";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Paper } from "./components/Paper";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";

import "./App.css";

function App() {
  const [numeroDaConta, setNumeroDaConta] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <Header />
      <div className="formContainer">
        <Paper>
          <Text element={"h1"}>Seja bem vindo!</Text>
          <div className="subtitle">
            <Text element={"paragraph"}>Digite os seus dados de acesso</Text>
          </div>
          <div className="formContent">
            <div>
              <TextInput
                onChangeText={setNumeroDaConta}
                label="Número da conta com dígito"
                type="text"
              />
              <TextInput
                onChangeText={setSenha}
                label="Senha"
                type="password"
              />
              {/* <Link to="#">Esqueci minha senha</Link> */}
              <Button>Entrar</Button>
            </div>
            <div>
              <img src={WalletIllustration} alt="Wallet at login page" />
            </div>
          </div>
          {/* <DebugState state={{ numeroDaConta, senha }} /> */}
        </Paper>
      </div>
    </div>
  );
}

export default App;
