import { SafeAreaView, View } from "react-native"
import Quiz from "../components/Quiz"

const QuizScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Quiz />
        </SafeAreaView>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default QuizScreen;