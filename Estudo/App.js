import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyTextInput from "./components/07TextInput/07TextInput";
import JuntarFrases from "./components/08JuntarFrases";
import Calculadora from "./components/09Calculadora/09Calculadora";
import Questao01 from "./components/Tarefa01/Questao01";
import Questao03 from "./components/Tarefa01/Questao03";
import MyScrollView from "./components/10MyScrollView";
import MyFlatList from "./components/11MyFlatList";
import MySectionList from "./components/12MySectionList";
import MyFlexBox1 from "./components/13Flexbox/13FlexBox1";
import MyFlexBox2 from "./components/13Flexbox/13FlexBox2";
import MyNetworking from "./components/14Networking/14MyNetworking";
import MainScreen from "./components/15Navigation/15NavStack/MainScreen";
import PokemonApp from "./components/16Pokemon/PokemonApp";
import Questao01App from "./components/Ap1/Questao01App";

export default function App() {
  return (
    //<MyTextInput/>
    //<JuntarFrases/>
    //<Calculadora />
    
    /*<View style={styles.container}>
       <Questao01 />
       <Questao03 cor = "purple" />
    </View>*/
    //<MyScrollView/>
    
    //<MyFlatList/>
    //<MySectionList/>

   // <MyFlexBox1/>
   // <MyFlexBox2/>
   //<MyNetworking/>

   //<MainScreen/>

   //<PokemonApp/>

   <Questao01App/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "center",
  },
});
