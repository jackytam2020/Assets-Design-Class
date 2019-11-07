import React,  {useState,  useEffect} from 'react';
import {View,Text,TextInput, Button,} from 'react-native';
import axios from 'axios';
import UserCard from './UserCard'

var email = "";
var password = ""

function  User()  {
    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);

    const CreateUser = async()=>{
        //fetch db to create users
        console.log("email & password");
        var obj = {
            key :"users_create",
            data:{
                email:email,
                password:password
            }
        }
        var r = await axios.post('http://99.199.131.137:3001/post', obj);
        console.log("Create", r.data);
        ReadUsers();
    }

    const ReadUsers = async()=>{
        var obj = {
            key:"users_read",
            data:{}
        }

        var r = await axios.post('http://99.199.131.137:3001/post', obj);
       
        var dbusers = JSON.parse(r.data.body);
        console.log("Read", r.dbusers);
        setUsers(dbusers.data); 
    }

    // when comp loads, read users
    useEffect(()=>{
        ReadUsers();
    },[]);
  return (
    <View>
            <TextInput
                placeholder="email"
                onChangeText={(t)=>{

                }}
                autoCapitalize="none"
            />
            <TextInput
                placeholder="password"
                onChangeText={(t)=>{
                    password = t;
                    if(password.length < 5){
                        setError("Pass too short")
                    } else {
                        setError("Password iss good")
                    }
                }}
                secureTextEntry={true}
            />
            <Text>{error}</Text>
            <Button 
                title="Create User"
                onPress={()=>{
                    CreateUser()
                }}
            />
      {
          users.map((obj,i)=>{
              return <UserCard
                 key={i}
                 id={obj.id}
                 email={obj.email}
                password={obj.password}
                hash={obj.hash}
              />
          })
      }
    </View>
  );
};

export default User;
