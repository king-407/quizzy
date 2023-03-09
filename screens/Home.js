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
const Home = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="white" />
      <Title />

      <View style={styles.picConainer}>
        <Image style={styles.pic} source={require('../pictures/quiz.png')} />
      </View>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'TiltWarp-Regular',
          color: 'black',
          flex: 1,
        }}>
        Challenge Yourself 🏆🏆
      </Text>
      <View style={styles.texty}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={styles.button}>
          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              color: 'white',
              fontFamily: 'TiltWarp-Regular',
            }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
