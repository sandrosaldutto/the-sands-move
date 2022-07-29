import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Bedroom from "./components/Bedroom/Bedroom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Bedroom/>
      </BrowserRouter>
    </>
  );
}

export default App;
