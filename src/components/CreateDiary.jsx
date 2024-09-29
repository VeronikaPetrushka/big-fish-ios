import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Modal } from 'react-native';
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

    useEffect(() => {
        // Reset all fields when the modal opens
        if (visible) {
            setDate(new Date());
            setTime('Morning');
            setFishingPlace('');
            setWeather('Clear');
            setNotes('');
            setImageUri('');
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

    const handleSubmit = () => {
        const entry = {
            date,
            time,
            fishingPlace,
            weather,
            notes,
            imageUri,
        };
        onSubmit(entry);
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
                        <Text style={styles.label}>Date:</Text>
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                        <Text style={styles.label}>Time:</Text>
                        <RNPickerSelect
                            onValueChange={handleTimeChange}
                            items={[
                                { label: 'Morning', value: 'Morning' },
                                { label: 'Day', value: 'Day' },
                                { label: 'Evening', value: 'Evening' },
                                { label: 'Night', value: 'Night' },
                            ]}
                        />
                        <Text style={styles.label}>Fishing Place:</Text>
                        <TextInput
                            style={styles.input}
                            value={fishingPlace}
                            onChangeText={setFishingPlace}
                            placeholder="Enter fishing place"
                        />
                        <Text style={styles.label}>Weather:</Text>
                        <RNPickerSelect
                            onValueChange={handleWeatherChange}
                            items={[
                                { label: 'Clear', value: 'Clear' },
                                { label: 'Darkly', value: 'Darkly' },
                                { label: 'Rain', value: 'Rain' },
                                { label: 'Snow', value: 'Snow' },
                            ]}
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
                        <Button title="Upload Photo" onPress={handleUploadPhoto} />
                        {imageUri ? (
                            <Image source={{ uri: imageUri }} style={styles.image} />
                        ) : null}
                        <Button title="Submit" onPress={handleSubmit} />
                        <Button title="Cancel" onPress={onClose} />
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
        height: '80%',
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalScroll: {
        width: '100%'
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textArea: {
        height: 80,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
    },
    image: {
        width: '100%',
        height: 150,
        marginTop: 16,
        borderRadius: 8,
    },
});

export default CreateDiary;
