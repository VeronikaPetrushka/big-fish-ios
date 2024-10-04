import React, { useState, useEffect, useRef} from 'react';
import { Animated, View, ImageBackground, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.jsx';
import QuizStartScreen from './src/screens/QuizStartScreen.jsx';
import QuizScreen from './src/screens/QuizScreen.jsx';
import ScoreboardScreen from './src/screens/ScoreboardScreen.jsx'
import DiaryScreen from './src/screens/DiaryScreen.jsx';
import CalendarScreen from './src/screens/CalendarScreen.jsx';
import DirectoryScreen from './src/screens/DirectoryScreen.jsx';
import CharacteristicScreen from './src/screens/CharacteristicScreen.jsx';
import TaxonomyScreen from './src/screens/TaxonomyScreen.jsx';
import RecipesScreen from './src/screens/RecipesScreen.jsx';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
    const [loaderIsEnded, setLoaderIsEnded] = useState(false);
    const [prog, setProg] = useState(0);
    const [indeterminate, setIndeterminate] = useState(true);
  
    const appearingAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(appearingAnim, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }).start();
    }, []);
  
    useEffect(() => {
      let interval;
      const timer = setTimeout(() => {
        setIndeterminate(false);
        
        interval = setInterval(() => {
          setProg(prevProg => Math.min(1, prevProg + 1 / (5500 / 500))); 
        }, 500);
      }, 1500);
      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }, []);
  
    useEffect(() => {
      setTimeout(() => {
        setLoaderIsEnded(true);
      }, 8000);
    }, []);  

    return (
            <NavigationContainer>
                {
                    !loaderIsEnded ? (
                        <View style={{ flex: 1 }}>
                        <ImageBackground style={{ flex: 1 }} source={require('./src/assets/background/home.png')}>
                            <View style={{ flex: 1, alignItems: 'center', paddingBottom: 30 }}>
                                <Animated.View
                                    style={{ ...styles.contentConteiner, opacity: appearingAnim }}>
                                    <Text style={{ ...styles.congratText }}>Welcome to Fishing App</Text>
                                    <Progress.Bar
                                    width={250}
                                    height={10}
                                    color="#d2f0bc"
                                    progress={prog}
                                    indeterminate={indeterminate}
                                />
                                </Animated.View>
                            </View>
                        </ImageBackground>
                    </View>
                    ) : (
                        <Stack.Navigator initialRouteName="HomeScreen">
                        <Stack.Screen 
                            name="HomeScreen" 
                            component={HomeScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="QuizStartScreen" 
                            component={QuizStartScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="QuizScreen" 
                            component={QuizScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="ScoreboardScreen" 
                            component={ScoreboardScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="DiaryScreen" 
                            component={DiaryScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="CalendarScreen" 
                            component={CalendarScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="DirectoryScreen" 
                            component={DirectoryScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="CharacteristicScreen" 
                            component={CharacteristicScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="TaxonomyScreen" 
                            component={TaxonomyScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="RecipesScreen" 
                            component={RecipesScreen} 
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
                    )
                }
            </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    imgBack: {flex: 1},
    contentConteiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    congratText: {
      fontSize: 80,
      fontWeight: 'bold',
      color: '#d2f0bc',
      //fontFamily: FONTS.primary,
      textAlign: 'center',
      marginBottom: 30,
    },
  });

export default App;
