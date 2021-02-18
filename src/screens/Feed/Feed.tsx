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

const amanda: string = require('src/images/amanda-phung-1281331-unsplash.jpg')
const daniil: string = require('../../images/daniil-silantev-318853-unsplash.jpg')
const vincent: string = require('../../images/vincent-van-zalinge-38358-unsplash.jpg')

interface NewsProps {
  id: number
  title: string
  summary: string
  image: any
}

interface ItemProps {
  item: NewsProps
}

const newsItems: NewsProps[] = [
  {
    id: 1,
    title: 'The HTML Handbook',
    summary:
      'HTML is the foundation of the marvel called the Web. Discover all you need to know about it in this handy handbook!',
    image: amanda
  },
  {
    id: 2,
    title: 'Angular RxJs In-Depth',
    summary:
      "In this tutorial, we'll learn to use the RxJS 6 library with Angular 6 or Angular 7...",
    image: daniil
  },
  {
    id: 3,
    title: 'How to Create Code Profiles in VSCode',
    summary:
      'This post piggybacks off of the work done by @avanslaars who is a fellow instructor at egghead.io....',
    image: vincent
  }
]

const goToNews = () => {}

const renderItem = ({ item }: ItemProps): JSX.Element => (
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

const Feed: React.FC = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={newsItems}
      keyExtractor={(item: NewsProps) => `${item.id}`}
      renderItem={renderItem}
    />
  </SafeAreaView>
)

export default Feed
