import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icons from './Icons';

const AboutModal = ({ visible, onClose }) => {

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <ScrollView style={styles.ScrollView}>
                    <Text style={styles.modalText}>
                    Welcome to <Text style={styles.bold}>Big Catch: Fish Blog !</Text>
                    </Text>
                    <Text style={styles.modalText}>
                    This is your reliable companion in the world of fishing !
                    </Text>
                    <Text style={styles.modalText}>
                    We created this app to help anglers enjoy their hobby and improve their skills. In our app, you'll find a wealth of useful features that will make your fishing experience even more interesting and effective.
                    </Text>
                    <Text style={styles.modalText}>
                    <Text style={styles.bold}>In Big Catch: Fish Blog,</Text> you can:
                    </Text>
                    <Text style={styles.modalText}>
                    - Read interesting articles about fishing and its secrets.
                    </Text>
                    <Text style={styles.modalText}>
                    - Keep a journal to track your catches and achievements.
                    </Text>
                    <Text style={styles.modalText}>
                    - Use the calendar to plan your fishing trips.
                    </Text>
                    <Text style={styles.modalText}>
                    - Shop at the fishing store.
                    </Text>
                    <Text style={styles.modalText}>
                    - Participate in quizzes and test your knowledge.
                    </Text>
                    <Text style={styles.modalText}>
                    - Discover recipes to prepare delicious dishes from your catches.
                    </Text>
                    <Text style={styles.modalText}>
                    Thank you for choosing us! We hope our app will be helpful and bring you a lot of joy during your fishing adventures.
                    </Text>
                    </ScrollView>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Icons type={'close'}/>
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
    ScrollView: {

    },
    modalContent: {
        width: '90%',
        height: '75%',
        padding: 20,
        paddingTop: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalText: {
        fontSize: 19,
        marginBottom: 10,
        textAlign: 'center',
        color: '#284c61'
    },
    bold: {
        fontWeight: 'bold'
    },
    closeButton: {
        padding: 10,
        width: 40,
        height: 40,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    admiral: {
        width: 150,
        height: 140,
        marginBottom: 20,
        alignSelf: 'center'
    }
});

export default AboutModal;
