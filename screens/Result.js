import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect, useInsertionEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Result = ({navigation, route, user}) => {
  const [stored, setStored] = useState(0);
  const {score} = route.params;
  const getScore = async () => {
    const saaman = await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(console.log('data obtained'))
      .catch(err => {
        console.error(err);
      });
    setStored(saaman._data.highScore);
  };
  useEffect(() => {
    getScore();
    if (score > stored) {
      firestore()
        .collection('users')
        .doc(user.uid)

        .update({
          highScore: score,
        })
        .then(() => {
          console.log('score updated');
        });
    }
    console.log(stored);
  }, []);

  return (
    <View style={{backgroundColor: '#0047AB', height: '100%'}}>
      <StatusBar animated={true} backgroundColor="#0047AB" />
      <View style={{marginTop: responsiveHeight(3)}}>
        {score >= 50 ? (
          <Lottie
            source={require('../animation/win.json')}
            style={{height: responsiveHeight(30), alignSelf: 'center'}}
            autoPlay
          />
        ) : (
          <>
            <Lottie
              source={require('../animation/loss.json')}
              style={{height: responsiveHeight(30), alignSelf: 'center'}}
              autoPlay
            />
          </>
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: responsiveFontSize(4),

            alignSelf: 'center',
            color: 'white',
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
            Congratulation 🏆🏆!!
          </Text>
        ) : (
          <Text
            style={{
              fontSize: responsiveFontSize(4),

              alignSelf: 'center',
              color: 'white',
              fontFamily: 'TiltWarp-Regular',
            }}>
            Try again 😓😓
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: responsiveWidth(90),
          elevation: 12,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: responsiveWidth(4),
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            padding: 10,
            fontFamily: 'TiltWarp-Regular',
            color: '#0047AB',
            alignSelf: 'center',
            fontSize: responsiveFontSize(3),
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: responsiveWidth(90),
          elevation: 12,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: responsiveWidth(4),
        }}
        onPress={() => navigation.navigate('LeaderBoard')}>
        <Text
          style={{
            padding: 10,
            fontFamily: 'TiltWarp-Regular',
            color: '#0047AB',
            alignSelf: 'center',
            fontSize: responsiveFontSize(3),
          }}>
          Leaderboard
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
