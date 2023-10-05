// Resultado.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Resultado = ({ imc }) => {
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do Peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso Normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade Grau I';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade Grau II';
  } else {
    classificacao = 'Obesidade Grau III';
  }

  return (
    <View>
      <Text>Seu IMC é: {imc.toFixed(2)}</Text>
      <Text>Classificação: {classificacao}</Text>
      <Button title="Voltar para Home" onPress={() => console.log('Voltar para Home')} />
    </View>
  );
};

export default Resultado;
