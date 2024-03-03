import { useState } from "react";
import Button from "./Compponents/Button/Button";

function App() {
  // const [count, setCount] = useState(0);

  // const CorrectNumber = 41;
  // const ChooseNumber = [1, 2, 3, 234, 64, 123, 32, 34, 42, 41];
  // const choosecorrecctnumb = (Number) => {
  //   {
  //     Number === CorrectNumber
  //       ? alert("It is correct")
  //       : alert("Choose the correct Number");
  //   }
  // };

  // return ChooseNumber.map((item) => {
  //   return <button onClick={() => choosecorrecctnumb(item)}>{item}</button>;
  //   // <Button ricxvebi={item} OnclickFun={choosecorrecctnumb} />;
  // });

  const [input, SetInput] = useState("");
  const [output, SetOutput] = useState([]);
  // function ChangesInput(params) {
  //   SetInput(params.target.value);
  // }

  function AddedInput() {
    SetOutput((Something) => [...Something, input]);
  }

  return (
    <>
      <input type="text" onChange={(e) => SetInput(e.target.value)}></input>
      <button onClick={AddedInput}>Click me</button>
      <div>
        {output.map((item) => {
          return (
            <>
              <div style={{ display: "flex", gap: 15 }}>
                <li style={{ listStyle: "none" }}>{item}</li>
                <input type="checkbox" />
                <button>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
