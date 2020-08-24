import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

import ModalFilter from '../Modal'

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [filterValue, setFilterValue] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        async function loadCountries(){
            const response = await api.get('/summary')
            setCountries(response.data.Countries)
        }
        loadCountries()
    },[])

    const navigation = useNavigation()

    function navigateToDetail(){
        if(!filterValue){
            Alert.alert('Atenção !','Selecione um pais para verificar os casos de covid-19 correspondente')
        }else{
            navigation.navigate('Detail',{
                data:countries,
                filter:filterValue
            })
        }
    }

    function habilitaModal(){
        setModalVisible(true)
        console.log(modalVisible)
    }

    function desabilitaModal(){
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#473F96" barStyle="light-content" />

            <View style={styles.boxFilter}>
                <Text style={styles.boxFilterTitle}>Home</Text>
            </View>
            
            <TouchableOpacity style={styles.filtrar} onPress={()=>navigateToDetail()    }>
                <Text style={styles.filtrarText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        height: 130,
    },

    boxFilter: {
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    boxFilterTitle: {
        color: '#ecf0f1',
        fontWeight: 'bold',
        fontSize: 20
    },

    boxInformation: {
        marginHorizontal: 15,
    },

    boxFilterButton:{
        width:75,
        height:30,
        borderRadius:15,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:3
    },

    boxFilterButtonText:{
        color:'#34495e',
        fontWeight:'bold'
    },  

    boxInformationTitle: {
        color: '#ecf0f1',
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold'
    },

    boxInformationDescription: {
        color: '#d1d1d1',
        fontSize: 12
    },

    filtrar: {
        backgroundColor: '#FD5858',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 8,
        alignSelf: 'flex-end',
        marginRight: 20
    },

    filtrarText: {
        color: '#fff',
        fontWeight: 'bold'
    }

})

export default Header