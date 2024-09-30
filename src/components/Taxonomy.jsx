import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import taxonomy from '../constants/taxonomy.js';

const { width, height } = Dimensions.get('window');

const Page = ({ title, image, description, classes, examples, features, details }) => {
  return (
    <View style={styles.page}>
        <ScrollView>
      <Text style={styles.title}>{title}</Text>
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.text}>{description}</Text>
      {classes && (
        <View>
          <Text style={styles.subtitle}>Classes:</Text>
          {Array.isArray(classes) ? (
            classes.map((cls, index) => (
              <View key={index}>
                <Text style={styles.subtitle}>{cls.name}</Text>
                <Text style={styles.text}>{cls.description}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>{classes.description}</Text>
          )}
        </View>
      )}
      {examples && <Text style={styles.text}>{examples}</Text>}
      {features && <Text style={styles.text}>{features}</Text>}
      {details && <Text style={styles.text}>{details}</Text>}
      </ScrollView>
    </View>
  );
};

const Taxonomy = () => {
  const translateX = useSharedValue(0);
  const [pageIndex, setPageIndex] = useState(0);

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
    if (translationX < -50 && pageIndex < taxonomy.length - 1) {
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
          title={taxonomy[pageIndex].title}
          image={taxonomy[pageIndex].image}
          description={taxonomy[pageIndex].description}
          classes={taxonomy[pageIndex].classes}
          examples={taxonomy[pageIndex].examples}
          features={taxonomy[pageIndex].features}
          details={taxonomy[pageIndex].details}
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
    backgroundColor: '#c1e5fa',
  },
  page: {
    width: width - 40,
    height: 630,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#284c61',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 10
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
    marginBottom: 10,
  },
});

export default Taxonomy;
