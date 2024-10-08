import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const MenuPanel = () => {
    const navigation = useNavigation();
    const [activeButton, setActiveButton] = useState('HomeScreen');

    const handleNavigate = (screen) => {
        setActiveButton(screen);
        navigation.navigate(screen);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const currentRoute = navigation.getState().routes[navigation.getState().index].name;
            setActiveButton(currentRoute);
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'HomeScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('HomeScreen')}>
                    <Icons type={'home'} />
                </TouchableOpacity>
                <Text style={styles.btnTxt}>Home</Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'DirectoryScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('DirectoryScreen')}>
                    <Icons type={'directory'} />
                </TouchableOpacity>
                <Text style={styles.btnTxt}>Directory</Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'DiaryScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('DiaryScreen')}>
                    <Icons type={'diary'} />
                </TouchableOpacity>
                <Text style={styles.btnTxt}>Diary</Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'CalendarScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('CalendarScreen')}>
                    <Icons type={'calendar'} />
                </TouchableOpacity>
                <Text style={styles.btnTxt}>Calendar</Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[styles.button, activeButton === 'RecipesScreen' && styles.activeButton]} 
                    onPress={() => handleNavigate('RecipesScreen')}>
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
        backgroundColor: '#b3dbff',
        alignSelf: "center",
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 45,
        height: 45,
        padding: 3
    },
    activeButton: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    btnTxt: {
        color: '#284c61',
        fontSize: 13,
        marginTop: 5
    }
});

export default MenuPanel;
