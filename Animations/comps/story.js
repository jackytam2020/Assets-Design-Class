import React from 'react';
import {} from 'react-native';

import { storiesOf} from '@storybook/react-native';
import CustomButton from './CustomButton';
import Main from './main'

storiesOf("MyCustome Buttons", module)
    .add('first button', ()=>{
        return <CustomButton />
    });

storiesOf("MyCustome Buttons", module)
    .add('The main', ()=>{
        return <Main />
    });