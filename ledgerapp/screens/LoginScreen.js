import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button,Image, Input } from "react-native-elements"
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function signIn(params) {
        
    }

    
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style="light"/>
        <Image 
            source={{
                uri: 
                    "https://cdn-icons.flaticon.com/png/512/3958/premium/3958200.png?token=exp=1647757957~hmac=f907394588f4357d194dda1d14ecd16f"
            }}
            style={{width: 150,height: 150,}}
            />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder='Email' 
                    autoFocus type="email" 
                    value={email}
                    onChangeText={(text => setEmail(text))}
                    />
                <Input 
                    placeholder='Password' 
                    secureTextEntry 
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
            </View>
            <Pressable style={styles.button} onPress={signIn(email)} >
                <Text style={styles.text}> Login</Text>
            </Pressable>
            <Pressable style={styles.button} >
                <Text style={styles.text} onPress={() => navigation.navigate("Register")}> Register</Text>
            </Pressable>
            <View style={{height: 100 }}/>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff'        
    },
    inputContainer: {
        width: 300,
    },
    button: {
        backgroundColor:"#F6D076",
        width: 280,
        height: 40,
        marginTop: 10,
        borderRadius:99

    },
    text: {
        paddingTop: 10,
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

})
