// import { AppRegistry } from 'react-native'
// import App from './App'
// import { name as appName } from './app.json'

// AppRegistry.registerComponent(appName, () => App)

import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Loading from './src/screens/Loading'

Icon.loadFont()

Navigation.registerComponent('LoadingScreen', () => Loading)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'LoadingScreen'
      }
    }
  })
})
