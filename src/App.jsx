import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DataLoader from "./components/DataLoader";

function App() {
  const [count, setCount] = useState(0);

  return <DataLoader />;
}

export default App;
