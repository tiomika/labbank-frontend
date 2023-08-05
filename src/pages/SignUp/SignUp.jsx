import CustomerIllustration from "../../assets/imgs/customer.svg";

import { Button } from "../../components/Button";
import { PageContainer } from "../../components/Containers";
import { TextInput } from "../../components/Inputs";
import { Link } from "../../components/Link";
import { Paper } from "../../components/Paper";
import { Text } from "../../components/Text";

import "./SignUp.css";

function SignUp() {
  return (
    <PageContainer>
      <Paper>
        <div className="signup_header">
          <Text element="h1" weight="light">
            Olá!
          </Text>
          <Text
            element="paragraph"
            weight="light"
            className="signup_header-caption"
          >
            Precisamos de alguns dados para realizar o seu cadastro
          </Text>
        </div>
        <div className="signup_panels">
          <div className="signup_panel column_panel">
            <TextInput
              label="Qual é o seu nome?"
              placeholder="Digite o seu nome completo..."
              type="text"
            />
            <div className="buttons">
              <Button fullWidth>Continuar</Button>
            </div>
          </div>
          <div className="signup_panel column_align_right">
            <img src={CustomerIllustration} alt="Wallet" />
          </div>
        </div>
        <Link to="/">Cancelar</Link>
      </Paper>
    </PageContainer>
  );
}

export default SignUp;
