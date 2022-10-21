import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput
} from "react-native";

export default function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  //const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setFilteredData(data);
      });
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = cards.filter(function (item) {
        if (item.title) {
          const itemData = item.title.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(cards);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
        <FlatList
          data={filteredData}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={PostsShow}
        />
      </SafeAreaView>
    </View>
  );
}

function PostsShow(item) {
  const { title, body, url } = item.item;
  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text>{body}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#D8D8D8", paddingTop: 60 },

  cardContainer: {
    borderWidth: 1,
    height: 200,
    backgroundColor: "#FFF",
    borderColor: "#666666",
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    color: "#656565",
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#656565",
    backgroundColor: "#FFF",
    margin: 20,
  },
});
