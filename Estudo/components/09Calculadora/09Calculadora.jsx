import { View, Text, Button, StyleSheet, TextInput, Pressable } from "react-native";
import estilos from "./09CSS";
import { useState } from "react";
import MyPressable from "./09MyPressable";

const Calculadora = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  function somar() {
    setResult(parseInt(number1) + parseInt(number2));
  }
  function subtrair() {
    setResult(parseInt(number1) - parseInt(number2));
  }
  function mult() {
    setResult(parseInt(number1) * parseInt(number2));
  }
  function div() {
    const res = (parseInt(number1) / parseInt(number2));
    setResult(res.toFixed(4))
}

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}> Calculadora </Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite o número"
        onChangeText={(valor1) => setNumber1(valor1)}
        keyboardType="numeric"
      />
      <TextInput
        style={estilos.input}
        placeholder="Digite o número"
        onChangeText={(valor2) => setNumber2(valor2)}
        keyboardType="numeric"
      />

      <View style={estilos.pressable}>
        
        {/*
        <Button title="+" onPress={somar} />
        <Button title="-" onPress={subtrair} />
        <Button title="/" onPress={div} />
        <Button title="*" onPress={mult} />
        */}

        <MyPressable funcao={somar} titulo={"+"}/>
        <MyPressable funcao={subtrair} titulo={"-"}/>
        <MyPressable funcao={div} titulo={ "/" }/>
        <MyPressable funcao={mult} titulo={"*"}/>

      </View>
      <Text style={estilos.header}>Resultado: {result}</Text>
    </View>
  );
};

export default Calculadora;
