import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Questao01 from './components/tarefa01/Questao01';
import Questao03 from './components/tarefa01/Questao03';


export default function App() {
  return (
    <View style={styles.container}>
      <Questao01/>
      <Questao03 cor="blue"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
