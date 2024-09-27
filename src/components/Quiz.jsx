import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quiz from '../constants/quiz.js';
import Icons from './Icons.jsx';
import HintModal from './HintModal.jsx';
import StoreModal from './QuizStoreModal.jsx';

const Quiz = ({ timer, responses }) => {
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [currentQuestionIndexInTopic, setCurrentQuestionIndexInTopic] = useState(0);
    const [globalQuestionIndex, setGlobalQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0);

    const [remainingTime, setRemainingTime] = useState(300);
    const [timerActive, setTimerActive] = useState(false);
    const [useTimeAmount, setUseTimeAmount] = useState(0);

    const progress = useRef(new Animated.Value(1)).current;

    const [hintModalVisible, setHintModalVisible] = useState(false);
    const [storeModalVisible, setStoreModalVisible] = useState(false);
    const [currentOptions, setCurrentOptions] = useState([]);
    
    const currentTopic = quiz[currentTopicIndex];
    
    const totalQuestions = quiz.reduce((sum, topic) => sum + topic.questions.length, 0);

    const retrieveUseTimeAmount = async () => {
        try {
            const storedTime = await AsyncStorage.getItem('useTimeAmount');
            if (storedTime !== null) {
                setUseTimeAmount(parseInt(storedTime));
            }
        } catch (e) {
            console.error('Failed to load useTimeAmount from storage.');
        }
    };

    useEffect(() => {
        if (storeModalVisible) {
            retrieveUseTimeAmount();
        }
    }, [storeModalVisible]);
    

    useEffect(() => {
        if (timer === 'Yes') {
            setTimerActive(true);
            Animated.timing(progress, {
                toValue: 0,
                duration: 300000,
                useNativeDriver: false,
            }).start();
        }
    }, [timer]);

    useEffect(() => {
        if (timer === 'Yes' && remainingTime > 0) {
            progress.setValue(remainingTime / 300);
            
            const timerInterval = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);
    
            return () => clearInterval(timerInterval);
        } else if (remainingTime === 0) {
            console.log('Time is up! Your score:', score);
        }
    }, [remainingTime]);
    
    

    if (!currentTopic) {
        return <Text style={styles.errorText}>No more topics available!</Text>;
    }

    const currentQuestion = currentTopic.questions[currentQuestionIndexInTopic];

    if (!currentQuestion) {
        return <Text style={styles.errorText}>No more questions available!</Text>;
    }

    const loadTotalScore = async () => {
        try {
            const storedScore = await AsyncStorage.getItem('totalScore');
            if (storedScore !== null) {
                setScore(parseInt(storedScore));
            }
        } catch (e) {
            console.error('Failed to load total score.');
        }
    };

    useEffect(() => {
        if (!hintModalVisible) {
            loadTotalScore();
        }
    }, [hintModalVisible]);
    
    
    
    const updateTotalScore = async (newScore) => {
        try {
            const updatedScore = score + newScore;
            setScore(updatedScore);
            await AsyncStorage.setItem('totalScore', updatedScore.toString());
            console.log('totalScore: ', updatedScore)
        } catch (e) {
            console.error('Failed to update total score.');
        }
    };

    const selectedResponses = responses === 4 ? currentQuestion.options : currentQuestion.allOptions;

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        if (option.correct) {
            setCorrectOption(option);
            const newScore = score + 100;
            setScore(newScore);
    
            updateTotalScore(100);
        } else {
            setCorrectOption(selectedResponses.find(o => o.correct));
        }

        setTimeout(() => {
            handleNextQuestion();
        }, 1000);
    };

    const handleNextQuestion = () => {
        const isLastQuestionInTopic = currentQuestionIndexInTopic >= currentTopic.questions.length - 1;
        const isLastTopic = currentTopicIndex >= quiz.length - 1;

        if (globalQuestionIndex + 1 >= totalQuestions) {
            console.log('Quiz completed! Your score:', score);
        } else if (isLastQuestionInTopic) {
            setCurrentTopicIndex(currentTopicIndex + 1);
            setCurrentQuestionIndexInTopic(0);
        } else {
            setCurrentQuestionIndexInTopic(currentQuestionIndexInTopic + 1);
        }

        setGlobalQuestionIndex(globalQuestionIndex + 1);
        setSelectedOption(null);
        setCorrectOption(null);
    };

    const handleSkipQuestion = () => {
        handleNextQuestion();
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        setCurrentOptions(selectedResponses);
    }, [currentQuestion]);

    const removeWrongOptions = () => {
        const wrongOptions = currentOptions.filter(option => !option.correct);
        if (wrongOptions.length > 0) {
            const shuffledWrongOptions = wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
            setCurrentOptions(prevOptions => prevOptions.filter(option => !shuffledWrongOptions.includes(option)));
        }
    };
    

    const handleHintModalVisible = async () => {
        setHintModalVisible(!hintModalVisible);
    };

    const handleStoreModalVisible = async () => {
        if (storeModalVisible) {
            if (useTimeAmount > 0) {
                setRemainingTime(prevTime => prevTime + useTimeAmount);
    
                try {
                    await AsyncStorage.removeItem('useTimeAmount');
                    console.log('useTimeAmount cleared from storage');
                } catch (e) {
                    console.error('Failed to clear useTimeAmount from storage.');
                }
                
                setUseTimeAmount(0);
            }
        }
        setStoreModalVisible(!storeModalVisible);
    };
    
    

    if (globalQuestionIndex >= totalQuestions || remainingTime === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.finishText}>Quiz completed! Your score: {score}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {timer === 'Yes' && (
                <View style={[styles.progressBarContainer,
                    selectedResponses === currentQuestion.allOptions && timer === 'Yes' ? styles.progressBarContainerTimer6 : styles.progressBarContainer]}>
                    <Animated.View style={[styles.progressBar, { width: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '100%'],
                    }) }]} />
                    <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
                </View>
            )}
            <Text style={styles.topic}>{currentTopic.theme}</Text>
            <Text style={[styles.question,
            selectedResponses === currentQuestion.allOptions && timer === 'Yes' ? styles.questionTimer6 : styles.question]}>{currentQuestion.question}</Text>
            <View style={[styles.statsContainer, 
                selectedResponses === currentQuestion.allOptions && styles.statsContainer6,
                timer === 'Yes' && styles.statsContainerTimer,
                selectedResponses === currentQuestion.allOptions && timer === 'Yes' && styles.statsContainerTimer6
                ]}>
            <View style={styles.scoreContainer}>
                <View style={styles.scoreIcon}>
                    <Icons type={'coin'}/>
                </View>
                <Text style={styles.score}>{score}</Text>
            </View>
            <Text style={styles.stats}>
                {globalQuestionIndex + 1} / {totalQuestions}
            </Text>
            </View>

            <View style={styles.optionsContainer}>
                {currentOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.option,
                            selectedOption === option && option.correct ? styles.correct : null,
                            selectedOption === option && !option.correct ? styles.wrong : null,
                            correctOption === option ? styles.correct : null,
                        ]}
                        onPress={() => handleOptionPress(option)}
                        disabled={selectedOption !== null}
                    >
                        <Text style={styles.optionText}>{option.option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            
            <TouchableOpacity
                style={[styles.skipButton,
                     selectedResponses === currentQuestion.allOptions && styles.skipButton6,
                     timer === 'Yes' && styles.skipButtonTimer,
                     selectedResponses === currentQuestion.allOptions && timer === 'Yes' && styles.skipButtonTimer6
                    ]}
                onPress={handleSkipQuestion}
                disabled={selectedOption !== null}
            >
                <Text style={styles.skipButtonText}>Skip Question</Text>
            </TouchableOpacity>

            <View style={styles.hintBtnContainer}>
            <TouchableOpacity style={styles.hintBtn} onPress={handleHintModalVisible}>
                <Icons type={'hint'}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hintBtn} onPress={handleStoreModalVisible}>
                <Icons type={'quiz-store'}/>
            </TouchableOpacity>
            </View>

            <HintModal  
                visible={hintModalVisible} 
                onClose={handleHintModalVisible}
                onUseHint={removeWrongOptions}
                />
            <StoreModal  
                visible={storeModalVisible} 
                onClose={handleStoreModalVisible}
                onUseHint={removeWrongOptions}
                timer={timer}
                />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '110%',
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#eff8fd'
    },
    topic: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#1e3949'
    },
    question: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        height: 80,
        color: '#1e3949'
    },
    questionTimer6: {
        marginBottom: 10,
        marginTop: -15
    },
    statsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 80
    },
    statsContainer6: {
        marginBottom: 30
    },
    statsContainerTimer: {
        marginBottom: 50
    },
    statsContainerTimer6: {
        marginBottom: 20,
        marginTop: -10
    },
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scoreIcon: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e3949'
    },
    progressBarContainer: {
        height: 30,
        backgroundColor: '#bec9cf',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        marginBottom: 40,
    },
    progressBarContainerTimer6: {
        marginBottom: 25,
    },
    progressBar: {
        width: '100%',
        height: '100%',
        backgroundColor: '#284c61',
    },
    timerText: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    stats: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e3949'
    },
    optionsContainer: {
        marginBottom: 20,
    },
    option: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#f3fafd',
        borderWidth: 1,
        borderColor: '#284c61'
    },
    correct: {
        backgroundColor: '#c4e4b8',
    },
    wrong: {
        backgroundColor: '#dfafaf',
    },
    optionText: {
        fontSize: 18,
        color: '#284c61'
    },
    finishText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#284c61',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
    skipButton: {
        backgroundColor: '#284c61',
        padding: 15,
        marginTop: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 60
    },
    skipButton6: {
        marginBottom: 30,
        marginTop: 0,
    },
    skipButtonTimer: {
        marginBottom: 40,
        marginTop: 10,
    },
    skipButtonTimer6: {
        marginBottom: 25,
        marginTop: 0,
    },
    skipButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    hintBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    hintBtn: {
        width: 60,
        height: 60,
    }
});

export default Quiz;
