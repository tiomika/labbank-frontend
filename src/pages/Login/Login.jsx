import { useContext } from "react";
import WalletIllustration from "../../assets/imgs/wallet.svg";

import { Button } from "../../components/Button";

import { Link } from "../../components/Link";
import { Paper } from "../../components/Paper";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { appContext } from "../../contexts/AppContext";

import "./Login.css";

function Login() {
  const values = useContext(appContext);

  return (
    <div className="form_container">
      <Paper>
        <div className="login_header">
          <Text element={"h1"}>Seja bem vindo!</Text>
          <Text element={"paragraph"}>Digite os seus dados de acesso</Text>
        </div>
        <div className="login_panels">
          <div className="login_panel column_panel">
            <TextInput
              onChangeText={values.setNumeroDaConta}
              label="Número da conta com dígito"
              type="text"
              message="O número da conta deve conter 6 dígitos"
            />
            <TextInput
              onChangeText={values.setSenha}
              label="Senha"
              type="password"
            />
            <Link to="#">Esqueci minha senha</Link>
            <div className="login_panel buttons">
              <Button fullWidth onClick={values.mostrarValores}>
                Entrar
              </Button>
              <Button
                color="secondary"
                fullWidth
                onClick={values.mostrarValores}
              >
                Quero abrir minha conta
              </Button>
            </div>
          </div>
          <div className="login_panel column_align_right">
            <img src={WalletIllustration} alt="Wallet at login page" />
          </div>
        </div>

        {/* <DebugState state={{ numeroDaConta, senha }} /> */}
      </Paper>
    </div>
  );
}

export default Login;
