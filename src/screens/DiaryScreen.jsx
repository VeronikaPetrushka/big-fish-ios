import { View } from "react-native"
import Diary from "../components/Diary"
import MenuPanel from "../components/MenuPanel"

const DiaryScreen = () => {
    return (
        <View style={styles.container}>
            <Diary />
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

export default DiaryScreen;