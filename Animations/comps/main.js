import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Animated, Button
} from 'react-native';

function Main(){

    const [op] = useState(new Animated.Value(1));
    const [bg_color] = useState(new Animated.Value(1));

    var my_bg = bg_color.interpolate({
        inputRange: [0, 1],
        outputRange:["blue","red"]
    })

    var text_color = bg_color.interpolate({
        inputRange: [0, 1],
        outputRange: ["black", "white"]
    })

  return (
   
      <Animated.View style={{flex:1, opacity:1,justifyContent:'center', alignItems:'center', backgroundColor:my_bg}}>
          <Animated.Text style={{color:text_color}}>This View is gonna get animated!</Animated.Text>
          <Button 
          title="Click"
        
          onPress={()=>{
             Animated.timing(
                bg_color,
                 {
                     toValue:0,
                     duration:500,

                 }
             ).start();
          }}
          />
      </Animated.View>
  );
};

export default Main;