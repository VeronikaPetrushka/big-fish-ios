import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Scoreboard = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const [totalScore, setTotalScore] = useState(0);

    const generateRandomUsers = () => {
        const users = [];
        for (let i = 1; i <= 7; i++) {
            const randomScore = Math.floor(Math.random() * 9001) + 1000;
            const correctAnswers = Math.floor(Math.random() * 100) + 1;
            users.push({
                id: i.toString(),
                username: `User${i}`,
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
            <Text style={styles.score}>Score: {item.score}</Text>
            <Text style={styles.correctAnswers}>Correct: {item.correctAnswers}/100</Text>
        </View>
    );

    return (
        <View style={styles.container}>
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
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#284c61'
    },
    totalScore: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#284c61'
    },
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        fontSize: 16,
        fontWeight: '500',
        color: '#284c61'
    },
    score: {
        fontSize: 16,
        color: '#284c61'
    },
    correctAnswers: {
        fontSize: 16,
        color: '#284c61'
    },
});

export default Scoreboard;
