import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { NavigationParamList } from "../types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";

type DetailsScreenRouteProp = RouteProp<NavigationParamList, "NewsDetails">;

const DetailsScreen = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { newsItem } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: newsItem.urlToImage }} style={styles.image} />
        <View style={styles.overlayContainer}>
          <View style={{ padding: 20 }}>
            {newsItem.source.id && (
              <Text style={styles.category}>{newsItem.source.id}</Text>
            )}
            <Text style={styles.title}>{newsItem.title}</Text>
          </View>
          <View style={styles.overlayContent}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.subTitle}>{newsItem.source.name}</Text>
              <Text style={styles.subTitle}> - </Text>
              <Text style={styles.subTitle} numberOfLines={1}>
                {newsItem.author}
              </Text>
            </View>
            <Text style={styles.publish}>{newsItem.publishedAt}</Text>
            <Text style={styles.content}>{newsItem.description}</Text>
            <Text style={styles.content} numberOfLines={4}>
              {newsItem.content}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
  },
  overlayContainer: {
    // height: "45%",
    justifyContent: "flex-end",
    marginTop: -200,
  },
  overlayContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginBottom: 5,
    textAlign: "justify",
    lineHeight: 24,
  },
  subTitle: {
    fontWeight: "700",
    fontSize: 18,
    color: "black",
    marginTop: 10,
  },
  category: {
    fontSize: 14,
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 5,
    backgroundColor: "#87C4FF",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  publish: {
    fontSize: 14,
    color: "black",
    marginVertical: 5,
  },
  content: {
    fontSize: 14,
    marginVertical: 15,
    color: "black",
    textAlign: "justify",
    lineHeight: 24,
  },
});

export default DetailsScreen;
