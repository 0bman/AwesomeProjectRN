import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

import styles from './styles'

const newsItems = [
  {
    id: 1,
    title: 'The HTML Handbook',
    summary:
      'HTML is the foundation of the marvel called the Web. Discover all you need to know about it in this handy handbook!',
    image: require('../../images/amanda-phung-1281331-unsplash.jpg')
  },
  {
    id: 2,
    title: 'Angular RxJs In-Depth',
    summary:
      'In this tutorial, we\'ll learn to use the RxJS 6 library with Angular 6 or Angular 7...',
    image: require('../../images/daniil-silantev-318853-unsplash.jpg')
  },
  {
    id: 3,
    title: 'How to Create Code Profiles in VSCode',
    summary:
      'This post piggybacks off of the work done by @avanslaars who is a fellow instructor at egghead.io....',
    image: require('../../images/vincent-van-zalinge-38358-unsplash.jpg')
  }
]

const goToNews = () => {}

const renderItem = ({ item }) => (
  <TouchableOpacity onPress={goToNews}>
    <View style={styles.newsItem}>
      <View style={styles.newsText}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.summary}</Text>
        </View>
      </View>
      <View style={styles.newsPhoto}>
        <Image source={item.image} style={styles.photo} />
      </View>
    </View>
  </TouchableOpacity>
)

const Feed = () => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={newsItems}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
    />
  </SafeAreaView>
)

export default Feed
