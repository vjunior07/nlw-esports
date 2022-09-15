// Base do React: Componentes e Propriedades

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>{props.title}</button>
  );
}

function App() {
  return (
    <div>
      <h1>Hello World from e-Sports</h1>
      <br />

      <Button title="Send"/>
      <Button title="Comment"/>

    </div>
  );
}

export default App
