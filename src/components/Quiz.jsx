import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import quiz from '../constants/quiz.js';

const Quiz = ({ timer, responses }) => {
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
    const [currentQuestionIndexInTopic, setCurrentQuestionIndexInTopic] = useState(0);
    const [globalQuestionIndex, setGlobalQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    
    const currentTopic = quiz[currentTopicIndex];
    
    const totalQuestions = quiz.reduce((sum, topic) => sum + topic.questions.length, 0);

    useEffect(() => {
        if (timer === 'Yes') {
            setRemainingTime(300);
            setTimerActive(true);
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

    if (globalQuestionIndex >= totalQuestions) {
        return (
            <View style={styles.container}>
                <Text style={styles.finishText}>Quiz completed! Your score: {score}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.topic}>{currentTopic.theme}</Text>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            <Text style={styles.score}>Score: {score}</Text>
            {timer === 'Yes' && (
                <Text style={styles.timer}>Time Remaining: {formatTime(remainingTime)}</Text>
            )}
            <Text style={styles.stats}>
                Question: {globalQuestionIndex + 1} / {totalQuestions}
            </Text>

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
        flex: 1,
        padding: 20,
    },
    topic: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    question: {
        fontSize: 18,
        marginBottom: 20,
    },
    score: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    timer: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'blue',
    },
    stats: {
        fontSize: 16,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    optionsContainer: {
        marginBottom: 20,
    },
    option: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
    correct: {
        backgroundColor: 'green',
    },
    wrong: {
        backgroundColor: 'red',
    },
    optionText: {
        fontSize: 16,
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
