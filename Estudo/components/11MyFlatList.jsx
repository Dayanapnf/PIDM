import { View, Text, FlatList } from "react-native"

const dados = [
    {key:1 , nome: "Dayana", nota:10},
    {key:2 , nome: "Felipe", nota:7},
    {key:3 , nome: "Galileu", nota:10},
    {key:4 , nome: "Cauã", nota:10},

]

const dados2 = [
    {nome:"Fulano",nota:10},
    {nome:"Sicrano",nota:10},
    {nome:"Beltrano",nota:10}
]



const MyFlatList = () => {

    return(
        <View
            style={{
                flex:1,
                justifyContent: "flex-start",
                alignItems: "center" ,
                padding:5,
                marginTop:10,
            }}
        >
        <FlatList
            data = {dados}
            renderItem={
                ({item}) => {
                    return(
                        <View>
                            <Text style={{fontSize:25, fontWeight:"bold"}}>
                                {item.nome} - {item.nota}
                            </Text>
                        </View>
                    )
                }
            }

            keyExtractor={
                (elemento)=>{
                    return elemento.nome + elemento
                }
            }
        
        />

        </View>

    )
}

export default MyFlatList