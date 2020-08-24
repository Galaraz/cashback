import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import InvestimentosRecomendados from './investimentos_recomendados.png'
import ameImage from './ame.png'
import pickpayImage from './pickpay.png'
import mercadoPagoImage from './mercadopago.png'
import rappiImage from './rappi.png'

import perfilImage from './perfil.png'
import carteirasImage from './carteiras.png'
import bancosImage from './bancos.png'

// import { Container } from './styles';

const Principal = () => {
  return <ScrollView>
      <View style={styles.menu}></View>

      <View style={styles.investimentosContainer}>
        <View>

        <TouchableOpacity style={{flex: 1}}>
            <Text>Perfil</Text>
            <Image source={perfilImage} />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}}>
            <Text>Carteiras</Text>
            <Image source={carteirasImage} />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}}>
            <Text>Bancos</Text>
            <Image source={bancosImage} />
        </TouchableOpacity>

        </View>

        <Image style={styles.invrec} source={InvestimentosRecomendados} />
        
      </View>

      <Text style={styles.texto}>Cash back recomendado</Text>
      <View style={styles.centralizar}>
        <Image style={styles.margin} source={ameImage} />
        <Image style={styles.margin} source={pickpayImage} />
        <Image style={styles.margin} source={mercadoPagoImage} />
        <Image style={styles.margin} source={rappiImage} />
        <Text>Aplicativo desenvolvido pela equipe 13</Text>
      </View>
  </ScrollView>
}

const styles = StyleSheet.create({
    investimentosContainer: {
        flex: 6,
        flexDirection: 'row',
        marginTop: 63,  
    },
    centralizar: {
        alignContent:'center',
        alignItems: 'center'
    },
    margin: {
        marginTop: 40,
    },
    menu: {
        backgroundColor: 'black',
        height: 110,
    },

    invrec: {
        flex: 5,
        width: 200,
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center'      
        // float: 'left'
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
    }
})

export default Principal