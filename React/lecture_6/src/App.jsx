import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://fakestoreapi.com/users");
      const data = response.data;
      setData(data);
    };
    getData();
  }, []);

  return (
    <div>
      <li>
        {data.map(user => {
          return user.name.firstname
        })}
      </li>
    </div>
  );
}

export default App;
