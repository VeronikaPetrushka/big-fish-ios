import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';
import characteristic from '../constants/characteristic.js';

const { width, height } = Dimensions.get('window');

const Page = ({ title, image, description, list }) => {
  return (
    <View style={styles.page}>
      <ScrollView>
      <Text style={styles.title}>{title}</Text>
      {image && (
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.image} />
        </View>
      )}
      <Text style={styles.text}>{description}</Text>
      {list && (
        <View>
          {list.map((item, index) => (
            <View key={index}>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          ))}
        </View>
      )}
      </ScrollView>
    </View>
  );
};

const Characteristics = () => {
  const navigation = useNavigation();

  const translateX = useSharedValue(0);
  const [pageIndex, setPageIndex] = useState(0);

  const sections = characteristic.sections;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const onGestureEvent = (event) => {
    const { translationX } = event.nativeEvent;
    translateX.value = withSpring(translationX);
  };

  const onHandlerStateChange = (event) => {
    const { translationX } = event.nativeEvent;
    if (translationX < -50 && pageIndex < sections.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else if (translationX > 50 && pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
    translateX.value = withSpring(0);
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
    <TouchableOpacity style={styles.backIcon}  onPress={() => navigation.navigate('DirectoryScreen')}>
        <Icons type={'back'}/>
    </TouchableOpacity>
    <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Page
          title={sections[pageIndex].title || sections[pageIndex].subTitle}
          image={sections[pageIndex].image}
          description={sections[pageIndex].description}
          list={sections[pageIndex].list}
        />
      </Animated.View>
    </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#c1e5fa',
  },
  backIcon: {
    width: 60,
    height: 60,
    padding: 10,
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10
},
  page: {
    width: width - 40,
    height: height * 0.62,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: height * 0.16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#284c61',
  },
  imgContainer: {
    width: '100%',
    height: height * 0.3,
    marginTop: 10,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  subtitle: {
    fontSize: 19,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
    color: '#284c61',
  },
  text: {
    fontSize: 18,
    color: '#284c61',
  },
});

export default Characteristics;


