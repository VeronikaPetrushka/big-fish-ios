import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.jsx';
import QuizScreen from './src/screens/QuizScreen.jsx';
// import MusicPlayer from './src/components/MusicPlayer';

enableScreens();

const Stack = createStackNavigator();

const App = () => {
    return (
        // <MusicProvider>
            <NavigationContainer>
                {/* <View style={{ width: '100%', height: "100%" }}> */}
                    {/* <MusicPlayer /> */}
                    <Stack.Navigator initialRouteName="HomeScreen">
                        <Stack.Screen 
                            name="HomeScreen" 
                            component={HomeScreen} 
                            options={{ headerShown: false }} 
                        />
                        <Stack.Screen 
                            name="QuizScreen" 
                            component={QuizScreen} 
                            options={{ headerShown: false }} 
                        />
                    </Stack.Navigator>
                {/* </View> */}
            </NavigationContainer>
        // </MusicProvider>
    );
};

export default App;
