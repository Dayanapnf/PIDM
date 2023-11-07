import { View, ScrollView } from "react-native";
import styles from "./style";

const ScrollViewTeste = () => {
  return (
    <View >
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style={styles.box01}></View>
        <View style={styles.box02}></View>
        <View style={styles.box03}></View>
        <View style={styles.box04}></View>
        <View style={styles.box05}></View>
        <View style={styles.box01}></View>
        <View style={styles.box02}></View>
        <View style={styles.box03}></View>
        <View style={styles.box04}></View>
        <View style={styles.box05}></View>
      </ScrollView>
    </View>
  );
};

export default ScrollViewTeste;
