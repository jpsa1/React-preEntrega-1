import LabelBottomNavigation from "../../components/Category/Category"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import ButtonAppBar from "../../components/NavBar/NavBar"


const Home = () => {

    return(
        <div>
            <ButtonAppBar />
            <LabelBottomNavigation /> 
            <ItemListContainer saludo='Hola Mundo!'/>
        </div>
    )
}

export default Home