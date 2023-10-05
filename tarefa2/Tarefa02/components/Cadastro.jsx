// Cadastro.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');

  const handleNomeChange = (text) => {
    setNome(text);
  };

  const handleIdadeChange = (text) => {
    setIdade(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleOkPress = () => {
    // Implemente a lógica para lidar com os dados inseridos
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('E-mail:', email);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Nome"
        onChangeText={handleNomeChange}
        value={nome}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Idade"
        onChangeText={handleIdadeChange}
        value={idade}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="E-mail"
        onChangeText={handleEmailChange}
        value={email}
      />
      <Button title="OK" onPress={handleOkPress} />
    </View>
  );
};

export default Cadastro;
