import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './components/style';
import ScrollViewTeste from './components/scrollView';
import FlatListTeste from './components/flatList';

//<ScrollViewTeste/>

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListTeste/>
    </View>
  );
}

