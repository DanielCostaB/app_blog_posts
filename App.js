import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Image, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [ cards, setCards ] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setCards(data)
    })
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={cards}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={PostsShow}
        />
      </SafeAreaView>
    </View>
  )
}   

function PostsShow(item) {
  const { title, body, url } = item.item
  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <Image/>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#D8D8D8', paddingTop: 60 },

  cardContainer: { borderWidth: 1, height: 200, backgroundColor: '#FFF', borderColor: '#666666',
   borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 }
});