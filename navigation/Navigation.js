import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import Loaders from '../screens/Loaders';
import auth from '@react-native-firebase/auth';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import LeaderBoard from '../screens/LeaderBoard';
const Stack = createStackNavigator();
const Navigation = () => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);
  useEffect(() => {
    const unregister = auth().onAuthStateChanged(exist => {
      if (exist) setUser(exist);
      else setUser(null);
    });

    return () => {
      unregister();
    };
  }, [user]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Quiz" haederShown="false" component={Quiz} />
          {show ? <Stack.Screen name="Loaders" component={Loaders} /> : null}
          <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
          <Stack.Screen name="Result">
            {props => <Result {...props} user={user} />}
          </Stack.Screen>
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default Navigation;
