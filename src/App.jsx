import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";
import HappyArray from "./Components/HappyArray/HappyArray";

function App() {
  return (
    <div className="App">
    <AppRouter/>
    <NavLink to="newhappy" >New</NavLink>
    </div>
  );
}

export default App;
