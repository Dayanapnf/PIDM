// IMC.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Resultado from './Resultado'; // Importe a tela de resultado

const IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);

  const handlePesoChange = (text) => {
    setPeso(text);
  };

  const handleAlturaChange = (text) => {
    setAltura(text);
  };

  const handleCalcularIMC = () => {
    // Implemente o cálculo do IMC aqui
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat === 0) {
      alert('Peso e altura devem ser números válidos e altura não pode ser zero.');
      return;
    }

    const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);
    setIMC(imcCalculado);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Peso (kg)"
        onChangeText={handlePesoChange}
        value={peso}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Altura (m)"
        onChangeText={handleAlturaChange}
        value={altura}
      />
      <Button title="Calcular IMC" onPress={handleCalcularIMC} />
      {imc !== null && <Resultado imc={imc} />} {/* Renderiza a tela de resultado se o IMC estiver disponível */}
    </View>
  );
};

export default IMC;
