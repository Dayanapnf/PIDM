import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import biscoitoDaSorteStyle from "./style";
import frasesBiscoitoDaSorte from "./frasesBiscoitoDaSorte";

const BiscoitoDaSorte = () => {
  const [frase, setFrase] = useState("");
  const [ img, setImg] = useState(false);


  // Função para escolher uma frase aleatória
  const sortearFrase = () => {
    const fraseAleatoria =
      frasesBiscoitoDaSorte[
        Math.floor(Math.random() * frasesBiscoitoDaSorte.length)
      ];
    setFrase(`"${fraseAleatoria}"`);
  };

   // Função para alterar a imagem e chaamr a função sortearFrase
  const alterarBiscoito = () => {
    setImg(true);
    sortearFrase();
  }

  return (
    <View style={biscoitoDaSorteStyle.container}>
      <View style={biscoitoDaSorteStyle.containerImg}>
        <Image
          style={biscoitoDaSorteStyle.imagem}
          source={img ? require('../src/biscoitoAberto.svg') : require('../src/biscoito.svg')}
        />
      </View>
      <View style={biscoitoDaSorteStyle.conteudoArea}>
        <Text style={biscoitoDaSorteStyle.conteudo}>{frase}</Text>
      </View>
      <TouchableOpacity style={biscoitoDaSorteStyle.btn}  onPress={alterarBiscoito}>
        <View style={biscoitoDaSorteStyle.btnArea}>
          <Text style={biscoitoDaSorteStyle.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BiscoitoDaSorte;
