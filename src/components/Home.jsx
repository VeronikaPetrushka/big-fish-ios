import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import UserProfile from './UserProfile';
import AboutModal from "./About";
import SettingsModal from './Settings';
import DailyBonus from './DailyBonus';
import avatars from '../constants/avatars.js';
import { MusicProvider } from '../constants/context.js';
import MusicPlayer from './MusicPlayer.jsx';

const Home = () => {
    const navigation = useNavigation();
    const [userProfileModalVisible, setUserProfileModalVisible] = useState(false);
    const [currentAvatar, setCurrentAvatar] = useState(avatars[0].avatar);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [userName, setUserName] = useState('');  
    const [aboutModalVisible, setAboutModalVisible] = useState(false);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [dailyBonusVisible, setDailyBonusVisible] = useState(true);
    const [totalScore, setTotalScore] = useState(0);
    const [bonusAmount, setBonusAmount] = useState(100);

    const loadAvatar = async () => {
        try {
          const storedAvatarId = await AsyncStorage.getItem('userAvatar');
          const storedImageUri = await AsyncStorage.getItem('uploadedImage');
            
          if (storedImageUri) {
            setUploadedImage(storedImageUri);
            setCurrentAvatar(null);
        } else if (storedAvatarId) {
            const avatar = avatars.find(img => img.id === storedAvatarId);
            setCurrentAvatar(avatar ? avatar.avatar : avatars[0].avatar);
            setUploadedImage(null);
        } else {
            setUploadedImage(null);
            setCurrentAvatar(avatars[0].avatar);
        }
        } catch (error) {
          console.error('Error loading avatar:', error);
        }
      };
    
      const loadName = async () => {
        try {
          const storedName = await AsyncStorage.getItem('userProfile');
          setUserName(storedName || '');
        } catch (error) {
          console.error('Error loading name:', error);
        }
      };
    
      useEffect(() => {
        loadAvatar();
        loadName();
      }, []);

    const closeUserProfileModal = async () => {
        setUserProfileModalVisible(false);
        await loadAvatar();
        await loadName();
    };

    const bonuses = [100, 200, 300, 400, 500, 600, 700];
    const currentBonusIndex = useRef(0);

    const closeAboutModal = () => {
        setAboutModalVisible(false);
    };

    const closeSettingsModal = async () => {
        setSettingsModalVisible(false);
        setUploadedImage(null);
        setCurrentAvatar(avatars[0].avatar);
        await loadAvatar();
        await loadName();
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
        <MusicProvider>
         <MusicPlayer />
        <ImageBackground
        source={require('../assets/background/home.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.userContainer} onPress={() => setUserProfileModalVisible(true)}>
                <View style={[styles.avatarContainer, uploadedImage && styles.imageContainer]}>
                    <Image 
                        source={uploadedImage ? { uri: uploadedImage } : currentAvatar} 
                        style={[styles.avatar, uploadedImage && styles.avatarImage]}
                    />
                </View>
                    <Text style={styles.name}>{userName || "User"}</Text>
            </TouchableOpacity>

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

            <UserProfile visible={userProfileModalVisible} onClose={closeUserProfileModal}/>
            <AboutModal visible={aboutModalVisible} onClose={closeAboutModal} />
            <SettingsModal visible={settingsModalVisible} onClose={closeSettingsModal} />
            <DailyBonus visible={dailyBonusVisible} onClose={closeDailyBonusModal} bonusAmount={bonusAmount} />
        </View>
        </View>
        </ImageBackground>
        </MusicProvider>
    )
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },

    userContainer: {
        backgroundColor: '#a8cce1',
        width: '100%',
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 20,
        position: 'absolute',
        top: 60,
        right: 30,
        zIndex: 10
    },

    avatarContainer: {
        width: 65,
        height: 65,
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#e4eff6',
        overflow: 'hidden',
        marginRight: 20,
        padding: 10
    },

    imageContainer: {
        padding: 0
    },

    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    name: {
        fontSize: 22,
        fontWeight: '600',
        color: '#284c61'
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
        marginBottom: 10,
        zIndex: 10
    },

    btnTxt: {
        fontSize: 20,
        color: '#a8cce1',
        fontWeight: '600'
    }
});

export default Home;
