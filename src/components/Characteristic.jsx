import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
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
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  page: {
    width: width - 40,
    height: 690,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  imgContainer: {
    width: '100%',
    height: 300,
    marginTop: 10,
    marginBottom: 30
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
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default Characteristics;


