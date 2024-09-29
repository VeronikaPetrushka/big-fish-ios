import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const CreateCalendar = ({ visible, onClose, onSubmit }) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [periodicity, setPeriodicity] = useState('None');

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setTime(currentTime);
    };

    const handleSubmit = () => {
        const eventDetails = {
            date: date.toLocaleDateString(),
            time: time.toLocaleTimeString(),
            notes,
            periodicity,
        };
        onSubmit(eventDetails);
        setNotes('');
        setPeriodicity('None');
        onClose();
    };

    return (
        <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={onClose}
        >            
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View styel={{width: '100%'}}>
                <Text style={styles.label}>Select Date:</Text>
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
                <Text style={styles.label}>Select Time:</Text>
                <DateTimePicker
                    value={time}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                />
                <Text style={styles.label}>Notes:</Text>
                <TextInput
                    style={styles.textArea}
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                    numberOfLines={4}
                    placeholder="Enter your notes here"
                />
                <Text style={styles.label}>Set Periodicity:</Text>
                <RNPickerSelect
                    onValueChange={setPeriodicity}
                    items={[
                        { label: 'None', value: 'None' },
                        { label: 'Hourly', value: 'Hourly' },
                        { label: '12 h', value: '12 h' },
                        { label: 'Daily', value: 'Daily' },
                    ]}
                    value={periodicity}
                />
                <Button title="Submit" onPress={handleSubmit} />
                <Button title="Cancel" onPress={onClose} color="red" />
                </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        height: '80%',
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
    },
    textArea: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    },
});

export default CreateCalendar;
