import React from 'react';
import {View, Text,Image} from 'react-native';
import { url } from 'inspector';

function Page1(){
    return (
        <View>
            <Image 
                source={url('image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381')}
                width="100px"
                height="100px"
            />
        </View>
    )
}

export default Page1;