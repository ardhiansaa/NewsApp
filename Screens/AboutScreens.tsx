import React from "react";
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Text>News App</Text>
        <Text
          style={{
            paddingHorizontal: 60,
            textAlign: "justify",
            marginVertical: 20,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          quaerat, quam quae voluptatibus beatae animi rem commodi autem dolorem
          corporis dolores repellat velit exercitationem at veniam sint sapiente
          eligendi vitae.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AboutScreen;
