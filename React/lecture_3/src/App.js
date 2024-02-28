import { useState } from "react";
import Button from "./Components/Button/Button";
import Images from "./Images/Images";
import Card from "./Card/Card";

function App() {
  // const [count, setcounter] = useState(0);

  // const increasefun = () => {
  //   setcounter(count + 1)
  // }

  // const dicresefun = () => {
  //   if (count === 0 ) {
  //     return 0
  //   }
  //   setcounter(count - 1)

  // }

  // const resetfun = () => {
  //   setcounter(0)

  // }

  const [checknumber, SetCheckNumber] = useState(0);

  return (
    <div className="App">
      {/* <Button type="Resolve" />
      <Button type="Reject" />
      <Images sorce='https://as1.ftcdn.net/v2/jpg/05/78/49/88/1000_F_578498891_sxM567ugz3KOwGP4VnOGmNczb88SA4em.jpg' width={200} /> */}

      {/* <h6>counter: {count}</h6>
      <button onClick={increasefun}>Increase</button>
      <button onClick={resetfun}>Reset</button>
      <button onClick={dicresefun}>Dicrease</button> */}

      {checknumber === 0 ? (
        <>
              <button
        onClick={() => {
          SetCheckNumber(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          SetCheckNumber(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          SetCheckNumber(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          SetCheckNumber(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          SetCheckNumber(5);
        }}
      >
        5
      </button>
        </>
      ) : (
        <Card initialvalue={checknumber} />
      )}

    </div>
  );
}

export default App;
