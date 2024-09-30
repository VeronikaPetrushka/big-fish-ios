import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Modal, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateDiary = ({ visible, onSubmit, onClose }) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('Morning');
    const [fishingPlace, setFishingPlace] = useState('');
    const [weather, setWeather] = useState('Clear');
    const [notes, setNotes] = useState('');
    const [imageUri, setImageUri] = useState('');

    const [errors, setErrors] = useState({
        fishingPlace: '',
        imageUri: '',
        time: '',
        weather: '',
    });

    useEffect(() => {
        if (visible) {
            setDate(new Date());
            setTime('Morning');
            setFishingPlace('');
            setWeather('Clear');
            setNotes('');
            setImageUri('');
            setErrors({ fishingPlace: '', imageUri: '', time: '', weather: '' });
        }
    }, [visible]);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const handleTimeChange = (value) => {
        setTime(value);
    };

    const handleWeatherChange = (value) => {
        setWeather(value);
    };

    const handleUploadPhoto = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.assets) {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (fishingPlace.length < 2 || fishingPlace.length > 30) {
            newErrors.fishingPlace = 'Fishing place must be between 2 and 30 characters';
            valid = false;
        }

        if (!imageUri) {
            newErrors.imageUri = 'An image is required';
            valid = false;
        }

        if (!time) {
            newErrors.time = 'Time is required';
            valid = false;
        }

        if (!weather) {
            newErrors.weather = 'Weather is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const entry = {
                date,
                time,
                fishingPlace,
                weather,
                notes,
                imageUri,
            };
            onSubmit(entry);
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
                    <ScrollView style={styles.modalScroll}>
                        <Text style={styles.title}>Create Diary</Text>
                        <TouchableOpacity style={styles.uploadBtn} onPress={handleUploadPhoto}>
                            <Text style={styles.btnText}>Upload Photo</Text>
                        </TouchableOpacity>
                        {errors.imageUri ? <Text style={styles.error}>{errors.imageUri}</Text> : null}

                        {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}

                        <View style={styles.dateContainer}>
                            <Text style={styles.label}>Date:</Text>
                            <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                            />

                        </View>

                        <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Time:</Text>
                        <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            onValueChange={handleTimeChange}
                            items={[
                                { label: 'Morning', value: 'Morning' },
                                { label: 'Day', value: 'Day' },
                                { label: 'Evening', value: 'Evening' },
                                { label: 'Night', value: 'Night' },
                            ]}
                        />
                        </View>
                        </View>
                        {errors.time ? <Text style={styles.error}>{errors.time}</Text> : null}

                        <Text style={styles.label}>Fishing Place:</Text>
                        <TextInput
                            style={styles.input}
                            value={fishingPlace}
                            onChangeText={setFishingPlace}
                            placeholder="Enter fishing place"
                        />
                        {errors.fishingPlace ? <Text style={styles.error}>{errors.fishingPlace}</Text> : null}

                        <View style={styles.pickerContainer}>
                        <Text style={styles.label}>Weather:</Text>
                        <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            onValueChange={handleWeatherChange}
                            items={[
                                { label: 'Clear', value: 'Clear' },
                                { label: 'Darkly', value: 'Darkly' },
                                { label: 'Rain', value: 'Rain' },
                                { label: 'Snow', value: 'Snow' },
                            ]}
                        />
                        </View>
                        </View>
                        {errors.weather ? <Text style={styles.error}>{errors.weather}</Text> : null}

                        <Text style={styles.label}>Notes:</Text>
                        <TextInput
                            style={styles.textArea}
                            value={notes}
                            onChangeText={setNotes}
                            multiline
                            numberOfLines={4}
                            placeholder="Enter your notes here"
                        />

                        <TouchableOpacity style={styles.uploadBtn} onPress={handleSubmit}>
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                    </ScrollView>
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
        height: '75%',
        padding: 20,
        paddingTop: 25,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalScroll: {
        width: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#284c61',
        textAlign: 'center'
    },
    label: {
        fontSize: 18,
        color: '#284c61',
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30
    },
    pickerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 15,
        marginBottom: 15
    },
    pickerWrapper: {
        width: '100%',
        marginTop: 10
    },
    input: {
        height: 40,
        borderColor: '#284c61',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 5,
        color: '#284c61',
        marginTop: 10,
        fontSize: 17,
    },
    textArea: {
        height: 80,
        borderColor: '#284c61',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
        color: '#284c61',
        marginTop: 10,
        fontSize: 17,
    },
    image: {
        width: '100%',
        height: 150,
        marginTop: 16,
        borderRadius: 8,
    },
    error: {
        color: 'red',
        fontSize: 14,
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
        width: '100%'
    },
};


export default CreateDiary;
