import { View } from "react-native"
import QuizStart from "../components/QuizStart"

const QuizStartScreen = () => {
    return (
        <View style={styles.container}>
            <QuizStart />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default QuizStartScreen;