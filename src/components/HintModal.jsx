import React, {useState, useEffect} from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from './Icons';

const HintModal = ({ visible, onClose, onUseHint, onHintsUsed }) => {
    const [totalScore, setTotalScore] = useState(0);
    const [hintsAmount, setHintsAmount] = useState(0);

    useEffect(() => {
        if (visible) {
            const fetchStats = async () => {
                try {
                    const storedScore = await AsyncStorage.getItem('totalScore');
                    const storedHints = await AsyncStorage.getItem('hintsAmount');
                    if (storedScore) {
                        setTotalScore(parseInt(storedScore));
                    }
                    if (storedHints) {
                        setHintsAmount(parseInt(storedHints));
                    }
                } catch (error) {
                    console.error('Failed to load totalScore or hintsAmount from storage:', error);
                }
            };
            fetchStats();
        }
    }, [visible]);
    

    const handlePurchase = async (hintCost, hintCount) => {
        if (totalScore >= hintCost) {
            const newTotalScore = totalScore - hintCost;
            const newHintsAmount = hintsAmount + hintCount;

            setTotalScore(newTotalScore);
            setHintsAmount(newHintsAmount);

            try {
                await AsyncStorage.setItem('totalScore', newTotalScore.toString());
                await AsyncStorage.setItem('hintsAmount', newHintsAmount.toString());
            } catch (error) {
                console.error('Failed to store totalScore or hintsAmount in storage:', error);
            }
        } else {
            alert("Insufficient score to purchase this hint.");
        }
    };

    const useHint = async () => {
        if (hintsAmount > 0) {
            const newHintsAmount = hintsAmount - 1;
            setHintsAmount(newHintsAmount);

            try {
                await AsyncStorage.setItem('hintsAmount', newHintsAmount.toString());
            } catch (error) {
                console.error('Failed to store hintsAmount in storage:', error);
            }
            
            onUseHint(); 
            onHintsUsed();
            onClose();
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

                    <ScrollView>
                    <Text style={styles.modalTitle}>Hints store</Text>

                    <View style={styles.statsContainer}>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.statsText}>{hintsAmount}</Text>
                        <View style={styles.hintStatsIcon}>
                                <Icons type={'hint'}/>
                        </View>
                        </View>
                        <View style={styles.scoreContainer}>
                        <Text style={styles.statsText}>{totalScore}</Text>
                        <View style={styles.coinStatsIcon}>
                                <Icons type={'coin'}/>
                        </View>
                        </View>
                    </View>

                    {[
                        { cost: 10, amount: 1 },
                        { cost: 20, amount: 5 },
                        { cost: 30, amount: 10 },
                        { cost: 40, amount: 15 },
                        { cost: 50, amount: 20 },
                    ].map(({ cost, amount }, index) => (
                        <View key={index} style={styles.hintContainer}>
                            <View style={styles.hintIconContainer}>
                                <View style={styles.hintIcon}>
                                    <Icons type={'hint'} />
                                </View>
                                <Text style={styles.text}>{amount}</Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.regulatorContainer, totalScore < cost && styles.disabledButton]}
                                onPress={() => handlePurchase(cost, amount)}
                                disabled={totalScore < cost}
                            >
                                <Text style={styles.text}>{cost}</Text>
                                <View style={styles.coinIcon}>
                                    <Icons type={'coin'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}

                    <TouchableOpacity 
                    style={styles.useHintBtn}
                    onPress={useHint}
                    disabled={hintsAmount < 1}
                    >
                        <Text style={styles.useHintTxt}>Use hint</Text>
                    </TouchableOpacity>

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
    modalContent: {
        width: '90%',
        height: '80.5%',
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: '#284c61'
    },
    closeButton: {
        padding: 10,
        width: 40,
        height: 40,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    statsContainer: {
        width: '100%',
        padding: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#284c61',
        marginBottom: 30,
    },
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hintStatsIcon: {
        width: 33,
        height: 33,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 2
    },
    coinStatsIcon: {
        width: 35,
        height: 35,
        marginLeft: 10
    },
    statsText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff'
    },
    hintContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 25,
        width : '100%'
    },
    hintIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hintIcon: {
        width: 70,
        height: 70,
        marginRight: 20
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#284c61'
    },
    regulatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#284c61',
        width: 115
    },
    coinIcon: {
        width: 40,
        height: 40,
        marginLeft: 15
    },
    disabledButton: {
        opacity: 0.5,
      },
    useHintBtn: {
        width: '100%',
        backgroundColor: '#284c61',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15,
    },
    useHintTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    }      
});

export default HintModal;
