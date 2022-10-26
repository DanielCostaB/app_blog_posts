import React from "react";
import { ListRenderItem, StyleSheet } from "react-native";
import { HStack, VStack, Icon, Box, Text, Spacer, IconButton, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const BlogPostCard: ListRenderItem<BlogPost> = ({ item: { title, body } }) =>
<Box marginBottom={4} style={styles.postContainer}>
  <HStack space={[2, 3]} justifyContent="space-between">
    <View style={styles.postText}>
      <Text bold>{title}</Text>
      <Spacer />
      <Text>{body}</Text>
    </View>
    <IconButton icon={<Icon as={MaterialIcons} name="delete-forever" size="sm" />} />
  </HStack>
</Box>

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    borderWidth: 1,
    height: 200,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderRadius: 2,
  },
  postText: {
    fontSize: 16,
    fontWeight: "regular",
    padding: 20,
    textAlign: "justify",
    marginRight: 20
  },
  cardBody: {
    fontSize: 14,
    fontWeight: "regular",
    marginBottom: 10,
    textAlign: "left",
    color: "#666666"
  },
});
