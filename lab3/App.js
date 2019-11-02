/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles/AppStyles';
import Main from './comps/Main';




function App(){
  return (
    <View style={styles.app}>
      <Text>HI APP</Text>
      <Main />
    </View>
  )
}
export default App;
