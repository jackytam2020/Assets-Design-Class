/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View,Text, Picker} from 'react-native';




function Middle(){
const [color, setColor] = useState("#BAD");
const [bgColor, setBgColor] = useState("#DAB");

  return (
    <View style={{width:'100%', height:'33%', display:'flex', alignItems:'center', backgroundColor:bgColor}}>
       <Picker style={{height: 50, width: 100}}
        selectedValue={color}
        onValueChange={(itemValue, itemIndex)=> {
          setColor(itemValue)
          console.log(color)
          setBgColor(itemValue)
        }}
       >
           <Picker.Item label="colour 1" value="#DAB" />
           <Picker.Item label="colour 2" value="#ACD" />
           
       </Picker>
       
    </View>
  )
}
export default Middle;
