import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Modal, Alert, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateRecipe = ({ visible, onSubmit, onClose }) => {
    const [imageUri, setImageUri] = useState('');
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const [errors, setErrors] = useState({
        name: '',
        imageUri: '',
        ingredients: '',
        instructions: '',
    });

    useEffect(() => {
        if (visible) {
            setName(''),
            setIngredients(''),
            setInstructions(''),
            setImageUri('');
            setErrors({ name: '', imageUri: '', ingredients: '', instructions: '' });
        }
    }, [visible]);


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

        if (name.length < 2 || name.length > 30) {
            newErrors.name = 'Dish name must be between 2 and 30 characters';
            valid = false;
        }

        if (!imageUri) {
            newErrors.imageUri = 'An image is required';
            valid = false;
        }

        if (!ingredients) {
            newErrors.ingredients = 'Ingredients are required';
            valid = false;
        }

        if (!instructions) {
            newErrors.instructions = 'Instructions are required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const entry = {
                name,
                ingredients,
                instructions,
                imageUri,
            };
            onSubmit(entry);
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
                    <ScrollView style={styles.modalScroll}>
                        <Text style={styles.title}>Create Recipe</Text>
                        <TouchableOpacity style={styles.uploadBtn} onPress={handleUploadPhoto}>
                            <Text style={styles.btnText}>Upload Photo</Text>
                        </TouchableOpacity>
                        {errors.imageUri ? <Text style={styles.error}>{errors.imageUri}</Text> : null}

                        {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}

                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter name of the dish"
                        />
                        {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

                        <Text style={styles.label}>Ingredients</Text>
                        <TextInput
                            style={styles.textArea}
                            value={ingredients}
                            onChangeText={setIngredients}
                            multiline
                            numberOfLines={4}
                            placeholder="Enter ingredients"
                        />
                        {errors.ingredients ? <Text style={styles.error}>{errors.ingredients}</Text> : null}

                        <Text style={styles.label}>Instructions</Text>
                        <TextInput
                            style={styles.textArea}
                            value={instructions}
                            onChangeText={setInstructions}
                            multiline
                            numberOfLines={4}
                            placeholder="Enter instructions"
                        />
                        {errors.instructions ? <Text style={styles.error}>{errors.instructions}</Text> : null}

                        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
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
        marginTop: 15
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
        marginTop: 20,
        marginBottom: 30
    },
    submitBtn: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: '#284c61',
        marginTop: 20,
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


export default CreateRecipe;
