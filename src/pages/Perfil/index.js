import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Perfil = () => {
  return <View>
      <View style={styles.menu}>

      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Meu Saldo</Text>
        <Text style={styles.saldo}>R$1895,43</Text>
        <Text style={styles.title}>CashBack Disponivel</Text>
        <Text>R$236,65</Text>
        <TouchableOpacity><Text>Retirar</Text></TouchableOpacity>
        <Text style={styles.title}>Meus Investimentos</Text>
        <Text>R$154,23</Text>
      </View>
  </View>
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: 'black',
        height: 110,
    },

    body: {
        alignContent: 'center',
        alignItems: 'center'

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    saldo: {
        fontSize: 50,
    }
})

export default Perfil;