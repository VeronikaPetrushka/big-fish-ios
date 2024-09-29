import { SafeAreaView, View } from "react-native"
import Calendar from "../components/Calendar"
import MenuPanel from "../components/MenuPanel"

const CalendarScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Calendar />
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

export default CalendarScreen;