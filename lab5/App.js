
import React from 'react';
import {
  
  View,
  Text,
} from 'react-native';
import Main from './comps/main'
import appStyles from './styles/appStyles'

function App(){
  
  console.log("app");
  return (
    
    <View style={appStyles.app}>
      <Main />
    </View>
  )
};



export default App;
