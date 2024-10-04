import { View } from "react-native"
import Scoreboard from "../components/Scoreboard"
import MenuPanel from "../components/MenuPanel"

const ScoreboardScreen = () => {
    return (
        <View style={styles.container}>
            <Scoreboard />
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

export default ScoreboardScreen;