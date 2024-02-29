import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

const Questao05 = () => {
  

  return (
    <View style={styles.container}>

        <Text style={styles.conteudo}>titulo</Text>
        <View style={styles.containerImg}>
            <Image
            style={styles.imagem}
            source={require('../src/biscoitoAberto.svg')}
            />
        </View>

        <Text style={styles.conteudo}>nomeEsobrenome</Text>
        <Text style={styles.conteudo}>idade</Text>
        <Text style={styles.conteudo}>curso</Text>
        <View style={styles.conteudoArea}>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.btnArea}>
                <Text style={styles.btnText}>voltar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} >
                <View style={styles.btnArea}>
                <Text style={styles.btnText}>editar</Text>
                </View>
            </TouchableOpacity>

        </View>
        
    </View>
  );
};

export default Questao05;
