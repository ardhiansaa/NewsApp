import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

interface INewsCardsProps {
  textJudul: string;
  textKategori: string;
  imageUrl: string;
  textTimeStamp: string;
}
const NewsCards = (props: INewsCardsProps) => {
  return (
    <View style={styles.component}>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textKategori}>{props.textKategori}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textJudul}>
          {props.textJudul}
        </Text>
        <Text style={styles.textTimeStamp}>{props.textTimeStamp}</Text>
      </View>
    </View>
  );
};

export default NewsCards;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0.2,
    backgroundColor: "white",
    marginVertical: 10,
    // marginHorizontal: 10,
    borderRadius: 10,
    // padding: 20,
    borderColor: "#DDDDDD",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  textKategori: {
    color: "grey",
  },
  textJudul: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  textTimeStamp: {
    color: "grey",
  },
});
