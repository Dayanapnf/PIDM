import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cronometro from './components/Cronometro';
import styles from './components/style';
import Questao05 from '../cursoApp01/components/questao05';

export default function App() {
  return (
    <View style = {styles.container}>
      <Questao05/>
    </View>
  );
}


