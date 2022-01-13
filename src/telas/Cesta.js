import React from 'react';

// Pegando componente que foi exportado do react native
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native'


import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {


    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes da Cesta </Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda} />
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}> Uma cesta com produtos selecionados
                cuidadosamente da fazenda
                direto para a cozinha
            </Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>

    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        fontFamily: "Montserrat"
    },

    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 32,
        color: "white",
        fontWeight: "bold",
        padding: 32
    },

    cesta: {
        paddingVertical: 16,
        paddingHorizontal: 32,

    },

    nome: {
        color: "#464646",
        padding: 6,
        fontSize: 50,
        lineHeight: 42,
        fontWeight: "bold",

    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },


    imagemFazenda: {
        width: 64,
        height: 62,
    },

    nomeFazenda: {
        fontSize: 32,
        lineHeight: 52,
        marginLeft: 24,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 32,
        lineHeight: 52
    },

    preco: {
        padding: 32,
        color: "#2a9b32",
        fontWeight: "bold",
        fontSize: 52,
        lineHeight: 42,
        marginTop: 16
    }
})