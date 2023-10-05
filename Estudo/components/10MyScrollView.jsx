import { View, Text, Image, ScrollView } from "react-native";

const imagem = {
  uri: "https://i1.sndcdn.com/artworks-000226907043-hbsu7c-t500x500.jpg",
  width: 240,
  height: 200,
};

const MyScrollView = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", padding: 5 }}>
          Raimundas
        </Text>

        <Image style={{ borderRadius: 20 , marginBottom:5}} source={imagem} />
        <Image style={{ borderRadius: 20 , marginBottom:5}} source={imagem} />
        <Image style={{ borderRadius: 20 , marginBottom:5}} source={imagem} />
        <Image style={{ borderRadius: 20 , marginBottom:5}} source={imagem} />
        <Image style={{ borderRadius: 20 , marginBottom:5}} source={imagem} />
        
      </View>
      
    </ScrollView>
  );
};

export default MyScrollView;
