import { View } from "react-native"
import Directory from "../components/Directory"
import MenuPanel from "../components/MenuPanel"

const DirectoryScreen = () => {
    return (
        <View style={styles.container}>
            <Directory />
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

export default DirectoryScreen;