import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type }) => {

  let imageSource;
  let iconStyle = styles.icon;

  switch (type) {
    case 'home':
      imageSource = require('../assets/panel/home.png');
      iconStyle = styles.panelIcon;
      break;
    case 'dairy':
      imageSource = require('../assets/panel/dairy.png');
      iconStyle = styles.panelIcon;
      break;
    case 'store':
      imageSource = require('../assets/panel/store.png');
      iconStyle = styles.panelIcon;
      break;
    case 'calendar':
      imageSource = require('../assets/panel/calendar.png');
      iconStyle = styles.panelIcon;
      break;
    case 'recipes':
      imageSource = require('../assets/panel/recipes.png');
      iconStyle = styles.panelIcon;
      break;
    case 'coin':
      imageSource = require('../assets/quiz/coin.png');
      break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  panelIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#284c61',
  },
});

export default Icons;
