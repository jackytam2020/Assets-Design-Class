import React,{useEffect, useState} from 'react';
import { ScrollView, View, Text, Animated, Button} from 'react-native';



function Main(){
    const [op] = useState(new Animated.Value(0));
    const [text, setText] = useState("test");

    useEffect(()=>{
        Animated.timing(
            op,
            {
                toValue:1,
                duration:500
            }
        ).start();

    }, []);


    useEffect(()=>{
        Animated.timing(
            op,
            {
                toValue:0.5,
                duration:500
            }
        ).start();

    }, [text]);
  return (
    <Animated.View style={{flex:1, backgroundColor:'#DAB', opacity:op, justifyContent:'center', alignItems:"center"}}>
        <Text> Opacity is 1 when it loads</Text>
        <Text>{text}</Text>
        <Button
            onPress={()=>{
                setText("New Text")
            }}
            title="Change Text"
        ></Button>
    </Animated.View>
  );
};


export default Main;