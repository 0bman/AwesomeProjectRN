import React, { useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Navigation } from 'react-native-navigation'

import { goToTabs } from '../../navigator'

import styles from './styles'

const Login = (props) => {
  const [username, setUsername] = useState('')

  const login = async () => {
    if (username) {
      await AsyncStorage.setItem('username', username)
      goToTabs(username)
    }
  }

  const goToForgotPassword = (): void => {
    Navigation.push(props.componentId, {
      component: {
        name: 'ForgotPasswordScreen'
      }
    })
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Enter your username</Text>
            <TextInput
              onChangeText={(val: string) => setUsername(val)}
              style={styles.textInput}
            />
          </View>

          <Button title="Login" color="#0064e1" onPress={login} />
          <TouchableOpacity onPress={goToForgotPassword}>
            <View style={styles.center}>
              <Text style={styles.link_text}>Forgot Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

Login.options = {
  topBar: {
    visible: false
  }
}

export default Login
