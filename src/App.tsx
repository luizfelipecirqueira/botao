import { Botao } from './components/Botao';

const App = () => {
  let textButton = "Clique no botão";

  const botaoEventAction = (txt: string) => {
    alert("Frase do app: " + txt);
  }

  return (
    <div>
      <Botao text={textButton} clickFn={botaoEventAction} />
    </div>
  );
}

export default App;