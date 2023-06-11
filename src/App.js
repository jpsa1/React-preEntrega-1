import LabelBottomNavigation, { Category } from "./components/Category/Category";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ButtonAppBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <LabelBottomNavigation /> 
      <ItemListContainer saludo='Hola Mundo!'/>
    </div>
  );
}

export default App;
