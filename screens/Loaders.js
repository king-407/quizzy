import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
const Loaders = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        height: '100%',
      }}>
      <Lottie
        source={require('../pictures/quiz.json')}
        style={{height: 400, alignItems: 'center'}}
        autoPlay
      />
    </View>
  );
};

export default Loaders;
