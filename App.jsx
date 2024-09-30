import React from 'react';
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
import MusicPlayer from './src/components/MusicPlayer';
import { MusicProvider } from './src/constants/context.js';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
    return (
        <MusicProvider>
            <NavigationContainer>
                {/* <View style={{ width: '100%', height: "100%" }}> */}
                    <MusicPlayer />
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
                    </Stack.Navigator>
                {/* </View> */}
            </NavigationContainer>
        </MusicProvider>
    );
};

export default App;
