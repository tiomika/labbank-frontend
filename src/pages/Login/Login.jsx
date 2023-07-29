import { useContext } from "react";
import WalletIllustration from "../../assets/imgs/wallet.svg";

import { Button } from "../../components/Button";

import { Link } from "../../components/Link";
import { Paper } from "../../components/Paper";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { appContext } from "../../contexts/AppContext";

import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/Containers";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate("/signup");
  };

  const {
    mostrarValores,
    setNumeroDaConta,
    setSenha,
    valores: { numeroDaConta },
  } = useContext(appContext);

  return (
    <PageContainer>
      <Paper>
        <div className="login_header">
          <Text element={"h1"} weight="light">
            Seja bem vindo!
          </Text>
          <Text
            element={"paragraph"}
            weight="light"
            className="login_header-caption"
          >
            Digite os seus dados de acesso
          </Text>
        </div>
        <div className="login_panels">
          <div className="login_panel column_panel">
            <TextInput
              onChangeText={setNumeroDaConta}
              value={numeroDaConta}
              label="Número da conta com dígito"
              type="text"
            />
            <TextInput onChangeText={setSenha} label="Senha" type="password" />

            <Link to="/signup">Esqueci minha senha</Link>

            <div className="login_panel buttons">
              <Button
                disabled={numeroDaConta.length < 7}
                fullWidth
                onClick={mostrarValores}
              >
                Entrar
              </Button>
              <Button
                color="secondary"
                fullWidth
                onClick={navigateToSignUpPage}
              >
                Quero abrir minha conta
              </Button>
            </div>
          </div>
          <div className="login_panel column_align_right">
            <img src={WalletIllustration} alt="Wallet at login page" />
          </div>
        </div>
      </Paper>
    </PageContainer>
  );
}

export default Login;
