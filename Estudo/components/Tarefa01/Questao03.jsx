import { View, Text, StyleSheet } from "react-native";

const Questao03 = ({ cor }) => {
  const disciplinas = [
    "Lógica para Computação",
    "Fundamentos de Banco de Dados",
    "Dispositivos Móveis",
    "POO",
  ];

  return (
    <View style={estilo.container}>
      {disciplinas.map((disciplina, index) => (
        <Text key={index} style={{ color: cor }}>
          {disciplina}
        </Text>
      ))}
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Questao03;
