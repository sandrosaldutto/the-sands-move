import './App.scss'
import { BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Bedroom from "./components/Bedroom/Bedroom"
import Office from "./components/Office/Office"
import Dining from "./components/Dining/Dining"
import Living from "./components/Living/Living"
import Storage from "./components/Storage/Storage"
import Kitchen from "./components/Kitchen/Kitchen"
import Miscelanious from "./components/Miscelanious/Miscelanious"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Bedroom/>
        <Living/>
      </BrowserRouter>
    </>
  );
}

export default App;
