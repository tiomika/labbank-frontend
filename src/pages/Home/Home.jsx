import { Container } from '../../components/Containers';
import { SessionHeader } from '../../components/SessionHeader';
import './Home.css';

function Home() {
  return (
    <>
      <SessionHeader />
      <Container>
        <main>
          <div className="container__balance">
            <div className="container__balance__values">
              <div className="box__balance">
                <p className="box__balance__title">Saldo disponível</p>
                <p className="box__balance__value">
                  R$ 1.399,48 <span>+</span>
                </p>
                <a href="#" className="box__balance__more">
                  Ver detalhes
                </a>
              </div>

              <div className="box__details">
                <p className="box__details__title">Composição do saldo</p>
                <ul className="box__details__list">
                  <li>
                    <span>Saldo da Conta</span>
                    <span>R$ 1099,48</span>
                  </li>
                  <li>
                    <span>Limite de crédito</span>
                    <span>R$ 300,00</span>
                  </li>
                  <li>
                    <span>Limite utilizado</span>
                    <span>R$ 0,00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container__balance__image">
              <img src="https://placehold.co/200" alt="Image" />
            </div>
          </div>

          <div className="container__products">
            <h3>Produtos</h3>
            <ul className="box__services">
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=fEzwsq1QGmXg&format=png"
                    alt=""
                  />
                  Área Pix
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=fEzwsq1QGmXg&format=png"
                    alt=""
                  />
                  Câmbio
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=fEzwsq1QGmXg&format=png"
                    alt=""
                  />
                  Empréstimos
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=fEzwsq1QGmXg&format=png"
                    alt=""
                  />
                  Poupança
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://img.icons8.com/?size=512&id=fEzwsq1QGmXg&format=png"
                    alt=""
                  />
                  Transferência
                </a>
              </li>
            </ul>
          </div>

          <div className="container__transactions__history">
            <div className="box__history">
              <p className="box__history__title">Últimos lançamentos</p>
              <p className="box__history__month">Junho</p>
              <ul className="box__history__list">
                <li>
                  <span>28</span>
                  <span>Padaria doce sonho</span>
                  <span>R$ 11,90</span>
                  <span>D</span>
                </li>
                <li>
                  <span>19</span>
                  <span>Padaria doce sonho</span>
                  <span>R$ 14,10</span>
                  <span>D</span>
                </li>
                <li>
                  <span>08</span>
                  <span>PIX Fulano de Souza</span>
                  <span>R$ 190,00</span>
                  <span>C</span>
                </li>
                <li>
                  <span>06</span>
                  <span>Crédito Salário</span>
                  <span>R$ 1250,00</span>
                  <span>C</span>
                </li>
                <li>
                  <span>03</span>
                  <span>Millium Florianópolis</span>
                  <span>R$ 251,22</span>
                  <span>D</span>
                </li>
              </ul>
              <div className="box__history__actions">
                <a href="#">Todos os lançamentos</a>
                <a href="#">Lançamentos futuros</a>
              </div>
            </div>

            <div className="box__transactions__card">
              <h2>Cartões</h2>
              <img
                className="box__transactions__image"
                src="https://placehold.co/200x120"
                alt="Image"
              />
              <div className="box__transactions__actions">
                <button>Pagar</button>
                <a href="#">Ver fatura</a>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Home;
