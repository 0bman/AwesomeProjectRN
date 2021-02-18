import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationFunctionComponent } from 'react-native-navigation'

import { goToLogin, goToTabs } from 'src/navigator'
import styles from './styles'

const Loading: NavigationFunctionComponent = () => {
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
