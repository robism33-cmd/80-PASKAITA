import { useState } from "react";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import UsersList from "./components/UsersList/UsersList";
import CatImage from "./components/CatImage/CatImage";
import DogImage from "./components/DogImage/DogImage";
import WifeImage from "./components/WifeImage/WifeImage";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <section>
        <h2>Counter</h2>
        <p>Skaičius: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      </section>

      <hr />

      <section>
        <h2>Vardas</h2>
        <p>Įvestas vardas: {name}</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Įvesk vardą"
        />
      </section>

      <hr />

      <DarkModeSwitch />

      <hr />

      <UsersList />
      <hr />
      <CatImage />
      <hr />
      <DogImage />
      <hr />
      <WifeImage />
    </div>
  );
}

export default App;
