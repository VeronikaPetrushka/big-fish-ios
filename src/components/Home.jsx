import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/background/home.png')}/>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('QuizScreen')}>
                <Text style={styles.btnTxt}>Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>About us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Scoreboard</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '110%',
        backgroundColor: '#c1e5fa',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 30,
        paddingTop: 80
    },

    imageContainer: {
        width: "100%",
        height: 270,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 70,
        borderRadius: 12,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    btn: {
        padding: 12, 
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#284c61',
        borderRadius: 12,
        marginBottom: 10
    },

    btnTxt: {
        fontSize: 20,
        color: '#284c61',
    }
});

export default Home;