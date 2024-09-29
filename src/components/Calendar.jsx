import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CreateCalendar from './CreateCalendar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const storedEvents = await AsyncStorage.getItem('calendarEvents');
                if (storedEvents) {
                    setEvents(JSON.parse(storedEvents));
                }
            } catch (error) {
                console.error('Failed to load events from storage:', error);
            }
        };

        loadEvents();
    }, []);

    const saveEventsToStorage = async (events) => {
        try {
            await AsyncStorage.setItem('calendarEvents', JSON.stringify(events));
        } catch (error) {
            console.error('Failed to save events to storage:', error);
        }
    };

    const handleAddEvent = (eventDetails) => {
        const newEvents = [...events, eventDetails];
        setEvents(newEvents);
        saveEventsToStorage(newEvents);
    };

    return (
        <View style={styles.container}>
            <Button title="Add Event" onPress={() => setModalVisible(true)} />
            <CreateCalendar
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleAddEvent}
            />
            <Text style={styles.eventTitle}>Scheduled Events:</Text>
            <ScrollView>
                {events.map((event, index) => (
                    <View key={index} style={styles.eventCard}>
                        <Text style={styles.cardTitle}>Date: {event.date}</Text>
                        <Text>Time: {event.time}</Text>
                        <Text>Notes: {event.notes}</Text>
                        <Text>Periodicity: {event.periodicity}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    eventTitle: {
        fontSize: 18,
        marginVertical: 16,
        fontWeight: 'bold',
    },
    eventCard: {
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
});

export default Calendar;
