import React from 'react';
import { TouchableHighlight, View, Text} from 'react-native';

function CustomButton({title, onPress}){
    return (
        <TouchableHighlight onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableHighlight>
    );
}

CustomButton.defaultProps = {
    title: "Default Title",
    onPress: () => {},
};

export default CustomButton;