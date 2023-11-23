import React, { FC } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

interface IHeadlinesCards {
  textJudul: string;
  textKategori: string;
  imageUrl: string;
  windowWidth: number;
}
const HeadlinesCards = (props: IHeadlinesCards) => {
  return (
    <View style={styles.component}>
      <Image
        source={{ uri: props.imageUrl }}
        style={{ ...styles.image, width: props.windowWidth - 40 }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textKategori}>{props.textKategori}</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textJudul}>
          {props.textJudul}
        </Text>
      </View>
    </View>
  );
};

export default HeadlinesCards;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "white",
    marginVertical: 10,
    marginRight: 8,
    borderRadius: 10,
    borderColor: "#DDDDDD",
    overflow: "hidden",
    height: 200,
    width: 340,
  },
  image: {
    width: 360,
    height: 200,
    position: "absolute",
  },
  textContainer: {
    flex: 1,
    margin: 10,
    textAlign: "justify",
    justifyContent: "flex-end",
    // justifyContent: "space-between",
  },
  textKategori: {
    color: "white",
  },
  textJudul: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
