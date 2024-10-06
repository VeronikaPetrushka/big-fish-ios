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
    case 'directory':
      imageSource = require('../assets/panel/directory.png');
      iconStyle = styles.panelIcon;
      break;
    case 'diary':
      imageSource = require('../assets/panel/diary.png');
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
    case 'hint':
      imageSource = require('../assets/quiz/hint-1.png');
      break;
    case 'quiz-store':
      imageSource = require('../assets/quiz/quiz-store.png');
      break;
    case 'close':
      imageSource = require('../assets/quiz/close.png');
      iconStyle = styles.closeIcon;
      break;
    case 'plus':
      imageSource = require('../assets/quiz/plus.png');
      break;
    case 'minus':
      imageSource = require('../assets/quiz/minus.png');
      break;
    case 'time':
      imageSource = require('../assets/quiz/clock.png');
      break;
    case 'fish-1':
      imageSource = require('../assets/directory/fish.png');
      break;
    case 'fish-2':
      imageSource = require('../assets/directory/fish2.png');
      break;
    case 'trash':
      imageSource = require('../assets/others/trash-bin.png');
      break;
    case 'back':
      imageSource = require('../assets/others/previous.png');
      iconStyle = styles.closeIcon;
      break;
    case 'back-white':
      imageSource = require('../assets/others/previous.png');
      iconStyle = styles.closeWhiteIcon;
      break;
    case 'info':
      imageSource = require('../assets/others/info.png');
      break;
    case 'correct':
      imageSource = require('../assets/quiz/ok.png');
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
  closeIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#1e3949',
  },
  closeWhiteIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#fff',
  }
});

export default Icons;
