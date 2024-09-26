import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const MenuPanel = () => {
    // const navigation = useNavigation();

    // const handleNavigateToQuizMode = () => {
    //     navigation.navigate('QuizModeScreen');
    // };

    // const handleNavigateToFight = () => {
    //     navigation.navigate('FightScreen');
    // };

    // const handleNavigateToStories = () => {
    //     navigation.navigate('LibraryScreen');
    // };

    // const handleNavigateToStickers = () => {
    //     navigation.navigate('StickersScreen');
    // };

    // const handleNavigateToLeaders = () => {
    //     navigation.navigate('LeaderboardScreen');
    // };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={''}> 
                <Icons type={'home'} />
            </TouchableOpacity>
            <Text style={styles.btnTxt}>Home</Text>
            </View>

            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={''}>
                <Icons type={'dairy'} />
            </TouchableOpacity>
            <Text style={styles.btnTxt}>Dairy</Text>
            </View>

            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={''}>
                <Icons type={'store'} />
            </TouchableOpacity>
            <Text style={styles.btnTxt}>Store</Text>
            </View>

            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={''}>
                <Icons type={'calendar'} />
            </TouchableOpacity>
            <Text style={styles.btnTxt}>Calendar</Text>
            </View>
        
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button} onPress={''}> 
                <Icons type={'recipes'} />
            </TouchableOpacity>
            <Text style={styles.btnTxt}>Recipes</Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#66c0f4',
        alignSelf: "center",
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 45,
        height: 45
    },
    btnTxt: {
        color: '#284c61',
        fontSize: 13,
        marginTop: 5
    }
});

export default MenuPanel;
