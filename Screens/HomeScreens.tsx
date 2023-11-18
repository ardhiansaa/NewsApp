import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import NewsCards from "../Components/NewsCards";
import HeadlinesCards from "../Components/HeadlinesCards";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationParamList } from "../types/navigation";
import { useGetNews } from "../src/News";
import { useHeadNews } from "../src/HeadlineNews";

type NavigationProps = NativeStackNavigationProp<NavigationParamList>;

const HomeScreens = () => {
  const navigation = useNavigation<NavigationProps>();
  const { data: newsData, isLoading } = useGetNews();
  const { data: headData } = useHeadNews();
  const isFocused = useIsFocused();
  const flatListRef = useRef<FlatList | null>(null);

  const newsPressed = (item: any) => {
    navigation.navigate("NewsDetails", { newsItem: item });
  };

  const allPressed = () => {
    navigation.navigate("Explore");
  };

  const windowWidth = useWindowDimensions().width;

  const scrollIndexRef = useRef(0);
  const handleScroll = () => {
    if (flatListRef.current && newsData?.articles?.length) {
      const newIndex = (scrollIndexRef.current + 1) % newsData.articles.length;

      if (newIndex === 4) {
        // Reset the index to 0 when it reaches the last index
        flatListRef.current.scrollToIndex({
          animated: true,
          index: 0,
        });
        scrollIndexRef.current = 0;
      } else {
        flatListRef.current.scrollToIndex({
          animated: true,
          index: newIndex,
        });
        scrollIndexRef.current = newIndex;
      }
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isFocused) {
      intervalId = setInterval(() => {
        handleScroll();
      }, 2500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isFocused]);

  const getContent = () => {
    return (
      <ActivityIndicator
        size="large"
        style={{ justifyContent: "center", alignItems: "center" }}
      />
    );
  };

  if (isLoading) {
    return (
      <View
        style={{
          height: "100%",
          justifyContent: "center",
        }}
      >
        {getContent()}
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Breaking News
            </Text>
          </View>
          <FlatList
            ref={(ref) => (flatListRef.current = ref)}
            data={headData?.articles?.slice(0, 4)}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => newsPressed(item)}>
                <HeadlinesCards
                  textJudul={item.title}
                  textKategori={item.source.name}
                  imageUrl={item.urlToImage}
                  windowWidth={windowWidth}
                />
              </TouchableOpacity>
            )}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Recommendation
            </Text>
            <TouchableOpacity onPress={allPressed}>
              <Text style={{ color: "blue", fontSize: 14 }}>View All</Text>
            </TouchableOpacity>
          </View>

          {newsData?.articles
            ?.sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            ?.slice(0, 5)
            .map((item, index) => (
              <View key={index} style={{}}>
                <TouchableOpacity
                  onPress={() => newsPressed(item)}
                  style={{ marginBottom: 10 }}
                >
                  <NewsCards
                    textJudul={item.title}
                    textKategori={item.source.name}
                    textTimeStamp={item.publishedAt}
                    imageUrl={item.urlToImage}
                  />
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreens;
