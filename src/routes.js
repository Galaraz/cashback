import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Principal from './pages/Principal'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Perfil" component={Perfil}/>
                <AppStack.Screen name="Principal" component={Principal}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}