import React, {useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import MyImage from './myImage';

function Main(){
const [mainText, setMainText] = useState("Main Comp");
const[textSize, setTextSize]= useState(12);
const [mainStyle, setMainStyle] = useState({
    backgroundColor:'#FAB',
});
const [show, setShow] = useState(1);

var comps = null;

if(show ===1){
    comps = (
        <View>
            <Text style={{fontSize:textSize}}>{mainText}</Text>
            <Button 
                title="click me!"
                onPress={()=>{
                    Alert.alert('Are you sure?');
                    setMainText("newText");
                    setMainStyle({
                        backgroundColor:"#DAB",
                        padding:10,
                        margin:10,
                        borderRadius:10,
                    })
                    setTextSize(textSize+1);
                    setShow(2);
                }}
            />
        </View>
    )
}
if(show === 2){
    comps = <MyImage />
}

    return(
        <View style={mainStyle}>
            {comps}
            
        </View>
    )
}

export default Main;