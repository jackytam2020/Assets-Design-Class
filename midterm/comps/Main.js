/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,Text} from 'react-native';
import Mainstyle from '../styles/Mainstyle';
import Top from '../comps/Top';
import Middle from '../comps/midde';
import Buttom from '../comps/Bot'


function Main(){
  return (
    <View style={Mainstyle.body}>
       <Top />
       <Middle />
       <Buttom />
    </View>
  )
}
export default Main;
