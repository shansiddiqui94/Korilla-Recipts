import "./App.css";
import Records from "./components/Records";
import Receipt from "./components/Receipt";
import { useState } from "react";

function App() {
  const [hunger, sethunger] = useState(Records);
  return (
    <div className="App-food">
      {hunger.map((food, index) => {
        return <Receipt {...food} key={index} />;
      })}
    </div>
  );
}

export default App;
