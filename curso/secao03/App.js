import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './components/style';
import ScrollViewTeste from './components/scrollView';
import FlatListTeste from './components/flatList';
import Desafio from './components/desafio';

//<ScrollViewTeste/>
// <FlatListTeste/>

export default function App() {
  return (
    <View style={styles.container}>
      <Desafio/>
    </View>
  );
}

