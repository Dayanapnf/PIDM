// Sobre.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Sobre = ({ navigation }) => {
  return (
    <View>
      <Text>Este aplicativo foi desenvolvido por Dayana Priscilla.</Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Sobre;
