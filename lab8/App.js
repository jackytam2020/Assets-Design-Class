import React from 'react';
import {View,Text,StatusBar,} from 'react-native';
import Users from './comps/user'

function  App()  {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Users/>
    </View>
  );
};

export default App;
