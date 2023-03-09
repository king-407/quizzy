import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Quizzy</Text>
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '900',
    alignSelf: 'center',
    paddingVertical: 10,
  },
});
