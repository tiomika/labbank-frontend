import { SessionHeader } from './../../components/SessionHeader';
import { Container } from './../../components/Containers';
import { Button } from './../../components/Button';
import { TextInput } from './../../components/Inputs';

import { AiOutlineStar } from 'react-icons/ai';

import './Cambio.css';

const Cambio = () => {
  return (
    <>
      <SessionHeader />
      <Container>
        <div className="container__cambio">
          <div className="area__cambio">
            <h2>Câmbio</h2>

            <form>
              <label>Realizar conversão</label>

              <div className="col">
                <TextInput
                  id="name"
                  label="Valor em reais"
                  placeholder="R$ 0,00"
                  type="text"
                  onChangeText={() => ''}
                />

                <TextInput
                  id="name"
                  label="Valor em reais"
                  placeholder="R$ 0,00"
                  type="text"
                  onChangeText={() => ''}
                />
              </div>

              <div className="total">
                <p>
                  Total: <span>$ 0.00</span>
                </p>
                <div className="total__details">
                  <p>
                    Data: <span>01/07/2023</span>
                  </p>
                  <p>
                    Câmbio: <span>R$4,86</span>
                  </p>
                </div>
              </div>

              <div className="btn__cambio">
                <Button>Realizar conversão</Button>
              </div>
            </form>
          </div>

          <div className="balance__currency">
            <h2>Saldo em outras moedas</h2>

            <ul>
              <li>
                USD (dólar americano): <span>$ 0.00</span>
              </li>
              <li>
                CAD (dólar canadense): <span>$ 0.00</span>
              </li>
            </ul>

            <div className="actions">
              <a href="">Voltar</a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cambio;
