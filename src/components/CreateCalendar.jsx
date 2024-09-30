import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Modal, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const CreateCalendar = ({ visible, onClose, onSubmit }) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [periodicity, setPeriodicity] = useState('None');
    const [errors, setErrors] = useState({
        periodicity: '',
        notes: '',
        date: '',
        time: '',
    });

    useEffect(() => {
        if (visible) {
            setDate(new Date());
            setTime(new Date());
            setNotes('');
            setPeriodicity('None');
            setErrors({ periodicity: '', notes: '', date: '', time: '' });
        }
    }, [visible]);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setTime(currentTime);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!notes || notes.length < 2 || notes.length > 100) {
            newErrors.notes = 'Notes must be between 2 and 100 characters';
            valid = false;
        }

        if (!periodicity) {
            newErrors.periodicity = 'Periodicity is required';
            valid = false;
        }

        if (!date) {
            newErrors.date = 'A valid date is required';
            valid = false;
        }

        if (!time) {
            newErrors.time = 'A valid time is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const eventDetails = {
                date: date.toLocaleDateString(),
                time: time.toLocaleTimeString(),
                notes,
                periodicity,
            };
            onSubmit(eventDetails);
            onClose();
        } else {
            Alert.alert('Validation Error', 'Please correct the errors before submitting.');
        }
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
                <Text style={styles.title}>Create Calendar</Text>

                <View style={styles.dateContainer}>
                    <Text style={styles.label}>Select Date:</Text>
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                    {errors.date ? <Text style={styles.error}>{errors.date}</Text> : null}
                </View>

                <View style={styles.dateContainer}>
                    <Text style={styles.label}>Select Time:</Text>
                    <DateTimePicker
                        value={time}
                        mode="time"
                        display="default"
                        onChange={handleTimeChange}
                    />
                    {errors.time ? <Text style={styles.error}>{errors.time}</Text> : null}
                    </View>

                    <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Set Periodicity:</Text>
                    <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            onValueChange={setPeriodicity}
                            items={[
                                { label: 'None', value: 'None' },
                                { label: 'Hourly', value: 'Hourly' },
                                { label: '12 h', value: '12 h' },
                                { label: 'Daily', value: 'Daily' },
                            ]}
                            value={periodicity}
                        />
                    </View>
                    </View>
                    {errors.periodicity ? <Text style={styles.error}>{errors.periodicity}</Text> : null}

                    <Text style={styles.label}>Notes:</Text>
                    <TextInput
                        style={styles.textArea}
                        value={notes}
                        onChangeText={setNotes}
                        multiline
                        numberOfLines={4}
                        placeholder="Enter your notes here"
                    />
                    {errors.notes ? <Text style={styles.error}>{errors.notes}</Text> : null}

                        <TouchableOpacity style={styles.uploadBtn} onPress={handleSubmit}>
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>                    
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
        height: '65%',
        padding: 20,
        paddingTop: 25,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#284c61',
        textAlign: 'center',
        marginBottom: 30
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 15
    },
    pickerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 15,
        marginBottom: 15
    },
    label: {
        fontSize: 18,
        color: '#284c61',
    },
    textArea: {
        height: 100,
        borderColor: '#284c61',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
        color: '#284c61',
        marginTop: 10,
        fontSize: 17,
        marginBottom: 5,
        color: '#284c61',
    },
    error: {
        color: 'red',
        fontSize: 14,
    },
    pickerWrapper: {
        width: '100%',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    uploadBtn: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: '#284c61',
        marginTop: 20
    },
    cancelBtn: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#407a9c',
        marginTop: 5
    },
    btnText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600'
    }
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 17,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#284c61',
        borderRadius: 5,
        color: '#284c61',
        width: '100%',
    }
};

export default CreateCalendar;
