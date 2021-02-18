import React from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { goToLogin } from 'src/navigator'
import styles from './styles'

interface Props {
  username: string
}

const Home = ({ username }: Props): JSX.Element => {
  const logout = async () => {
    await AsyncStorage.removeItem('username')
    goToLogin()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi {username}!</Text>
      <Button onPress={logout} title="Logout" color="#841584" />
    </View>
  )
}

export default Home
