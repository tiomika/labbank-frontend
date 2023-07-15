import { useState } from "react";
import Header from "./Header";
import Text from "./Text";
import TextInput from "./TextInput";

function App() {
  // RENDERIZAÇÃO E RE-RENDERIZAÇÃO

  // SEMMMMMMMMPRE, SEEEEEEEEEEEEEEEEEEMPRE
  // retorna um array com dois negócios:
  // [0] -> O VALOR DO ESTADO
  // [1] -> UMA FUNÇÃO QUE ALTERA O VALOR DO ESTADO

  // const state1 = useState("");
  // const numeroDaConta = state1[0];
  // const setNumeroDaConta = state1[1];
  const [numeroDaConta, setNumeroDaConta] = useState("");

  const state2 = useState("");
  const senha = state2[0];
  const setSenha = state2[1];

  console.log(senha);

  // const listaDeFrutas = ['maçã', 'banana', 'pera']
  // const [fruta1, fruta2, fruta3] = listaDeFrutas

  return (
    <div>
      <Header />
      <Text element={"h1"}>Número da conta: {numeroDaConta}</Text>
      <TextInput
        onChangeText={setNumeroDaConta}
        label="Número da conta com dígito"
        type="text"
      />
      <TextInput onChangeText={setSenha} label="Senha" type="password" />
    </div>
  );
}

export default App;

/*
  const display = document.querySelector("h1")
  const input = document.querySelector("input")

  document.addEventListener("change", function(event) {
    display.innerText = event.target.value
  })
*/
