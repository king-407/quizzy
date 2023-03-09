import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
const Result = ({navigation, route}) => {
  const {score} = route.params;
  const success = 'https://storyset.com/illustration/awards/cuate';
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar animated={true} backgroundColor="white" />
      <View style={{marginTop: 30}}>
        {score >= 50 ? (
          <Lottie
            source={require('../animation/win.json')}
            style={{height: 380, alignSelf: 'center'}}
            autoPlay
          />
        ) : (
          <>
            <Lottie
              source={require('../animation/loss.json')}
              style={{height: 380, alignSelf: 'center'}}
              autoPlay
            />
          </>
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: 35,

            alignSelf: 'center',
            color: 'black',
            fontFamily: 'TiltWarp-Regular',
          }}>
          Your score is {score}
        </Text>
        {score >= 50 ? (
          <Text
            style={{
              color: 'black',
              fontFamily: 'TiltWarp-Regular',
              fontSize: 35,
            }}>
            {' '}
            Congratulation 🏆🏆!!
          </Text>
        ) : (
          <Text
            style={{
              color: 'black',
              fontFamily: 'TiltWarp-Regular',
              fontSize: 35,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            Try again 😓😓
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          width: 300,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            padding: 10,
            fontFamily: 'TiltWarp-Regular',
            color: 'white',
            alignSelf: 'center',
            fontSize: 19,
          }}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;
const styles = StyleSheet.create({
  pic: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
});
