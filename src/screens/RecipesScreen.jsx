import { View } from "react-native"
import Recipes from "../components/Recipes"
import MenuPanel from "../components/MenuPanel"

const RecipesScreen = () => {
    return (
        <View style={styles.container}>
            <Recipes />
            <View style={styles.menu}>
                <MenuPanel />
            </View>
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    },

    menu: {
        position: 'absolute',
        width: "100%",
        bottom: 30
    }
}

export default RecipesScreen;