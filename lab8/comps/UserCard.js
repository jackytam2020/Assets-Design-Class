import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Button} from 'react-native';
import UserEdit from './userEdit';

function UserCard({id,email,password,hash, ReadUsers}){
    const [showEdit, setShowEdit] = useState(false);
    return (
        <View>
            <Text>{id}</Text>
            <Text>{email}</Text>
            <Text>{password}</Text>
            <Text>{hash}</Text>
            {
                (showEdit) ? <UserEdit id={id} email={email} ReadUsers={ReadUsers} /> : null
            }
            <Button 
                title="Edit"
                onPress={()=>{
                    setShowEdit(!showEdit);
                }}
            />
            
        </View>
    )
}

export default UserCard;