import { useContext } from "react";
import WalletIllustration from "../../assets/imgs/wallet.svg";

import { Button } from "../../components/Button";

import { AccountInput, PasswordInput } from "../../components/Inputs";
import { Link } from "../../components/Link";
import { Paper } from "../../components/Paper";
import { Text } from "../../components/Text";
import { appContext } from "../../contexts/AppContext";

import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/Containers";

import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

function Login() {
  const { setIsLogged } = useAuth()
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

  const isInvalidAccountNumber = numeroDaConta.replace(/\D/g, "").length < 8;

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
            <AccountInput
              id="account_number"
              name="account_number"
              onChangeText={setNumeroDaConta}
              value={numeroDaConta}
              label="Número da conta com dígito"
              type="text"
            />
            <PasswordInput
              id="password"
              name="password"
              onChangeText={setSenha}
              label="Senha"
            />
            <Link to="/signup">Esqueci minha senha</Link>
            <div className="login_panel buttons">
              <Button
                disabled={isInvalidAccountNumber}
                fullWidth
                onClick={() => setIsLogged(true)}
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
