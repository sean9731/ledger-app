import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ( {navigation} ) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light'/>
    <View>
      <Text>Register Screen</Text>
    </View>        
    </KeyboardAvoidingView>

  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{

    }
})