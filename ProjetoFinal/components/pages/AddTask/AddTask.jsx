import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import firebase from '../../components/config/FirebaseConfig.js';
import styles from './styles';

const AddTask = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('Pendente');

  const lidarComSalvarTarefa = async () => {
    // Verifique se todos os campos foram preenchidos
    if (!titulo || !descricao || !status) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    try {
      // Salve os dados no Firestore
      const novaTarefaRef = await firebase.firestore().collection('Tasks').add({
        titulo,
        descricao,
        status,
      });

      // Resetar os campos após salvar
      setTitulo('');
      setDescricao('');
      setStatus('Pendente');

      // Obtém o ID da nova tarefa
      const novaTarefaId = novaTarefaRef.id;

      // Navegar para a tela "Home" e passar o ID da nova tarefa como parâmetro
      navigation.navigate('Home', { novaTarefaId });
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
      // Adicione lógica para lidar com erros, se necessário
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>Título:</Text>
      <TextInput
        style={styles.entrada}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título da tarefa"
      />

      <Text style={styles.rotulo}>Descrição:</Text>
      <TextInput
        style={styles.entrada}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição da tarefa"
      />

      <Text style={styles.rotulo}>Status:</Text>
      <Picker
        style={styles.entrada}
        selectedValue={status}
        onValueChange={(valor) => setStatus(valor)}
      >
        <Picker.Item label="Pendente" value="Pendente" />
        <Picker.Item label="Concluída" value="Concluída" />
        {/* Adicione mais status conforme necessário */}
      </Picker>

      <Button title="Salvar Tarefa" onPress={lidarComSalvarTarefa} />
    </View>
  );
};

export default AddTask;
