import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const MyTextInput = () => {
    //criando varivel de estado
    // VALORES PADRÕES
        //string : ("")
        //numeric: (0)
        //boolean: (false)
    const[frase, setfrase] = useState("")

  return(
    <View style= {estilos.view}>
        <Text style= {estilos.header}>Tradutor Emoji</Text>
        <TextInput 
            style = {estilos.input}
            placeholder="Digite seu nome!" 
            defaultValue={frase} 
            onChangeText={(textoDigitado) => setfrase(textoDigitado)} 
        />
        <Text style={estilos.frase}>
            {
                frase
                .split(" ")
                .map((palavra) => palavra && "🌵" )
                .join(" - ")


                
            }
        </Text>

    </View>
  )
};

const estilos = StyleSheet.create({
    header: {
        fontSize:50,
        fontWeight: "bold",
        color: "red",
        padding: 5,
    },
  view: {
    flex:1,
    padding: 20,
    backgroundColor: "#C0C0C0",
    alignItems: "center",
 
  },
  input: {
    height: 50,
    borderColor: "black",
    borderWidth: 2,
    fontSize: 22,
    paddingLeft: 10,
  },
  frase:{
    fontSize: 30,
    fontWeight:"bold",
    paddingTop: 20,
  }
});

export default MyTextInput;
