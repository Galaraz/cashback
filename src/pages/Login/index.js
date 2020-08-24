import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';
// import ImgLogo from '../../assets/logo.png'

const Login = () => {
    const [value, onChangeText] = React.useState('');

    const navigation = useNavigation()

    const saveData = async()=>{
        navigation.navigate('Principal',{})
        // const {email,password} = this.state;
        // alert(email)

        //save data with asyncstorage
        // let loginDetails={
        //     email: email,
        //     password: password
        // }

        // if(this.props.type !== 'Login')
        // {
        //     AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

        //     Keyboard.dismiss();
        //     alert("You successfully registered. Email: " + email + ' password: ' + password);
        //     this.login();
        // }
        // else if(this.props.type == 'Login')
        // {
        //     try{
        //         let loginDetails = await AsyncStorage.getItem('loginDetails');
        //         let ld = JSON.parse(loginDetails);

        //         if (ld.email != null && ld.password != null)
        //         {
        //             if (ld.email == email && ld.password == password)
        //             {
        //                 alert('Go in!');
        //             }
        //             else
        //             {
        //                 alert('Email and Password does not exist!');
        //             }
        //         }

        //     }catch(error)
        //     {
        //         alert(error);
        //     }
        // }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#473F96" barStyle="light-content" />

            

            <View style={styles.logoContainer}>
                <Image source={require('./logo.png')} style={styles.imageLogo} />
                <Text style={styles.imgTitle}>CashMoney</Text>
                <Text style={styles.imgSubTitle}>Simples e Fácil</Text>
            </View>


            <View>
            <TextInput style={styles.inputBox}
                onChangeText={(email) => onChangeText({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#ecf0f1"
                selectionColor="#fff"
                keyboardType="email-address"
                // onSubmitEditing={()=> this.password.focus()}
                />
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => onChangeText({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ecf0f1"
                // ref={(input) => this.password = input}
                />
 
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={saveData}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        display: 'flex',
        flex: 1
    },

    logoContainer: {
        marginHorizontal: 15,
        marginTop: 110,
        marginBottom: 25,
        justifyContent:'space-between',
        alignItems:'center'
    },

    imgTitle: {
        color: '#ecf0f1',
        fontWeight: 'bold',
        fontSize: 20
    },

    imgSubTitle: {
        color: '#ecf0f1',
        fontWeight: 'bold',
        fontSize: 12  
    },

    inputBox: {
        color: 'black',
        backgroundColor: 'white',
        height: 50,
        marginTop: 20,
    },

    buttonText: {
        marginTop: 30,
        paddingTop: 15,
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
    }

})

export default Login;