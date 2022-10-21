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

import api from "./services/api";

export default function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setCards(response.data);
      setFilteredData(response.data);
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
          placeholder="Procure seu Post"
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
        <Text style={styles.cardBody}>{body}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f59c74", paddingTop: 60 },

  cardContainer: {
    borderWidth: 1,
    height: 200,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderRadius: 2,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "regular",
    marginBottom: 10,
    textAlign: "left",
  },
  cardBody: {
    fontSize: 14,
    fontWeight: "regular",
    marginBottom: 10,
    textAlign: "left",
    color: "#666666"
  },
  textInputStyle: {
    height: 40,
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: "#FFF",
    margin: 20,
    borderColor: "#AFB3B0"
  },
});
