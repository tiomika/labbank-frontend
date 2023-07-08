import Header from "./Header";
import Text from "./Text";

function App() {
  // POSSO RETORNAR:
  // strings
  // arrays
  // outros componentes
  // jsx
  // null ou undefined
  // boolean
  // numbers

  // NÃO POSSO RETORNAR
  // objetos

  return (
    <div>
      <Header />
      <Text element={"h3"}>Olá, mundo!!!!!!!!!!!!!</Text>
    </div>
  );
}

export default App;
