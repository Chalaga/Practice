// App.jsx
import { useState } from "react";
import Card from "./Card/Card";

function App() {
  const [colorIndex, setColorIndex] = useState(-1);

  const buttonValues = ["1", "2", "3", "4", "5"]
  
  const handleColorChange = (index) => {
    setColorIndex(index);
  };

  return (
    <>
      <Card
        buttonValues={buttonValues}
        bckcolor={colorIndex}
        handleColorChange={handleColorChange}
      />
    </>
  );
}

export default App;
