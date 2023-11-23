import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import NewsCards from "../Components/NewsCards";
import Icons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationParamList } from "../types/navigation";
import { useQueryNews } from "../src/queryNews";

type NavigationProps = NativeStackNavigationProp<NavigationParamList>;

const SportScreens = () => {
  const navigation = useNavigation<NavigationProps>();
  const [searchQuery, setSearchQuery] = useState("");
  const [inputText, setInputText] = useState(""); // State baru untuk menyimpan inputan pengguna
  const [isSearching, setIsSearching] = useState(false);
  const { data: queryNews, isLoading, refetch } = useQueryNews(searchQuery);

  const newsPressed = (item: any) => {
    navigation.navigate("NewsDetails", { newsItem: item });
  };

  const handleSearch = () => {
    // Panggil useQueryNews hanya jika inputText tidak kosong
    if (inputText.trim() !== "") {
      setSearchQuery(inputText); // Set nilai searchQuery sesuai dengan inputan pengguna
      refetch(); // Memanggil refetch untuk mengambil data baru berdasarkan searchQuery
      setIsSearching(true);
    } else {
      setIsSearching(false); // Tidak perlu searching jika inputText kosong
    }
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
      <ScrollView style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            // paddingVertical: 65,
            paddingHorizontal: 20,
            flex: 1,
          }}
        >
          {/* <Button title="search" onPress={handleSearch} /> */}

          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sport News</Text>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <TextInput
              placeholder="Apa yang kamu cari?"
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              style={{
                borderWidth: 2.5,
                width: 330,
                padding: 8,
                borderRadius: 15,
              }}
            />
            <TouchableOpacity onPress={handleSearch}>
              <Icons name="search" size={30} color={"black"} />
            </TouchableOpacity>
          </View>

          {isSearching && isLoading ? (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {getContent()}
            </View>
          ) : (
            queryNews?.articles
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
              ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SportScreens;
