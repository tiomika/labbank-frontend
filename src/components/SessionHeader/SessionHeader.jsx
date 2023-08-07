import { Container } from "../Containers";
import { Text } from "../Text";

import "./SessionHeader.css";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})

function SessionHeader() {
  return <div className="home__top-bar">
    <Container>
      <div className="home__top-bar__body">
        <Text>Olá, <Text element="span">estranho</Text></Text>
        <Text weight="light">{dateFormatter.format(new Date())}</Text>
      </div>

    </Container>
  </div>
}

export default SessionHeader;