import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const Scoreboard = () => {
    const navigation = useNavigation();
    const [randomUsers, setRandomUsers] = useState([]);
    const [totalScore, setTotalScore] = useState(0);

    const generateRandomUsers = () => {
        const firstNames = ['John', 'Emily', 'Michael', 'Sarah', 'David', 'Jessica', 'Daniel'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];
    
        const users = [];
        for (let i = 1; i <= 7; i++) {
            const randomScore = Math.floor(Math.random() * 9001) + 1000;
            const correctAnswers = Math.floor(Math.random() * 100) + 1;
    
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
            users.push({
                id: i.toString(),
                username: `${firstName} ${lastName}`,
                score: randomScore,
                correctAnswers,
            });
        }
        setRandomUsers(users);
    };
    

    const loadTotalScore = async () => {
        try {
            const storedScore = await AsyncStorage.getItem('totalScore');
            if (storedScore !== null) {
                setTotalScore(parseInt(storedScore));
            }
        } catch (e) {
            console.error('Failed to load total score from storage.');
        }
    };

    useEffect(() => {
        generateRandomUsers();
        loadTotalScore();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.userRow}>
            <Text style={styles.username}>{item.username}</Text>
            <View style={{width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={styles.score}>Score: {item.score}</Text>
            <Text style={styles.correctAnswers}>Correct: {item.correctAnswers}/100</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('HomeScreen')}>
                <Icons type={'back'}/>
            </TouchableOpacity>
            <Text style={styles.header}>Scoreboard</Text>
            <Text style={styles.totalScore}>Your Total Score: {totalScore}</Text>
            <FlatList
                data={randomUsers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 70,
        paddingBottom: 140,
        backgroundColor: '#c1e5fa',
    },
    backIcon: {
        width: 60,
        height: 60,
        padding: 10,
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#284c61'
    },
    totalScore: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#284c61'
    },
    userRow: {
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    username: {
        fontSize: 18,
        fontWeight: '500',
        color: '#284c61',
        marginBottom: 12
    },
    score: {
        fontSize: 17,
        color: '#284c61'
    },
    correctAnswers: {
        fontSize: 17,
        color: '#284c61'
    },
});

export default Scoreboard;
