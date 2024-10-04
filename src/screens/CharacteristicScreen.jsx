import { View } from "react-native"
import Characteristic from "../components/Characteristic"
import MenuPanel from "../components/MenuPanel"

const CharacteristicScreen = () => {
    return (
        <View style={styles.container}>
            <Characteristic />
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

export default CharacteristicScreen;