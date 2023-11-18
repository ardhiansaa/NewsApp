import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import NewsCards from "../Components/NewsCards";
import { useGetNews } from "../src/News";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationParamList } from "../types/navigation";

type NavigationProps = NativeStackNavigationProp<NavigationParamList>;

const ExploreScreens = () => {
  const navigation = useNavigation<NavigationProps>();
  const { data: newsData, isLoading } = useGetNews();

  const newsPressed = (item: any) => {
    navigation.navigate("NewsDetails", { newsItem: item });
  };

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
          // alignItems: "center",
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
            // paddingVertical: 65,
            paddingHorizontal: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              All Recommendation
            </Text>
          </View>

          {newsData?.articles
            ?.sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            ?.map((item, index) => (
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

export default ExploreScreens;
