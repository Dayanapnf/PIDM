import { View, Text, TextInput,Button, StyleSheet } from "react-native";
import { useState } from "react";

const JuntarFrases = () => {

    const[nome, setnome] = useState("")
    const[sobrenome, setsobrenome] = useState("")
    const[nomeCompleto, setnomeCompleto] = useState("")
    return(
        <View style= {estilos.view}>
            <Text style={estilos.header}> Juntar Frases </Text>
            <TextInput 
              style={estilos.input}
              placeholder="Primeiro Nome"
              defaultValue={nome}
              onChangeText={(nomeDigitado) => setnome(nomeDigitado)}
            />
        
            <TextInput 
              style={estilos.input}
              placeholder="SobreNome"
              defaultValue={sobrenome}
              onChangeText={(sobrenomeDigitado) => setsobrenome(sobrenomeDigitado)}
            />
            <View style={estilos.view}>
              <Button
                style={estilos.button}
                title="Juntar"
                onPress={ () =>{
                    setnomeCompleto(nome + " " + sobrenome + "🌵")
                  }
                 }
                />
              
            </View>
            <Text style= {estilos.frase}> Resultado: {nomeCompleto} </Text>
            
        </View>
    )
};

const estilos = StyleSheet.create({
  header: {
    fontSize:50,
    fontWeight: "bold",
    color: "blue",
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
  },
  button:{
    padding: 20,
    margin: 40,
  },
});

export default JuntarFrases;