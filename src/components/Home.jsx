import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AboutModal from "./About";
import SettingsModal from './Settings';
import DailyBonus from './DailyBonus';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const navigation = useNavigation();
    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [dailyBonusVisible, setDailyBonusVisible] = useState(true);
    const [totalScore, setTotalScore] = useState(0);
    const [bonusAmount, setBonusAmount] = useState(100);

    const bonuses = [100, 200, 300, 400, 500, 600, 700];
    const currentBonusIndex = useRef(0);

    const closeAboutModal = () => {
        setAboutModalVisible(false);
    };

    const closeSettingsModal = () => {
        setSettingsModalVisible(false);
    };

    const closeDailyBonusModal = async () => {
        setDailyBonusVisible(false);
        storeLastBonusShown();

        const newTotalScore = totalScore + bonusAmount;
        await updateTotalScore(newTotalScore);
    };

    const storeLastBonusShown = async () => {
        const now = new Date();
        await AsyncStorage.setItem('lastBonusShown', now.toString());
    };

    const getLastBonusShown = async () => {
        const lastBonusShown = await AsyncStorage.getItem('lastBonusShown');
        return lastBonusShown ? new Date(lastBonusShown) : null;
    };

    const retrieveTotalScore = async () => {
        const storedScore = await AsyncStorage.getItem('totalScore');
        if (storedScore) {
            setTotalScore(parseInt(storedScore, 10));
        }
    };

    const updateTotalScore = async (newScore) => {
        await AsyncStorage.setItem('totalScore', newScore.toString());
        setTotalScore(newScore);
    };

    const showDailyBonus = async () => {
        const lastBonusShown = await getLastBonusShown();
        const now = new Date();

        if (!lastBonusShown || (now - lastBonusShown >= 60 * 60 * 24 * 1000)) {
            const currentBonus = bonuses[currentBonusIndex.current];
            setBonusAmount(currentBonus);
            setDailyBonusVisible(true);

            currentBonusIndex.current = (currentBonusIndex.current + 1) % bonuses.length;
        }
    };

    useEffect(() => {
        retrieveTotalScore();
        showDailyBonus();

        const intervalId = setInterval(showDailyBonus, 60 * 60 * 24 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <ImageBackground
        source={require('../assets/background/home.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('QuizStartScreen')}>
                <Text style={styles.btnTxt}>Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => setAboutModalVisible(true)}>
                <Text style={styles.btnTxt}>About us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => setSettingsModalVisible(true)}>
                <Text style={styles.btnTxt}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ScoreboardScreen')}>
                <Text style={styles.btnTxt}>Scoreboard</Text>
            </TouchableOpacity>

            <AboutModal visible={aboutModalVisible} onClose={closeAboutModal} />
            <SettingsModal visible={settingsModalVisible} onClose={closeSettingsModal} />
            <DailyBonus visible={dailyBonusVisible} onClose={closeDailyBonusModal} bonusAmount={bonusAmount} />
        </View>
        </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '110%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    backgroundImage: {
        width: '100%',
        height: '110%',
        justifyContent: 'center',
      },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },

    btn: {
        padding: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 2,
        borderColor: '#a8cce1',
        borderRadius: 12,
        marginBottom: 10
    },

    btnTxt: {
        fontSize: 20,
        color: '#a8cce1',
        fontWeight: '600'
    }
});

export default Home;
