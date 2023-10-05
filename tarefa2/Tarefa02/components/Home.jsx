// Home.js
import React from 'react';
import { View, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button
        title="IMC"
        onPress={() => navigation.navigate('IMC')}
      />
      <Button
        title="Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
};

export default Home;
