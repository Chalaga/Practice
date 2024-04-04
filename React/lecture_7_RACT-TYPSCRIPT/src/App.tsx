import { Input } from "./Input/Input";

function App() {
      return (
    <Input
      width={200}
      height={35}
      rounded={15}
      backgroundColor="red"
      textColor="blue"
      placeholder="Hello from the TypeScript"
      type="text"
    />
  );
}

export default App;
