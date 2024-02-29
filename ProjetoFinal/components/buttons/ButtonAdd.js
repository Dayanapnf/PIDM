import React from "react";
import {View,Text} from 'react-native'
import styleButtonAdd from "./styleButtonAdd";
import {Entypo} from '@expo/vector-icons'

const ButtonAdd = ({focused, size, color}) => {
    return(
        <View style={styleButtonAdd.container}>
            <Entypo name="plus" size={size} color={focused ? '#fff' : '#121212'}/>
        </View>
    )
}

export default ButtonAdd