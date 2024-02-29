import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import firebase from '../../components/config/FirebaseConfig.js';


const Home = ({ route }) => {
  const [tarefas, setTarefas] = useState([]);
  const { novaTarefaId } = route.params || {}; // Obtém o ID da nova tarefa, se disponível

  const carregarTarefas = useCallback(async () => {
    try {
      const snapshot = await firebase.firestore().collection('tarefas').get();
      const tarefas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTarefas(tarefas);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      // Adicione lógica para lidar com erros, se necessário
    }
  }, []);

  useEffect(() => {
    carregarTarefas();
  }, [carregarTarefas, novaTarefaId]);

  // Restante do código...

  return (
    <View>
      <Text>Sua Lista de Tarefas:</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
