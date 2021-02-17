import React from 'react'
import {
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView
} from 'react-native'

const { width } = Dimensions.get('window')
const baseWidth = width / 2

const images = [
  {
    id: 1,
    src: require('../../images/blake-richard-verdoorn-20063-unsplash.jpg')
  },
  {
    id: 2,
    src: require('../../images/casey-horner-487085-unsplash.jpg')
  },
  {
    id: 3,
    src: require('../../images/sacha-styles-XK7thML3zEQ-unsplash.jpg')
  },
  {
    id: 4,
    src: require('../../images/eberhard-grossgasteiger-1036384-unsplash.jpg')
  },
  {
    id: 5,
    src: require('../../images/justin-kauffman-449060-unsplash.jpg')
  },
  {
    id: 6,
    src: require('../../images/vincent-guth-182001-unsplash.jpg')
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: baseWidth,
    height: 250
  }
})

const renderImage = ({ item }) => (
  <Image source={item.src} style={styles.image} />
)

const Gallery = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={images}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
      renderItem={renderImage}
    />
  </SafeAreaView>
)

export default Gallery
