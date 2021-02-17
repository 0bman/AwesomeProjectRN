import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './screens/Home'
import Login from './screens/Login'
import ForgotPassword from './screens/ForgotPassword'
import Feed from './screens/Feed'
import Gallery from './screens/Gallery'

Navigation.registerComponent('LoginScreen', () => Login)
Navigation.registerComponent('ForgotPasswordScreen', () => ForgotPassword)
Navigation.registerComponent('HomeScreen', () => Home)
Navigation.registerComponent('FeedScreen', () => Feed)
Navigation.registerComponent('GalleryScreen', () => Gallery)

const iconColor = '#444'
const selectedIconColor = '#0089da'

const goToLogin = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'stackMain',
        children: [
          {
            component: {
              name: 'LoginScreen'
            }
          }
        ]
      }
    }
  })

const goToTabs = async (username: any) => {
  const homeImg = await Icon.getImageSource('home', 30)
  const imageImg = await Icon.getImageSource('image', 30)
  const rssSquareImg = await Icon.getImageSource('rss-square', 30)

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomTabsMain',
        children: [
          {
            component: {
              name: 'HomeScreen',
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'Home',
                  icon: homeImg,
                  iconColor,
                  selectedIconColor
                }
              },
              passProps: {
                username
              }
            }
          },

          {
            component: {
              name: 'GalleryScreen',
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'Gallery',
                  icon: imageImg,
                  iconColor,
                  selectedIconColor
                }
              }
            }
          },

          {
            component: {
              name: 'FeedScreen',
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'Feed',
                  icon: rssSquareImg,
                  iconColor,
                  selectedIconColor
                }
              }
            }
          }
        ]
      }
    }
  })
}

export { goToTabs, goToLogin }
