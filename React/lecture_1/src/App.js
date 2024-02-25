import { Button } from "./Button";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
import Input from "./Input";
import Paragraph from "./Paragraph";

const userdata = [
  {
    id: 1,
    name: "Nika",
    Email: "Example@email.com",
  },
];

function App() {
  let names = "Hellow React";
  return (
    <div className="App">
      {/* <h1>
        {names}
      </h1>
      <Button />
      <Input />
      <Footer />
      <Paragraph /> */}

      <Button value='register'  background = 'blue' />
      <Button value='Buy' background = 'pink'  />
      <Button value='Sign Up' background = 'red' />



      {/* <Cards name={'salome'} Email={'Salome@gmail.com'} /> */}

      {/* {userdata.map((item) => {
        return (
          <>
            <li> {item.name} </li>
            <li> {item.Email} </li>
          </>
        );
      })} */}

      {
        userdata.map(item => {
          return (
            <>
            <Cards name={item.name} Email={item.Email} style = 'none' />
            </>
          )
        })
      }
    </div>
  );
}

export default App;
