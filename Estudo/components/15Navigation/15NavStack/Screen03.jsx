import {View, Text, Button} from "react-native"
import estilos from "./MyStyle"

const Screen03 = ({navigation}) => {
    return(
        <View style={estilos.container}>
            <Text style={estilos.header}>
                Screen 03
            </Text>

            <Button
                title="Ir para Tela 01"
                onPress= {() => navigation.popToTop()}
            />
        </View>
    )
}

export default Screen03