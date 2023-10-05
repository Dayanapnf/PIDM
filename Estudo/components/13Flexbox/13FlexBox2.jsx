import { View, Text, StyleSheet , TouchableHighlight, Alert} from "react-native";

const MyFlexBox2 = () => {

    const onPressButton = ()=> {
        Alert.alert('You tapped the button!');
    }

    const onLongPressButton = ()=> {
        Alert.alert('You long-pressed the button!');
    }

  return (
    <View style={estilos.container}>
        <TouchableHighlight
            onPress={onPressButton}
            onLongPress={onLongPressButton}
            underlayColor="white"
            delayLongPress={3000}
        >
            <View style={estilos.button}>
                <Text style={estilos.buttonText}>Touchable with Long Press</Text>
            </View>
        </TouchableHighlight>
         
        <View style={estilos.container}>
            <View style={estilos.view1}></View>
            <View style={estilos.view2}></View>
            <View style={estilos.view3}></View>
        </View>
    </View>
    
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "lightgray",
    flexDirection:"row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",

  },
  view1: {
    backgroundColor: "powderblue",
    width: 100,
    height: 100,
  },
  view2: {
    backgroundColor: "skyblue",
    width: 100,
    height: 100,
    alignSelf: "center", //alignSelf faz o filho desobeder o pai
  },
  view3: {
    backgroundColor: "steelblue",
    width: 100,
    height: 100,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
},
buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
},
});

export default MyFlexBox2;
