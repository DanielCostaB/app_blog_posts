import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet
} from "react-native";

import api from "./services/api";
import { BlogPostCard } from "./components/blog-post-card";
import { Input, Icon, Stack, Pressable, Fab, FlatList, Flex, ScrollView, Card } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { AddBlogPost } from "./components/add-blog-post";

const screen = Dimensions.get("window");

export default function App() {
  const [cards, setCards] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const [isOpen, setShowModal] = useState(false);
  const [filteredData, setFilteredData] = useState<BlogPost[]>([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setCards(response.data);
      setFilteredData(response.data);
    });
  }, []);

  const searchFilter = (text: string) => {
    if (text) {
      const newData: BlogPost[] = cards.filter(function (item) {
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
    <SafeAreaView>
      <Flex padding={4} backgroundColor={"#FFD7B2"} >
        <Stack space={2}>
          <Input
            backgroundColor={"#fff"}
            placeholder="Procure seu Post"
            variant="outline"
            onChangeText={(text) => searchFilter(text)}
            value={search}
            InputRightElement={
              <Pressable onPress={() => { }}>
                <Icon as={<MaterialIcons name="search" />} size={5} mr="2" color="muted.400" />
              </Pressable>}
          />
          <ScrollView w="100%" h="91vh" showsHorizontalScrollIndicator={false} >
            <FlatList
              flex={2}
              showsVerticalScrollIndicator={false}
              data={filteredData}
              renderItem={BlogPostCard}
              keyExtractor={i => `${i.id}`}
            />
          </ScrollView>
          <Fab position="absolute" renderInPortal={false} onPress={() => setShowModal(true)} shadow={2} size="sm" 
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
        </Stack>
      </Flex>
      <AddBlogPost showModal={setShowModal} isOpen={isOpen} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff'}
});
