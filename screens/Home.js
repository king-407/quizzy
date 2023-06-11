import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import Title from '../component/Title';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import Lottie from 'lottie-react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Home = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#0047AB" />
      <View style={{flex: 1, backgroundColor: '#0047AB'}}>
        <View style={{marginTop: responsiveHeight(4)}}>
          <Lottie
            source={require('../animation/books.json')}
            style={{height: responsiveHeight(40), alignSelf: 'center'}}
            autoPlay
          />
          <View style={{marginTop: responsiveHeight(4.5)}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: responsiveFontSize(6),
                marginLeft: responsiveWidth(4),
                fontFamily: 'TiltWarp-Regular',
              }}>
              Quizzy
            </Text>
          </View>
          <View style={{marginTop: responsiveHeight(5)}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: responsiveFontSize(2.5),
                marginLeft: responsiveWidth(4),
                fontFamily: 'TiltWarp-Regular',
              }}>
              Do you feel confident ?? Here you will challenge one of our most
              difficult questions
            </Text>
          </View>
          <View style={{marginTop: responsiveHeight(10)}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: responsiveWidth(80),
                height: responsiveHeight(8),
                alignSelf: 'center',
                borderRadius: responsiveWidth(5),
                alignItems: 'center',
                elevation: 9,
              }}
              onPress={() => navigation.navigate('Quiz')}>
              <Text
                style={{
                  color: '#0CAFFF',
                  alignSelf: 'center',
                  fontSize: responsiveFontSize(3),
                  marginTop: responsiveHeight(1.7),
                  fontWeight: '600',
                }}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    backgroundColor: 'white',
  },
  pic: {
    height: 400,
    width: 400,

    alignSelf: 'center',
  },
  texty: {
    padding: 5,
    marginBottom: 10,
  },
  picConainer: {
    marginTop: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#83E3FDff',
    padding: 10,
    borderRadius: 40,
  },
});
