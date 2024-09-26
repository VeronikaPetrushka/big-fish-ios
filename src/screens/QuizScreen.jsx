import { SafeAreaView } from "react-native"
import Quiz from "../components/Quiz"

const QuizScreen = ({route}) => {
    const {timer, responses, mode} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <Quiz timer={timer} responses={responses} mode={mode}/>
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