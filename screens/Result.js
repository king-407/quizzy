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
          width: 350,
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
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          width: 350,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('LeaderBoard')}>
        <Text
          style={{
            padding: 10,
            fontFamily: 'TiltWarp-Regular',
            color: 'white',
            alignSelf: 'center',
            fontSize: 19,
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
