import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from './Icons';

const DailyBonus = ({ visible, onClose, bonusAmount }) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.bonusTitle}>Congratulations!</Text>
                    <Text style={styles.bonusText}>You've received a bonus of:</Text>
                    <View style={styles.bonusContainer}>
                        <Text style={styles.bonusAmount}>{bonusAmount}</Text>
                        <View style={styles.iconContainer}>
                            <Icons type={'coin'}/>
                        </View>
                    </View>

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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    bonusTitle: {
        fontSize: 20,
        marginBottom: 20,
        color: '#284c61',
        fontWeight: '600'
    },
    bonusText: {
        fontSize: 19,
        marginBottom: 15,
        color: '#284c61',
    },
    bonusContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bonusAmount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#284c61',
    },
    iconContainer: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    closeButton: {
        padding: 10,
        width: 40,
        height: 40,
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default DailyBonus;
