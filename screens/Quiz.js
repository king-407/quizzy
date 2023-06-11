import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Lottie from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Quiz = ({navigation}) => {
  const [questions, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [quesNo, setNo] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  const quizz = async () => {
    try {
      const result = await fetch(
        `https://opentdb.com/api.php?amount=10&encode=url3986`,
      );
      const data = await result.json();
      setQuestion(data.results[quesNo]);
      setLoading(false);
      console.log(data.results[quesNo].incorrect_answers);
      const arr = data.results[quesNo].incorrect_answers;
      const str = data.results[quesNo].correct_answer;
      const arrNew = shuffleAndAdd(arr, str);
      setOptions(arrNew);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quizz();
  }, [quesNo]);
  const shuffleAndAdd = (options, str) => {
    const newArr = [...options];
    console.log(newArr);
    newArr.push(str);
    shuffleArray(newArr);

    return newArr;
  };

  const handleAnswer = str => {
    if (str == questions.correct_answer) {
      setScore(score + 10);
    }
    if (quesNo < 9) setNo(quesNo + 1);
    else {
      navigation.navigate('Result', {score});
    }
  };
  if (loading) {
    return <Lottie source={require('../pictures/loader.json')} autoPlay />;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {quesNo % 2 == 0 ? (
          <Lottie
            source={require('../animation/Quiz.json')}
            style={{height: responsiveHeight(35), alignSelf: 'center'}}
            autoPlay
          />
        ) : (
          <Lottie
            source={require('../animation/Idea.json')}
            style={{
              height: responsiveHeight(45),
              alignSelf: 'center',
            }}
            autoPlay
          />
        )}
        <StatusBar animated={true} backgroundColor="#0047AB" />
        <View style={styles.top}>
          <Text style={styles.heading}>
            Q.{quesNo + 1}) {decodeURIComponent(questions.question)}
          </Text>
        </View>
        {options.length > 2 ? (
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAnswer(options[3]);
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#0047AB',
                  textAlign: 'center',
                  fontFamily: 'TiltWarp-Regular',
                }}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAnswer(options[0]);
              }}>
              <Text
                style={{
                  color: '#0047AB',

                  fontSize: 22,
                  textAlign: 'center',
                  fontFamily: 'TiltWarp-Regular',
                }}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAnswer(options[1]);
              }}>
              <Text
                style={{
                  color: '#0047AB',
                  textAlign: 'center',
                  fontSize: 22,
                  fontFamily: 'TiltWarp-Regular',
                }}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAnswer(options[2]);
              }}>
              <Text
                style={{
                  color: '#0047AB',
                  fontSize: 22,
                  textAlign: 'center',
                  fontFamily: 'TiltWarp-Regular',
                }}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAnswer(options[1]);
              }}>
              <Text
                style={{
                  color: '#0047AB',

                  fontSize: 22,
                  textAlign: 'center',
                  fontFamily: 'TiltWarp-Regular',
                }}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAnswer(options[0]);
              }}>
              <Text
                style={{
                  color: '#0047AB',

                  fontSize: 22,
                  textAlign: 'center',
                  fontFamily: 'TiltWarp-Regular',
                }}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  container: {flex: 1, height: '100%', backgroundColor: '#0047AB'},
  top: {
    marginVertical: 10,
  },
  heading: {
    marginTop: 20,
    fontSize: responsiveFontSize(3),

    color: 'white',

    margin: 20,
    fontFamily: 'TiltWarp-Regular',
  },
  options: {
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    marginBottom: responsiveHeight(3),
    width: responsiveWidth(93),
    height: responsiveHeight(8),
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 10,
  },
  bottom: {
    justifyContent: 'center',
    margin: 12,
    padding: 16,
    flexDirection: 'row',
  },
});
