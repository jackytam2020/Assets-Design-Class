
import React, {useState, useEffect} from 'react';
import {View,Text, Button, TextInput, AsyncStorage, Image, ScrollView, Animated, InteractionManager} from 'react-native';

function ImageCard(props){
    const [dim] = useState(new Animated.Value(50))

    var newdim = dim.interpolate({
        inputRange:[50,75,90,150,300],
        outputRange:[50,300,50,1000,300]
    })
    return(
        <View>
            <Text>{props.title}</Text>
            <Animated.View style={{width:newdim, height:newdim}}>
                <Image source={{uri:props.url}} style={{width:"100%", height:"100%"}} />
            </Animated.View>
            <Button
                title="expand"
                onPress={()=>{
                    Animated.timing(
                        dim,
                        {
                            toValue:300,
                            duration:1000
                        }
                    ).start();

                    InteractionManager.runAfterInteractions(()=>{
                        Animated.timing(
                            dim,
                            {
                                toValue:50,
                                duration:1000,
                                delay:1000
                            }
                        ).start();
                    });
                }}
            />
        </View>
    )
}


function Main(){
    console.log("in main");
    const [name, setName] = useState("")
    const [img, setImg] = useState([]);

    /*
    function handleButton(){

    } */

    const handleButton = async()=>{
        //load animation
        await AsyncStorage.setItem('name', name);
        //stop the loading animation 
    }

    const getName = async()=>{
        var a_name = await AsyncStorage.getItem('name')
        console.log(a_name);
        if(a_name !=null && a_name !==""){
            setName(a_name);
        }
    }
    const getCats = async()=>{
        var resp = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10");
        var json = await resp.json();
        console.log(json)
        setImg(json)
    }
// use useEffect for onLoad
    useEffect(()=>{
        getName()
        getCats()
    },[]);
    useEffect(()=>{
        //when name is updated, run this script
    },[name])
    
    /*
    var imgComps= [];
    for (var i=0; i<img.length; i++){
        imgComps.push(
            <Image source={{uri:img[i].url}} style={{width:50,height:50}} />
        )
    }; */

    /*
    var imgComps = img.map((obj,index)=>{
        return <Image source={{uri:obj.url}} style={{width:50,height:50}} />
    }); */

  return (
    
    <View>
        <TextInput
            placeholder="type name here"
            onChangeText={(text)=>{
                setName(text)
            }}
        />
        <Button 
            title="Store name"
            onPress={()=>{
                console.log('pressed');
                handleButton();
            }}
        />
        <Text>hi {name}</Text>
        <View>
        <ScrollView>
            <View>
            {
            //  (img !=null) ? <Image source={{uri:img}} style={{width:100, height:100}} /> : null
            }
            {
                img.map((obj,index)=>{
                    return <ImageCard
                        title={"Image Cards"+ (index+1)}
                        url={obj.url}
                    />
                })
            }
            </View>
        </ScrollView>    
        </View>
    </View>
  )
};



export default Main;
