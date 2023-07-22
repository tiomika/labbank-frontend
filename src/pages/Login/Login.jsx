import { useContext } from "react";
import WalletIllustration from "../../assets/imgs/wallet.svg";

import { appContext } from "../../App";
import { Button } from "../../components/Button";
import { Paper } from "../../components/Paper";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";

function Login() {
  const values = useContext(appContext);
  return (
    <div className="formContainer">
      <Paper>
        <Text element={"h1"}>Seja bem vindo!</Text>
        <div className="subtitle">
          <Text element={"paragraph"}>Digite os seus dados de acesso</Text>
        </div>
        <div className="formContent">
          <div>
            <TextInput
              onChangeText={values.setNumeroDaConta}
              label="Número da conta com dígito"
              type="text"
            />
            <TextInput
              onChangeText={values.setSenha}
              label="Senha"
              type="password"
            />
            {/* <Link to="#">Esqueci minha senha</Link> */}
            <Button onClick={values.mostrarValores}>Entrar</Button>
          </div>
          <div>
            <img src={WalletIllustration} alt="Wallet at login page" />
          </div>
        </div>
        {/* <DebugState state={{ numeroDaConta, senha }} /> */}
      </Paper>
    </div>
  );
}

export default Login;
