import { StyleSheet, View, Text, Image, Button } from "react-native";
import { useState } from "react";

const Questao01 = () => {
  const [imagem, setImagem] = useState(true);

  return (
    <View>
      <View style={estilo.imagemContainer}>
        <Image
          style={estilo.imagem}
          source={
            imagem
              ? { uri: "https://reactnative.dev/docs/assets/p_cat2.png" }
              : { uri: "https://reactnative.dev/img/tiny_logo.png" }
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
      <Text style={estilo.nome}>Dayana Priscilla N F Costa</Text>
      <Text style={estilo.cidade}>Recife - PE</Text>
      <Text style={estilo.curso}>SI - 8º semestre</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  imagemContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  cidade: {
    textAlign: "center",
  },
  curso: {
    color: "red",
    textAlign:'center'
  },
  imagem: {
    width: 100,
    height: 100,
  },
});

export default Questao01;
