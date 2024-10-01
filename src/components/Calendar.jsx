import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CreateCalendar from './CreateCalendar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from './Icons';

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
        const newEvent = {
            ...eventDetails,
            id: events.length > 0 ? events[events.length - 1].id + 1 : 1,
        };
        const newEvents = [...events, newEvent];
        setEvents(newEvents);
        saveEventsToStorage(newEvents);
    };

    const handleDeleteEvent = (eventToDelete) => {
        const updatedEvents = events.filter(event => event.id !== eventToDelete.id);
        setEvents(updatedEvents);
        saveEventsToStorage(updatedEvents);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
                <Text style={styles.addBtnText}>Add Event</Text>
            </TouchableOpacity>
            <CreateCalendar
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleAddEvent}
            />
            <Text style={styles.eventTitle}>Scheduled Events</Text>
            <ScrollView>
                {events.map((event) => (
                    <View key={event.id} style={styles.eventCard}>
                        <Text style={styles.cardTitle}>Date: {event.date}</Text>
                        <Text style={styles.cardText}>Time: {event.time}</Text>
                        <Text style={styles.cardText}>Notes: {event.notes}</Text>
                        <Text style={styles.cardText}>Periodicity: {event.periodicity}</Text>
                        <TouchableOpacity 
                            style={styles.deleteBtn} 
                            onPress={() => handleDeleteEvent(event)}
                        >
                            <Icons type={'trash'}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
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
    eventTitle: {
        fontSize: 22,
        marginVertical: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#284c61'
    },
    eventCard: {
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#284c61'
    },
    cardText: {
        color: '#284c61',
        fontSize: 17
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
    },
    deleteBtn: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        position: 'absolute',
        top: 40,
        right: 20
    },
});

export default Calendar;
