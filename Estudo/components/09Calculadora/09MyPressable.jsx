import { Pressable, View,Text } from "react-native"
import estilos from "./09CSS"


const MyPressable = ({funcao , titulo}) => {

    return(
        <View>
            <Pressable
                onPress={funcao}
                style={
                    ({pressed})=>[
                        {
                        backgroundColor: pressed? 'rgb(210, 230, 255)' : '#2196f3',
                        padding: 5 ,
                        borderRadius: 2,  
                        width: 40,
                        height:40,
                        alignItems:"center",
                        justifyContent:"center",
                        margin: 5,
                        }
                    ]
                }
            >

            <Text style={estilos.textBtn}>{titulo}</Text>
            </Pressable>
                
    
        </View>
    )
}

export default MyPressable