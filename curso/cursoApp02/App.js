import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cronometro from './components/Cronometro';
import styles from './components/style';

export default function App() {
  return (
    <View style = {styles.container}>
      <Cronometro/>
    </View>
  );
}


