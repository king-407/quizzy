import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
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
    <View style={{backgroundColor: 'white', flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          color: 'black',
          fontStyle: 'TiltWarp-Regular',
          marginTop: 20,
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
                marginTop: 10,
                height: 80,
                width: 350,
                backgroundColor: '#FFF2FD',
                borderRadius: 35,

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
                    marginLeft: 30,
                    marginTop: 15,

                    fontSize: 23,
                    width: '30%',
                    color: 'black',

                    fontFamily: 'TiltWarp-Regular',
                  }}>
                  {student.name}
                </Text>

                <Text
                  style={{
                    marginLeft: 40,
                    marginTop: 23,
                    fontSize: 23,

                    color: 'black',
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
  );
};

export default LeaderBoard;
