import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"

const Quiz = () => {
    const [toggleTimer, setToggleTimer] = useState(false);
    const [toggleResponses, setToggleResponses] = useState(false);
    const [toggleWeight, setToggleWeight] = useState(false);

    const handleToggleTimer = () => {
        setToggleTimer(!toggleTimer);
    };

    const handleToggleResponses = () => {
        setToggleResponses(!toggleResponses);
    };

    const handleToggleWeight = () => {
        setToggleWeight(!toggleWeight);
    };

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/background/home.png')}/>
            </View>

            <View style={styles.regulatorContainer}>
                <Text style={styles.regulatorTxt}>On time</Text>
                <TouchableOpacity style={styles.toggleContainer} onPress={handleToggleTimer}>
                    { toggleTimer ?
                    <View style={{width: '100%', height: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={[styles.toggle, toggleTimer ? styles.toggleRight : styles.toggleLeft]}>
                        <Text style={[styles.toggleTxt, toggleTimer ? styles.toggleTxtRight : styles.toggleTxtLeft]}>No</Text>
                    </View>
                    <View style={[styles.toggleNone]}>
                        <Text style={[styles.toggleTxt]}>Yes</Text>
                    </View>
                    </View>
                    :
                    <View style={{width: '100%', height: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={[styles.toggleNone]}>
                        <Text style={[styles.toggleTxt]}>No</Text>
                    </View>
                    <View style={[styles.toggle, toggleTimer ? styles.toggleRight : styles.toggleLeft]}>
                        <Text style={[styles.toggleTxt, toggleTimer ? styles.toggleTxtRight : styles.toggleTxtLeft]}>Yes</Text>
                    </View>
                    </View>
                    }
                </TouchableOpacity>
            </View>

            <View style={styles.regulatorContainer}>
                <Text style={styles.regulatorTxt}>Number of responses</Text>
                <TouchableOpacity style={styles.toggleContainer} onPress={handleToggleResponses}>
                { toggleResponses ?
                    <View style={{width: '100%', height: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={[styles.toggle, toggleResponses ? styles.toggleRight : styles.toggleLeft]}>
                        <Text style={[styles.toggleTxt, toggleResponses ? styles.toggleTxtRight : styles.toggleTxtLeft]}>4</Text>
                    </View>
                    <View style={[styles.toggleNone]}>
                        <Text style={[styles.toggleTxt]}>6</Text>
                    </View>
                    </View>
                    :
                    <View style={{width: '100%', height: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={[styles.toggleNone]}>
                        <Text style={[styles.toggleTxt]}>4</Text>
                    </View>
                    <View style={[styles.toggle, toggleResponses ? styles.toggleRight : styles.toggleLeft]}>
                        <Text style={[styles.toggleTxt, toggleResponses ? styles.toggleTxtRight : styles.toggleTxtLeft]}>6</Text>
                    </View>
                    </View>
                    }
                </TouchableOpacity>
            </View>

            <View style={styles.regulatorContainer}>
                <Text style={styles.regulatorTxt}>Weight</Text>
                <TouchableOpacity style={styles.toggleContainer} onPress={handleToggleWeight}>
                { toggleWeight ?
                    <View style={{width: '100%', height: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={[styles.toggle, toggleWeight ? styles.toggleRight : styles.toggleLeft]}>
                        <Text style={[styles.toggleTxt, toggleWeight ? styles.toggleTxtRight : styles.toggleTxtLeft]}>Low</Text>
                    </View>
                    <View style={[styles.toggleNone]}>
                        <Text style={[styles.toggleTxt]}>High</Text>
                    </View>
                    </View>
                    :
                    <View style={{width: '100%', height: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={[styles.toggleNone]}>
                        <Text style={[styles.toggleTxt]}>Low</Text>
                    </View>
                    <View style={[styles.toggle, toggleWeight ? styles.toggleRight : styles.toggleLeft]}>
                        <Text style={[styles.toggleTxt, toggleWeight ? styles.toggleTxtRight : styles.toggleTxtLeft]}>High</Text>
                    </View>
                    </View>
                    }
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Start</Text>
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

    regulatorContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    regulatorTxt: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 7
    },

    toggleContainer: {
        width: 170,
        height: 50,
        alignItems: 'center',
        padding: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#284c61',
        marginBottom: 15,
        flexDirection: 'row'
    },

    toggle: {
        width: '49%',
        height: '100%',
        borderRadius: 30,
        backgroundColor: '#284c61',
        alignItems: 'center',
        justifyContent: 'center'
    },

    toggleNone: {
        width: '49%',
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    toggleRight: {
        alignSelf: 'flex-end',
    },

    toggleLeft: {
        alignSelf: 'flex-start',
    },

    toggleTxt: {
        fontSize: 18,
        color: '#284c61'
    },

    toggleTxtRight: {
        color: 'white'
    },

    toggleTxtLeft: {
        color: 'white'
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
        marginTop: 20
    },

    btnTxt: {
        fontSize: 20,
        color: '#284c61',
    }
});

export default Quiz;