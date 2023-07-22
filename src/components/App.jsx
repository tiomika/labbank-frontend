import { useState } from "react";
import WalletIllustration from "../assets/imgs/wallet.svg";

import Header from "./Header";
import Paper from "./Paper";
import Text from "./Text";
import TextInput from "./TextInput";

import "./App.css";
import DebugState from "./DebugState";

function App() {
  const [numeroDaConta, setNumeroDaConta] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <Header />
      <div className="formContainer">
        <Paper>
          <Text element={"h1"}>Seja bem vindo!</Text>
          <Text element={"paragraph"}>Digite os seus dados de acesso</Text>
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
            </div>
            <div>
              <img src={WalletIllustration} alt="Wallet at login page" />
            </div>
          </div>
          <DebugState state={{ numeroDaConta, senha }} />
        </Paper>
      </div>
    </div>
  );
}

export default App;
