import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Page1 from '../comps/Page1';

function Main(){
    const [showMenu, setShowMenu] = useState(false);

    var menu = null;
    var image = null;
    if(showMenu === true){
        alert("Show the Menu");
        menu = (
            <View>
                <Button
                title="Page 1"
                onPress={()=>{}}
            />
             <Button
                title="Page 2"
                onPress={()=>{}}
            />
            image = (<Page1 />);
            {image}
            </View>
            
        )
    }

    return (
        <View>
            {menu}
            <Text>Main Comp</Text>
            <Button
                title="Show Menu"
                onPress={()=>{
                    setShowMenu(!showMenu);
                }}
            />
        </View>
    )
}
export default Main;