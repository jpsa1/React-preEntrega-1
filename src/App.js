import CartWidget from "./components/CartWidget/CartWidget";
import LabelBottomNavigation, { Category } from "./components/Category/Category";
import ButtonAppBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <LabelBottomNavigation /> 
    </div>
  );
}

export default App;
