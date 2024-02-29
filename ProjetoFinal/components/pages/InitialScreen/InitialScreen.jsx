import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const InitialScreen = () => {
  const navigation = useNavigation();

  const navigateToAddTask = () => {
    navigation.navigate("AddTask"); 
  };

  return (
    <View>
      <Text>Seu Logo Aqui</Text>
      <Text>Clique aqui para cadastrar sua primeira task</Text>
      <TouchableOpacity onPress={navigateToAddTask}>
        <Text>Cadastrar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InitialScreen;
