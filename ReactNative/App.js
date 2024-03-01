import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Primeiro from './src/components/Primeiro';
import { Comp, Comp1, Comp2 } from './src/components/Multi';
import MinMax from './src/components/MinMax';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá!</Text>
      <Primeiro />
      <Comp />
      <Comp1 />
      <Comp2 />
      <MinMax min={20} max={50} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
