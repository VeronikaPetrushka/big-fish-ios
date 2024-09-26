import { SafeAreaView, View } from "react-native"
import QuizStart from "../components/QuizStart"

const QuizStartScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <QuizStart />
        </SafeAreaView>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default QuizStartScreen;