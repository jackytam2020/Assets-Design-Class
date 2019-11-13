import React, {useState, useEffect} from 'react';
import {View, Text, Animated, TextInput,Button} from 'react-native';
import axios from 'axios';

function UserEdit({id,email, ReadUsers}){
    const [new_email, setNewEmail] = useState("");

    useEffect(()=>{
        setNewEmail(email);
    }, []);

    const UpdateUser = async()=>{
        var obj = {
            key:"users_update",
            data: {
                id:id,
                email:new_email
            }
        };

        var r = await axios.post('http://localhost:3001/post', obj);
    }
    ReadUsers();

    const DeleteUser = async()=> {
        var obj = {
            key:"users_delete",
            data:{
                id:id
            }
        };
        var r = await axios.post('http://localhost:3001/post', obj);
        ReadUsers();
    }
    return (
        <View>
            <TextInput 
                placeholder="email"
                value={new_email}
                onChangeText={(t)=>{
                    setNewEmail(t)
                }}
            />
            <Button 
                title="UPDATE"
                onPress={()=>{
                    UpdateUser();
                }}
            />
            <Button 
                title="Delete"
                onPress={()=>{
                    DeleteUser()
                    
                }}
            />
        </View>
    )
}

export default UserEdit;