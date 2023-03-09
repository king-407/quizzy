import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Navigation from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import Result from './screens/Result';
const App = () => {
  const [splash, setSplash] = useState(true);
  // if (splash) {
  //   setTimeout(() => {
  //     return (
  //       <View style={{backgroundColor: 'white', height: '100%'}}>
  //         <Text>some text</Text>
  //       </View>
  //     );
  //   }, 10000);
  //   setSplash(false);
  // }
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    // {/* <Home /> */}
    // {/* <Result /> */}
    // {/* <Quiz /> */}
  );
};

export default App;
const styles = StyleSheet.create({});
