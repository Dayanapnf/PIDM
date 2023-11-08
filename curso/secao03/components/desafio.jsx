import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const Desafio = () => {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [sexo, setSexo] = useState('Masculino');
  const [limite, setLimite] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const onSliderValueChange = (value) => {
    setLimite(value);
  };

  const handleAbrirConta = () => {
    if (nome === '' || idade === '' || limite === 0) {
        Alert.alert('Preencha todos os campos', 'Por favor, preencha todos os campos antes de abrir a conta.');
        return;
      }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={(text) => setNome(text)} />
      <Text>Idade</Text>
      <TextInput style={styles.input} placeholder="Digite sua idade" value={idade} onChangeText={(text) => setIdade(text)}/>
      <Picker selectedValue={sexo} onValueChange={(itemValue) => setSexo(itemValue)}>
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>
      <Text style={{ marginTop: 10 }}>Limite: {limite.toFixed(2)}</Text>
      <Slider
        style={{ marginTop: 0 }}
        minimumValue={0}
        maximumValue={10000000}
        minimumTrackTintColor="#025463"
        maximumTrackTintColor="#000000"
        onValueChange={onSliderValueChange}
        value={limite}
      />
      <TouchableOpacity onPress={handleAbrirConta} style={{ backgroundColor: '#025463', padding: 10, borderRadius: 5, alignItems:'center' }}>
        <Text style={{ color: 'white' }}>Abrir Conta</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>Resumo dos Dados do Cliente:</Text>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Sexo: {sexo}</Text>
            <Text>Limite: {limite.toFixed(2)}</Text>
            <TouchableOpacity onPress={closeModal} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5, marginTop: 10 }}>
              <Text style={{ color: 'white' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Desafio;
