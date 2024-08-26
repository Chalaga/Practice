// import { Input } from "./Input/Input";

import axios from "axios";
import { useEffect, useState } from "react";
import { UserPropsType } from "./Types/Common";
import Button from "./Button/Button";

function App() {
  const [User, SetUser] = useState<UserPropsType[]>([]);
  const [PopUp, SetpopUp] = useState(false);

  const HandlePopUp = () => {
    SetpopUp(!PopUp)
  }

  useEffect(() => {
    const FetchedData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      SetUser(data);
    };
    FetchedData();
  }, []);

  //     return (
  //   <Input
  //     width={200}
  //     height={35}
  //     rounded={15}
  //     backgroundColor="red"
  //     textColor="blue"
  //     placeholder="Hello from the TypeScript"
  //     type="text"
  //   />
  // );

  return (
    <div>
      <Button
        width={100}
        height={50}
        text={"Click for revial"}
        backdraoundcolor={"black"}
        textcolor={"white"}
        Onclick={HandlePopUp}
      />

      {PopUp ? (
        <>
        {User.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
        </>
      ):null}

    </div>
  );
}

export default App;
