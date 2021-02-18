import React from 'react'
import {
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView
} from 'react-native'

const blake: string = require('src/images/blake-richard-verdoorn-20063-unsplash.jpg')
const casey: string = require('src/images/casey-horner-487085-unsplash.jpg')
const sacha: string = require('src/images/sacha-styles-XK7thML3zEQ-unsplash.jpg')
const eberhard: string = require('src/images/eberhard-grossgasteiger-1036384-unsplash.jpg')
const justin: string = require('src/images/justin-kauffman-449060-unsplash.jpg')
const vincent: string = require('src/images/vincent-guth-182001-unsplash.jpg')

const { width } = Dimensions.get('window')
const baseWidth = width / 2

interface ImageProps {
  id: number
  src: any
}

interface ImageViewProps {
  item: ImageProps
}

const images: ImageProps[] = [
  { id: 1, src: blake },
  { id: 2, src: casey },
  { id: 3, src: sacha },
  { id: 4, src: eberhard },
  { id: 5, src: justin },
  { id: 6, src: vincent }
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

const renderImage = ({ item }: ImageViewProps): JSX.Element => (
  <Image source={item.src} style={styles.image} />
)

const Gallery: React.FC = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={images}
      keyExtractor={(item: ImageProps) => `${item.id}`}
      numColumns={2}
      renderItem={renderImage}
    />
  </SafeAreaView>
)

export default Gallery
