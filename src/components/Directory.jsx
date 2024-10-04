import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';
import Icons from "./Icons";

const Directory = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Directory</Text>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/directory/directory.png')} style={styles.image}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CharacteristicScreen')}>
                <Text style={styles.btnText}>General characteristics</Text>
                <View style={styles.icon}>
                    <Icons type={'fish-1'}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TaxonomyScreen')}>
                <Text style={styles.btnText}>Taxonomy</Text>
                <View style={styles.icon}>
                    <Icons type={'fish-2'}/>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 70,
        width: '100%',
        height: '100%',
        backgroundColor: '#c1e5fa',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#1e3949'
    },
    imgContainer: {
        width: '100%',
        height: 280,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    btn: {
        padding: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: '#305b75',
        flexDirection: 'row',
    },
    btnText: {
        fontSize: 22,
        color: 'white',
        fontWeight: '600'
    },
    icon: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    }
})

export default Directory;