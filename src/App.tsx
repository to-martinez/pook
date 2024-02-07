import "./App.css";
import { Snowfall } from "react-snowfall";
import Prompt from "./components/Prompt";

function App() {
  return (
    <>
      <Snowfall color="#faafd3" snowflakeCount={200} />
      <div className="container">
        <Prompt />
      </div>
    </>
  );
}

export default App;
