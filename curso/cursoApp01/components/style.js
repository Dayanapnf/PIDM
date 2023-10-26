import { StyleSheet } from "react-native";


const biscoitoDaSorteStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    imagem: {
        width: 200,
        height: 200,
    },
    conteudo: {
        fontSize: 20,
        color: '#db8e4b',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    conteudoArea: {
        marginTop:30,
        width: 300,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
        width: 250,
        height: 50,
        borderRadius: 20,
        borderColor: '#db8e4b',
        borderWidth: 1,
        padding: 10 ,
        marginTop: 50,
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#db8e4b',
    },
    containerImg: {
        borderRadius: 20,
        borderColor: '#db8e4b',
        borderWidth: 2,
        padding:50,
    },
});

export default biscoitoDaSorteStyle;