import { SafeAreaView, View } from "react-native"
import Taxonomy from "../components/Taxonomy"
import MenuPanel from "../components/MenuPanel"

const TaxonomyScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Taxonomy />
            <View style={styles.menu}>
                <MenuPanel />
            </View>
        </SafeAreaView>
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

export default TaxonomyScreen;