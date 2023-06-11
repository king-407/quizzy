import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';
const LeaderBoard = () => {
  const [entry, setEntry] = useState([]);
  const getScores = async () => {
    const querySnap = await firestore()
      .collection('users')

      .orderBy('highScore', 'desc')
      .get();
    let names = [];
    querySnap.forEach(element => {
      names.push(element._data);
    });
    setEntry(names);
  };
  useEffect(() => {
    getScores();
  }, []);

  return (
    <ScrollView>
      <View style={{backgroundColor: '#0047AB', flex: 1}}>
        <Text
          style={{
            color: 'white',
            fontStyle: 'TiltWarp-Regular',
            marginTop: responsiveHeight(3),
            fontSize: 30,
            marginLeft: 32,
          }}>
          Leader Board 🏆 🏆
        </Text>
        <View style={{marginTop: 27}}>
          {entry.map(student => {
            return (
              <TouchableOpacity
                key={student.uid}
                style={{
                  marginTop: responsiveHeight(3),
                  height: responsiveHeight(10),
                  width: responsiveWidth(95),
                  backgroundColor: 'white',
                  borderRadius: responsiveWidth(8),

                  elevation: 10,

                  alignSelf: 'center',
                  // flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginLeft: responsiveWidth(7),
                      marginTop: responsiveHeight(3),

                      fontSize: responsiveFontSize(3),
                      width: '30%',
                      color: '#0047AB',

                      fontFamily: 'TiltWarp-Regular',
                    }}>
                    {student.name}
                  </Text>

                  <Text
                    style={{
                      marginLeft: responsiveWidth(4),
                      marginTop: responsiveHeight(3),
                      fontSize: responsiveHeight(3),

                      color: '#0047AB',
                      width: '50%',
                      fontFamily: 'TiltWarp-Regular',
                    }}>
                    Score - {student.highScore}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default LeaderBoard;
