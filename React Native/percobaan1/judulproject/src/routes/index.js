import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/home';

const Stack = createNativeStackNavigator();

const routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />        
        </Stack.Navigator>
    )
}

export default routes

const styles = StyleSheet.create({})