import { SessionHeader } from './../../components/SessionHeader';
import { Container } from './../../components/Containers';
import { Button } from './../../components/Button';
import { TextInput } from './../../components/Inputs';

import { AiOutlineStar } from 'react-icons/ai';

import './PixArea.css';

const PixArea = () => {
  return (
    <>
      <SessionHeader />
      <Container>
        <div className="container__pix">
          <div className="area__pix">
            <h2>Área pix</h2>

            <form>
              <label>Sua chave pix</label>

              <TextInput
                id="name"
                placeholder="Você ainda não possui uma chave pix"
                type="text"
                onChangeText={() => ''}
              />

              <div className="btn__pix">
                <Button>Gerar chave pix</Button>
              </div>
            </form>

            <a href="" className="pix__copy__paste">
              Pix copia e cola
            </a>
            <a href="" className="pix__tranfer__key">
              Transferir para chave pix
            </a>
          </div>

          <div className="favorites">
            <h2>Favoritos</h2>

            <ul>
              <li>
                <AiOutlineStar size="0.8rem" color="orange" />
                <span>Fulano de Souza dos Santos</span>
              </li>
              <li>
                <AiOutlineStar size="0.8rem" color="orange" />
                <span>Michael Tio Mika Nascimento</span>
              </li>
            </ul>

            <div className="actions">
              <Button>Todos os favoritos</Button>
              <a href="">Voltar</a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PixArea;
