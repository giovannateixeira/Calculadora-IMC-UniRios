import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    resultadoImc: {
        marginBottom: 40,
    },

    informacao: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },

    IMC: {
        backgroundColor: '#DDD',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    mensagemResultado: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    corPBaixo: {
        backgroundColor: '#F2E205',
        fontWeight: "bold",
    },

    corPNormal: {
        backgroundColor: '#03A64A',
        fontWeight: "bold",
    },

    corSobreP: {
        backgroundColor: '#F9BF8F', 
        fontWeight: "bold",
    },

    corObesidade: {
        backgroundColor: '#FF9B09',
        fontWeight: "bold",
    },

    corObesidadeS: {
        backgroundColor: '#FF3737',
        fontWeight: "bold",
    },

    corObesidadeM: {
        backgroundColor: '#FE0000',
        fontWeight: "bold",
    },
});

export default styles;