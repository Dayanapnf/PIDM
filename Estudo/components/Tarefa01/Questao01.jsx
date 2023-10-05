import { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const Questao01 = () => {
  const [imagem, setImagem] = useState(true);

  return (
    <View style={estilos.container}>
        
      <View>
        <Image
          style={styles.tinyLogo}
          source={
            imagem
              ? { uri: "https://reactnative.dev/img/tiny_logo.png" }
              : { uri: "https://reactnative.dev/docs/assets/p_cat2.png" }
          }
        />
      </View>

      <View>
        <Button
          title="Clique Aqui!"
          onPress={() => {
            setImagem(!imagem); // mudando o valor do estado
          }}
        />
      </View>

      <Text style={estilos.nome}> Dayana Priscilla </Text>
      <Text> Recife - PE </Text>
      <Text style={estilos.curso}> SI - 8° Semestre </Text>

    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  nome: {
    fontSize: 14,
    fontWeight: "bold",
  },
  curso: {
    color: "red",
  },
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin:10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Questao01;
