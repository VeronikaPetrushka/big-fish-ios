import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import CreateDiary from './CreateDiary';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Diary = () => {
    const [diaryEntries, setDiaryEntries] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const loadDiaryEntries = async () => {
            try {
                const storedEntries = await AsyncStorage.getItem('diaryEntries');
                if (storedEntries) {
                    const entries = JSON.parse(storedEntries).map(entry => ({
                        ...entry,
                        date: new Date(entry.date), // Convert the date string back to a Date object
                    }));
                    setDiaryEntries(entries);
                }
            } catch (error) {
                console.error('Failed to load diary entries from storage:', error);
            }
        };

        loadDiaryEntries();
    }, []);

    const saveDiaryEntriesToStorage = async (entries) => {
        try {
            // Convert the date back to string when saving
            const entriesWithDateAsString = entries.map(entry => ({
                ...entry,
                date: entry.date.toISOString(), // Convert Date object to ISO string
            }));
            await AsyncStorage.setItem('diaryEntries', JSON.stringify(entriesWithDateAsString));
        } catch (error) {
            console.error('Failed to save diary entries to storage:', error);
        }
    };

    const addDiaryEntry = (entry) => {
        const updatedEntries = [...diaryEntries, entry];
        setDiaryEntries(updatedEntries);
        saveDiaryEntriesToStorage(updatedEntries);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Add Diary Entry" onPress={() => setModalVisible(true)} />
            <ScrollView>
                {diaryEntries.map((entry, index) => (
                    <View key={index} style={styles.entryCard}>
                        <Text style={styles.cardTitle}>Fishing Place: {entry.fishingPlace}</Text>
                        <Text>Date: {entry.date.toLocaleDateString()}</Text>
                        <Text>Time: {entry.time}</Text>
                        <Text>Weather: {entry.weather}</Text>
                        <Text>Notes: {entry.notes}</Text>
                        {entry.imageUri ? <Image source={{ uri: entry.imageUri }} style={styles.image} /> : null}
                    </View>
                ))}
            </ScrollView>

            <CreateDiary visible={isModalVisible} onSubmit={addDiaryEntry} onClose={() => setModalVisible(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    entryCard: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginTop: 8,
    },
});

export default Diary;
