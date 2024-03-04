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
  const [output, SetOutput] = useState([
    // {
    //   id: 1,
    //   text: "First_Task",
    //   complited: false,
    // },
  ]);

  function AddedInput() {
    SetOutput((anyvalue) => [
      ...anyvalue,
      { id: anyvalue.length + 1, text: input, complited: false },
    ]);
    localStorage.setItem("ToDo", JSON.stringify(output));
  }

  function Deltetask(ToDo_tasks) {
    SetOutput((anyvalue) =>
      anyvalue.filter((param) => param.text != ToDo_tasks)
    );
  }

  function ChekedToDo(ToDo_id) {
    SetOutput((anyvalue) =>
      anyvalue.map((param) => {
        return param.id === ToDo_id
          ? { ...param, complited: !param.complited }
          : param;
      })
    );
  }

  const [dark, SetDark] = useState(false)



  return (
    <>

      {/* <input type="text" onChange={(e) => SetInput(e.target.value)}></input>
      <button onClick={AddedInput}>Click me</button>
      <div>
        {output.map((todo) => {
          return (
            <>
              <div style={{ display: "flex", gap: 15 }}>
                <li
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complited ? "line-through " : "none",
                  }}
                >
                  {todo.text}
                </li>
                <input
                  type="checkbox"
                  checked={todo.complited}
                  onChange={() => ChekedToDo(todo.id)}
                />
                <button onClick={() => Deltetask(todo.text)}>Delete</button>
              </div>
            </>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
