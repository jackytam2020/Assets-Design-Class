import React, {useState, Component} from 'react';
import {View, Text, Button, Image, Slider} from 'react-native';




function MyImage(){
    const [dim, setDim] = useState(50);
    const [value, setValue] = useState(50);
    return (
        <View style={{flexDirection:"row"}}>
            <View>
                <Image
                    source={{url:"https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381"}}
                    style={{width:dim, height:dim}}
                />
                <Button 
                    onPress={()=>{
                        setDim(dim+10);

                    }}
                    title="+"
                />
                <Button 
                    onPress={()=>{
                        setDim(dim-10);
                    }}
                    title="-"
                />
                <Text>{value}</Text>
                <Slider
                    style={{width:200,height:40}}
                    minimumValue={50}
                    maximumValue={150}
                    value={value}
                    step={1}
                    onValueChange={(value)=>{
                        setValue(value)
                        setDim(value)
                    }}
                
                />
            </View>
        </View>    
    )
}

export default MyImage;