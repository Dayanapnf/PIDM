import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../components/style";

const Cronometro = () => {

  const [numero, setNumero] = useState(0.0);
  const [intervalId, setIntervalId] = useState(null);
  const [ botaoTexto, setBotaoTexto] = useState('VAI')

  const iniciarCronometro = () => {
    if(intervalId == null){
        const id = setInterval(() => {
        setNumero((numero) => numero + 0.1);
        }, 100);
        setIntervalId(id);
        setBotaoTexto("PAUSAR")
    }else {
        clearInterval(intervalId)
        setIntervalId(null)
        setBotaoTexto("VAI")
    }
  };
  const limparCronometro = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    setNumero(0.0);
    setIntervalId(null)
    setBotaoTexto("VAI")
  };

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Image style={styles.img} source={require("../src/cronometro.png")} />
        <Text style={styles.txt}>{numero.toFixed(1)}</Text>
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciarCronometro}>
          <Text style={styles.btntxt}>{botaoTexto}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limparCronometro}>
          <Text style={styles.btntxt}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cronometro;
