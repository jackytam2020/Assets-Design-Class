import React, {useState} from 'react';
import {View,Text, TextInput, Button, Alert, ToastAndroid} from 'react-native';




function Buttom(){
    const [value, setText] = React.useState('send the message here');

  return (
    <View style={{width:'100%', height:'33%', display:'flex', alignItems:'center',flexDirection:'row'}}>
       <TextInput 
            style={{width:'60%', height:40, borderWidth:1, position:'relative'}}
            value={value}
            onChangeText={text => setText(text)}
            
       />
       <Button 
            title="Send"
            onPress={() =>{
                console.log(value)
                ToastAndroid.show(value, ToastAndroid.SHORT);
            }}
       />
    </View>
  )
}
export default Buttom;
