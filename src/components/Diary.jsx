import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateDiary from './CreateDiary';
import Icons from './Icons';

const Diary = () => {
    const [diaryEntries, setDiaryEntries] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [showInfo, setShowInfo] = useState({});

    useEffect(() => {
        const loadDiaryEntries = async () => {
            try {
                const storedEntries = await AsyncStorage.getItem('diaryEntries');
                if (storedEntries) {
                    const entries = JSON.parse(storedEntries).map(entry => ({
                        ...entry,
                        date: new Date(entry.date),
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
            const entriesWithDateAsString = entries.map(entry => ({
                ...entry,
                date: entry.date.toISOString(),
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

    const deleteDiaryEntry = (index) => {
        Alert.alert(
            'Delete Entry',
            'Are you sure you want to delete this entry?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    onPress: () => {
                        const updatedEntries = diaryEntries.filter((_, i) => i !== index);
                        setDiaryEntries(updatedEntries);
                        saveDiaryEntriesToStorage(updatedEntries);
                    },
                    style: 'destructive',
                },
            ]
        );
    };

    const toggleInfo = (index) => {
        setShowInfo((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
                <Text style={styles.addBtnText}>Add Diary Entry</Text>
            </TouchableOpacity>
            <ScrollView>
                {diaryEntries.map((entry, index) => (
                    <View key={index} style={styles.entryCard}>
                        {showInfo[index] ? (
                            <View style={{width: '100%', height: '80%'}}>
                                <ScrollView>
                                {entry.fishingPlace && <Text style={styles.cardTitle}>Fishing Place: {entry.fishingPlace}</Text>}
                                {entry.date && <Text style={styles.cardTitle}>Date: {entry.date.toLocaleDateString()}</Text>}
                                {entry.time && <Text style={styles.cardTitle}>Time: {entry.time}</Text>}
                                {entry.weather && <Text style={styles.cardTitle}>Weather: {entry.weather}</Text>}
                                {entry.notes && <Text style={styles.cardTitle}>Notes: {entry.notes}</Text>}
                                </ScrollView>
                            </View>
                        ) : (
                            entry.imageUri ? (
                                <Image source={{ uri: entry.imageUri }} style={styles.image} />
                            ) : null
                        )}

                        <View style={styles.btnsContainer}>
                        <TouchableOpacity
                            style={styles.infoButton}
                            onPress={() => toggleInfo(index)}
                        >
                            {showInfo[index] ? <Icons type={'back'}/> : <Icons type={'info'}/>}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteDiaryEntry(index)}
                        >
                            <Icons type={'trash'}/>
                        </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <CreateDiary visible={isModalVisible} onSubmit={addDiaryEntry} onClose={() => setModalVisible(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '110%',
        padding: 20,
        paddingTop: 40,
        paddingBottom: 200,
        backgroundColor: '#c1e5fa',
    },
    entryCard: {
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#fff',
        width: '100%',
        height: 320,
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontSize: 17,
        color: '#284c61',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    btnsContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infoButton: {
        width: 70,
        height: 70,
        padding: 10,
        alignItems: 'center',
    },
    deleteButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
    },
    addBtn: {
        width: 250,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        backgroundColor: '#284c61',
        alignSelf: 'center',
        borderRadius: 10
    },
    addBtnText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    }
});

export default Diary;
