import React, {useState, useEffect} from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from './Icons';

const StoreModal = ({ visible, onClose, onUseHint, onHintsUsed, timer }) => {
    const [hintsAmount, setHintsAmount] = useState(0);
    const [timeAmount, setTimeAmount] = useState(0);
    const [useTimeAmount, setUseTimeAmount] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [storedHintsAmount, setStoredHintsAmount] = useState(0);
    const [storedTimeAmount, setStoredTimeAmount] = useState(0);

    const hintsPrices = [
        { cost: 10, amount: 1 },
        { cost: 20, amount: 5 },
        { cost: 30, amount: 10 },
        { cost: 40, amount: 15 },
        { cost: 50, amount: 20 },
    ];

    const timePrices = [
        { cost: 10, amount: 30 },
        { cost: 30, amount: 60 },
        { cost: 60, amount: 120 },
        { cost: 100, amount: 150 },
        { cost: 140, amount: 180 },
        { cost: 170, amount: 210 },
        { cost: 190, amount: 240 },
        { cost: 210, amount: 270 },
        { cost: 220, amount: 300 },
    ];

    useEffect(() => {
        if (visible) {
            const fetchStats = async () => {
                try {
                    const storedScore = await AsyncStorage.getItem('totalScore');
                    const storedHints = await AsyncStorage.getItem('hintsAmount');
                    const storedTime = await AsyncStorage.getItem('timeAmount');
                    if (storedScore) {
                        setTotalScore(parseInt(storedScore));
                    }
                    if (storedHints) {
                        setStoredHintsAmount(parseInt(storedHints));
                    }
                    if (storedTime) {
                        setStoredTimeAmount(parseInt(storedTime));
                    }
                } catch (error) {
                    console.error('Failed to load totalScore, hintsAmount, or timeAmount from storage:', error);
                }
            };
            fetchStats();
        }
    }, [visible]);

    const useHint = async () => {
        if (storedHintsAmount > 0) {
            const newHintsAmount = storedHintsAmount - 1;
            setStoredHintsAmount(newHintsAmount);
            setHintsAmount(0)

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

    const useTime = async () => {
        if (storedTimeAmount >= useTimeAmount && useTimeAmount > 0) {
            const newTimeAmount = storedTimeAmount - useTimeAmount;
            setStoredTimeAmount(newTimeAmount);
            setTimeAmount(0);
            setUseTimeAmount(0);
    
            try {
                await AsyncStorage.setItem('timeAmount', newTimeAmount.toString());
                await AsyncStorage.setItem('useTimeAmount', useTimeAmount.toString());
            } catch (error) {
                console.error('Failed to store timeAmount or useTimeAmount in storage:', error);
            }
    
            onClose();
        } else {
            alert("Not enough time available to use!");
        }
    };
    

    const purchaseHints = async () => {
        if (hintsAmount > 0) {
            const priceIndex = hintsAmount - 1;
            const price = hintsPrices[priceIndex].cost;
            
            if (totalScore >= price) {
                const newHintsAmount = storedHintsAmount + hintsPrices[priceIndex].amount;
                const newTotalScore = totalScore - price;

                setStoredHintsAmount(newHintsAmount);
                setTotalScore(newTotalScore);
                setHintsAmount(0);

                try {
                    await AsyncStorage.setItem('hintsAmount', newHintsAmount.toString());
                    await AsyncStorage.setItem('totalScore', newTotalScore.toString());
                } catch (error) {
                    console.error('Failed to update hintsAmount or totalScore in storage:', error);
                }
            } else {
                alert("Insufficient funds!");
            }
        }
    };

    const purchaseTime = async () => {
        if (timeAmount > 0) {
            const priceIndex = timePrices.findIndex(price => price.amount === timeAmount);
            const price = timePrices[priceIndex]?.cost;

            if (totalScore >= price) {
                const newStoredTimeAmount = storedTimeAmount + timePrices[priceIndex].amount;
                const newTotalScore = totalScore - price;

                setStoredTimeAmount(newStoredTimeAmount);
                setTotalScore(newTotalScore);
                setTimeAmount(0);

                try {
                    await AsyncStorage.setItem('timeAmount', newStoredTimeAmount.toString());
                    await AsyncStorage.setItem('totalScore', newTotalScore.toString());
                } catch (error) {
                    console.error('Failed to update timeAmount or totalScore in storage:', error);
                }
            } else {
                alert("Insufficient funds!");
            }
        }
    };

    const increaseHintsAmount = () => {
        const nextAmount = hintsPrices.find(price => price.amount > hintsAmount);
        if (nextAmount) {
            setHintsAmount(nextAmount.amount);
        }
    };

    const decreaseHintsAmount = () => {
        const prevAmount = hintsPrices.reverse().find(price => price.amount < hintsAmount);
        if (prevAmount) {
            setHintsAmount(prevAmount.amount);
        } else {
            setHintsAmount(0);
        }
    };

    const increaseTimeAmount = () => {
        const nextAmount = timePrices.find(price => price.amount > timeAmount);
        if (nextAmount) {
            setTimeAmount(nextAmount.amount);
        }
    };

    const decreaseTimeAmount = () => {
        const prevAmount = timePrices.reverse().find(price => price.amount < timeAmount);
        if (prevAmount) {
            setTimeAmount(prevAmount.amount);
        } else {
            setTimeAmount(0);
        }
    };

    const increaseUseTimeAmount = () => {
        if (useTimeAmount < storedTimeAmount) {
            setUseTimeAmount(prev => Math.min(prev + 10, storedTimeAmount));
        }
    };

    const decreaseUseTimeAmount = () => {
        if (useTimeAmount > 0) {
            setUseTimeAmount(prev => Math.max(prev - 10, 0));
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
                <View style={[styles.modalContentTimer, timer === 'Yes' ? styles.modalContentTimer : styles.modalContent]}>
                    <Text style={styles.modalTitle}>Store</Text>

                    <View style={styles.statsContainer}>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.statsText}>{storedHintsAmount}</Text>
                        <View style={styles.hintStatsIcon}>
                                <Icons type={'hint'}/>
                        </View>
                    </View>
                    <View style={styles.scoreContainer}>
                            <Text style={styles.statsText}>{storedTimeAmount}</Text>
                            <View style={styles.timeStatsIcon}>
                                <Icons type={'time'}/>
                            </View>
                        </View>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.statsText}>{totalScore}</Text>
                        <View style={styles.coinStatsIcon}>
                                <Icons type={'coin'}/>
                        </View>
                    </View>
                    </View>

                    <View style={styles.hintContainer}>
                        <View style={styles.hintIcon}>
                            <Icons type={'hint'}/>
                        </View>
                        <Text style={styles.regulatorTxt}>{hintsAmount > 0 ? hintsPrices.find(price => price.amount === hintsAmount).cost : 0}</Text>
                        <View style={styles.regulatorContainer}>
                            <TouchableOpacity 
                                style={[styles.regulatorIcon, hintsAmount <= 0 && styles.disabledButton]} 
                                onPress={decreaseHintsAmount}
                                disabled={hintsAmount <= 0}
                                >
                                <Icons type={'minus'}/>
                            </TouchableOpacity>
                            <Text style={styles.regulatorTxt}>{hintsAmount}</Text>
                            <TouchableOpacity 
                                style={[styles.regulatorIcon, hintsAmount >= 20 && styles.disabledButton]} 
                                onPress={increaseHintsAmount}
                                disabled={hintsAmount >= 20}
                                >
                                <Icons type={'plus'}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.buyBtn, hintsAmount <= 0 && styles.disabledButton]} onPress={purchaseHints}>
                        <Text style={styles.buyBtnTxt}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyBtn} onPress={useHint}>
                        <Text style={styles.buyBtnTxt}>Use</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.hintContainer}>
                        <View style={styles.hintIcon}>
                            <Icons type={'time'}/>
                        </View>
                        <Text style={styles.regulatorTxt}>{timeAmount > 0 ? timePrices.find(price => price.amount === timeAmount).cost : 0}</Text>
                        <View style={styles.regulatorContainer}>
                            <TouchableOpacity 
                                style={[styles.regulatorIcon, timeAmount <= 0 && styles.disabledButton]}
                                onPress={decreaseTimeAmount}
                                disabled={timeAmount <= 0}
                                >
                                <Icons type={'minus'}/>
                            </TouchableOpacity>
                            <Text style={styles.regulatorTxt}>{timeAmount} s</Text>
                            <TouchableOpacity 
                                style={[styles.regulatorIcon, timeAmount >= 300 && styles.disabledButton]}  
                                onPress={increaseTimeAmount}
                                disabled={timeAmount >= 300}
                                >
                                <Icons type={'plus'}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={[styles.buyTimeBtn, timeAmount <= 0 && styles.disabledButton]} onPress={purchaseTime}>
                        <Text style={styles.buyBtnTxt}>Buy</Text>
                    </TouchableOpacity>

                    {timer === 'Yes' &&
                    <View style={{width: '100%'}}>
                        <View style={styles.regulatorContainer}>
                            <TouchableOpacity 
                                style={[styles.regulatorIcon, useTimeAmount <= 0 && styles.disabledButton]}
                                onPress={decreaseUseTimeAmount}
                                disabled={useTimeAmount <= 0}
                                >
                                <Icons type={'minus'}/>
                            </TouchableOpacity>
                            <Text style={styles.regulatorTxt}>{useTimeAmount} s</Text>
                            <TouchableOpacity 
                                style={[styles.regulatorIcon, useTimeAmount >= storedTimeAmount && styles.disabledButton]}  
                                onPress={increaseUseTimeAmount}
                                disabled={useTimeAmount >= storedTimeAmount}
                                >
                                <Icons type={'plus'}/>
                            </TouchableOpacity>
                        </View>

                    <TouchableOpacity 
                        style={[styles.useTimeBtn, storedTimeAmount <= 0 && styles.disabledButton]} 
                        onPress={useTime}
                        disabled={storedTimeAmount <= 0}
                        >
                        <Text style={styles.buyBtnTxt}>Use</Text>
                    </TouchableOpacity>
                    </View>
                    }

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
    modalContentTimer: {
        width: '90%',
        height: '83%',
        padding: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
    },
    modalContent: {
        height: '63%',
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: '#1e3949'
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
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#284c61',
        marginBottom: 60,
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
    timeStatsIcon: {
        width: 35,
        height: 35,
        marginLeft: 10,
        marginRight: -20
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
    hintContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 30,
        width: '100%'
    },
    hintIcon: {
        width: 70,
        height: 70,
        marginRight: 20
    },
    regulatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    regulatorIcon: {
        width: 50,
        height: 50,
        padding: 10
    },
    regulatorTxt: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#284c61',
        marginHorizontal: 2,
        width: 60,
        textAlign: 'center'
    },
    btnContainer: {
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%'
    },
    buyBtn: {
        width: '45%',
        backgroundColor: '#284c61',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15,
    },
    buyTimeBtn: {
        width: '100%',
        backgroundColor: '#284c61',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15,
        marginBottom: 30
    },
    useTimeBtn: {
        width: '100%',
        backgroundColor: '#284c61',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15,
        marginTop: 30
    },
    buyBtnTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    },
    disabledButton: {
        opacity: 0.5,
      },
});

export default StoreModal;
