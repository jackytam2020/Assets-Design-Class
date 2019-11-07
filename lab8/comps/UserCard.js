import React, {useState, useEffect} from 'react';
import {View, Text, Animated} from 'react-native';

function UserCard({id,email,password,hash}){
    return (
        <View>
            <Text>{id}</Text>
            <Text>{email}</Text>
            <Text>{password}</Text>
            <Text>{hash}</Text>
        </View>
    )
}

export default UserCard;