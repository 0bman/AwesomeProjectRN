import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  newsItem: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  },
  newsText: {
    flex: 2,
    flexDirection: 'row',
    padding: 15
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'georgia'
  },
  newsPhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width: 120,
    height: 120
  }
})

export default styles
