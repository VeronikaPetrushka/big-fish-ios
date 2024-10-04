import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CreateCalendar from './CreateCalendar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from './Icons';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [timers, setTimers] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const storedEvents = await AsyncStorage.getItem('calendarEvents');
                if (storedEvents) {
                    const parsedEvents = JSON.parse(storedEvents);
                    setEvents(parsedEvents);
                    setupTimers(parsedEvents);
                }
            } catch (error) {
                console.error('Failed to load events from storage:', error);
            }
        };

        loadEvents();
    }, []);

    useEffect(() => {
        const checkExpiredEventsTimer = setInterval(() => {
            checkExpiredEvents();
        }, 60 * 1000);

        return () => clearInterval(checkExpiredEventsTimer);
    }, [events]);

    const checkExpiredEvents = () => {
        const now = new Date().getTime();
        setEvents(prevEvents => {
            return prevEvents.map(event => {
                const eventDateTime = new Date(event.dateTime).getTime();
                if (eventDateTime <= now && !event.expired) {
                    console.log(`Event "${event.notes}" has expired. Marking it as expired.`);
                    return { ...event, expired: true };
                }
                return event;
            });
        });
    };

    const saveEventsToStorage = async (events) => {
        try {
            await AsyncStorage.setItem('calendarEvents', JSON.stringify(events));
        } catch (error) {
            console.error('Failed to save events to storage:', error);
        }
    };

    const handleAddEvent = (eventDetails) => {
        const [month, day, year] = eventDetails.date.split('/').map(Number);
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const formattedDateTimeString = `${formattedDate}T${eventDetails.time}`;
    
        const eventDateTime = new Date(formattedDateTimeString);
        
        if (isNaN(eventDateTime.getTime())) {
            console.error('Invalid date/time:', formattedDateTimeString);
            return;
        }
    
        const newEvent = {
            ...eventDetails,
            dateTime: eventDateTime.toISOString(),
            id: events.length > 0 ? events[events.length - 1].id + 1 : 1,
            expired: false,
        };
    
        const newEvents = [...events, newEvent];
        setEvents(newEvents);
        saveEventsToStorage(newEvents);
        setupTimers(newEvents);
    };
    
    

    const handleDeleteEvent = (eventToDelete) => {
        const updatedEvents = events.filter(event => event.id !== eventToDelete.id);
        setEvents(updatedEvents);
        saveEventsToStorage(updatedEvents);
        clearTimersForEvent(eventToDelete.id);
    };

    const setupTimers = (events) => {
        const now = new Date().getTime();
        
        events.forEach(event => {
            const eventDateTime = new Date(event.dateTime).getTime();
            
            if (eventDateTime <= now) {
                console.log(`Event "${event.notes}" has expired. Marking it as expired.`);
                setEvents(prevEvents => 
                    prevEvents.map(ev => 
                        ev.id === event.id ? { ...ev, expired: true } : ev
                    )
                );
                return;
            }
    
            if (event.periodicity !== 'None') {
                const interval = getInterval(event.periodicity);
                console.log(`Setting up a ${event.periodicity} timer for event: ${event.notes}`);
    
                const timer = setInterval(() => {
                    const currentTime = new Date().getTime();
                    if (eventDateTime <= currentTime) {
                        console.log(`Timer for event "${event.notes}" triggered.`);
                        clearInterval(timer);
                        setEvents(prevEvents => 
                            prevEvents.map(ev => 
                                ev.id === event.id ? { ...ev, expired: true } : ev
                            )
                        );
                    } else {
                        const eventToCheck = events.find(ev => ev.id === event.id);
                        if (eventToCheck && !eventToCheck.expired) {
                            showAlert(event);
                        }
                    }
                }, interval);
    
                console.log('Status expired: ', event.expired);
                setTimers(prevTimers => [...prevTimers, { timer, eventId: event.id }]);
            }
        });
    };
    
    

    const clearTimersForEvent = (eventId) => {
        timers.forEach(({ eventId: id, timer }) => {
            if (id === eventId) {
                clearInterval(timer);
                console.log(`Cleared timer for event: ${eventId}`);
            }
        });
        setTimers(prevTimers => prevTimers.filter(({ eventId: id }) => id !== eventId));
    };

    const showAlert = (event) => {
        Alert.alert(
            'Event Alert',
            event.notes,
            [{ text: 'Close', onPress: () => console.log('Alert closed') }],
            { cancelable: false }
        );
    };

    const getInterval = (periodicity) => {
        switch (periodicity) {
            case 'Hourly':
                return 60 * 60 * 1000;
            case '12 h':
                return 12 * 60 * 60 * 1000;
            case 'Daily':
                return 24 * 60 * 60 * 1000;
            default:
                return null;
        }
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
                        <ScrollView style={{height: '100%', width: '100%'}}>
                        {event.expired && <Text style={styles.expiredText}>Overdue</Text> || <Text style={styles.nonExpiredText}>Due</Text>}
                            <Text style={styles.cardTitle}>Date: {event.date}</Text>
                            <Text style={styles.cardText}>Time: {event.time}</Text>
                            <Text style={styles.cardText}>Notes: {event.notes}</Text>
                            <Text style={styles.cardText}>Periodicity: {event.periodicity}</Text>
                        </ScrollView>
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
        height: '100%',
        padding: 20,
        paddingTop: 70,
        paddingBottom: 150,
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
        fontSize: 17,
        width: 255
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
        right: 20,
        zIndex: 10
    },
    expiredText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
        textAlign: 'center'
    },
    nonExpiredText: {
        color: '#284c61',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default Calendar;
