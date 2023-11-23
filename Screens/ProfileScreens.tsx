import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../Context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<NavigationParamList>;

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { nama, logout, nim } = useAuth();

  const logOutPressed = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/profileTA.jpeg")}
            style={styles.image}
          />
          <View style={styles.dashedBorder} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>{nama}</Text>
          <Text>{nim}</Text>
        </View>

        <Text
          style={{
            paddingHorizontal: 60,
            textAlign: "justify",
            marginTop: 20,
            lineHeight: 22,
          }}
        >
          News App merupakan aplikasi yang dibuat menggunakan React Native
          dengan bahasa Typescript dimana data dalam aplikasi ini menggunakan
          API dari Newsapi.org yang merupakan layanan API dengan beragam berita
          yang di ambil dari berbagai sumber.
        </Text>
        <View style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={logOutPressed} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    // alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    marginTop: 80,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
  },
  dashedBorder: {
    position: "absolute",
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "grey",
    borderStyle: "dashed",
  },
  name: {
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 20,
  },
  logoutButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 30,
    marginHorizontal: 50,
  },
  logoutText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
