import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import styles from './styles'

const ForgotPassword = () => {
  const [_email, setEmail] = useState('')

  const sendEmail = async () => {}

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Enter your email</Text>
            <TextInput
              onChangeText={(val: string) => setEmail(val)}
              style={styles.textInput}
            />
          </View>

          <Button title="Send Email" color="#0064e1" onPress={sendEmail} />
        </View>
      </View>
    </View>
  )
}

ForgotPassword.options = {
  topBar: {
    visible: true,
    title: {
      text: 'Forgot Password'
    }
  }
}

export default ForgotPassword
