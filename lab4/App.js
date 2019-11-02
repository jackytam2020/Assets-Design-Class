/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './comps/Main';

function App(){
  return (
    <View>
      <Text>Hi App</Text>
      <Main />
    </View>
  )
}

export default App;
