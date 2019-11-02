/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View,Text, Switch} from 'react-native';
import Topstyle from '../styles/Topstyle';



function Top(){
    const [bgColor, setbgColor] = useState("white");
    const [textColor, settextColor] = useState("black");
    const [stateName, setstateName] = useState("daymode");
    const [count, setCount] = useState(0);

    
   

  return (
    <View style={{width:'100%', height:'33%', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:bgColor}}>
        <Switch 
        onChange={()=>{
            setCount(count + 1);
            if(count % 2 !== 0){
                setbgColor("black");
                settextColor("white");
                setstateName("Dark Mode");
            }
            if(count % 2 == 0){
                setbgColor("white");
                settextColor("black");
                setstateName("Day Mode");
            }
        }}
        />

        <Text style={{color:textColor}}>{stateName}</Text>
    </View>
    
  )
}
export default Top;
