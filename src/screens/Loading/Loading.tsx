import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

import { goToLogin, goToTabs } from '../../navigator'

const Loading: React.FC = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const username = await AsyncStorage.getItem('username')

      if (username) {
        goToTabs(username)
      } else {
        goToLogin()
      }
    }

    fetchUser()
  }, [])

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export default Loading
