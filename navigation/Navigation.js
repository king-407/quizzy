import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import Loaders from '../screens/Loaders';

const Stack = createStackNavigator();
const Navigation = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {show ? <Stack.Screen name="Loaders" component={Loaders} /> : null}

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" haederShown="false" component={Quiz} />

      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};
export default Navigation;
