import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import quiz from '../constants/quiz.js';
import Icons from './Icons.jsx';

const Quiz = ({ timer, responses }) => {
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [currentQuestionIndexInTopic, setCurrentQuestionIndexInTopic] = useState(0);
    const [globalQuestionIndex, setGlobalQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0);
    const [remainingTime, setRemainingTime] = useState(300);
    const [timerActive, setTimerActive] = useState(false);
    const progress = useRef(new Animated.Value(1)).current;
    
    const currentTopic = quiz[currentTopicIndex];
    
    const totalQuestions = quiz.reduce((sum, topic) => sum + topic.questions.length, 0);

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
        if (timerActive && remainingTime > 0) {
            const timerInterval = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerInterval);
        } else if (remainingTime === 0) {
            console.log('Time is up! Your score:', score);
        }
    }, [timerActive, remainingTime]);

    if (!currentTopic) {
        return <Text style={styles.errorText}>No more topics available!</Text>;
    }

    const currentQuestion = currentTopic.questions[currentQuestionIndexInTopic];

    if (!currentQuestion) {
        return <Text style={styles.errorText}>No more questions available!</Text>;
    }

    const selectedResponses = responses === 4 ? currentQuestion.options : currentQuestion.allOptions;

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        if (option.correct) {
            setCorrectOption(option);
            setScore(prevScore => prevScore + 100);
        } else {
            setCorrectOption(currentQuestion.options.find(o => o.correct));
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

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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
                <View style={styles.progressBarContainer}>
                    <Animated.View style={[styles.progressBar, { width: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '100%'],
                    }) }]} />
                    <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
                </View>
            )}
            <Text style={styles.topic}>{currentTopic.theme}</Text>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            <View style={styles.statsContainer}>
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
                {selectedResponses.map((option, index) => (
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        paddingTop: 30,
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
    statsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 80
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
        backgroundColor: '#ccc',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        marginBottom: 40,
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
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#284c61'
    },
    correct: {
        backgroundColor: 'green',
    },
    wrong: {
        backgroundColor: 'red',
    },
    optionText: {
        fontSize: 18,
        color: '#284c61'
    },
    finishText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
});

export default Quiz;
