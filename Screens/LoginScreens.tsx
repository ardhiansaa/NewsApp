import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import { useAuth } from "../Context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<NavigationParamList>;

const LoginScreens = () => {
  const navigation = useNavigation<NavigationProps>();
  const [nama, setNama] = useState<string>("");
  const [isNamaEmpty, setIsNamaEmpty] = useState<boolean>(false);
  const { login } = useAuth();

  const masukPressed = () => {
    if (!nama.trim()) {
      setIsNamaEmpty(true);
      // Alert.alert("Error", "Nama cannot be empty.");
    } else {
      setIsNamaEmpty(false);
      navigation.navigate("Home");
      login(nama);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content" // You can use "light-content" or "default" as well
      />
      <View style={styles.container}>
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 210,
            height: 140,
            alignSelf: "center",
            marginTop: 30,
            marginBottom: 40,
          }}
        />
        <Text
          style={{
            color: "black",
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 16,
            marginVertical: 10,
          }}
        >
          Masuk
        </Text>
        <View
          style={[
            styles.containerInput,
            { borderColor: isNamaEmpty ? "red" : "black" },
          ]}
        >
          <TextInput
            placeholder="Isi nama anda"
            value={nama}
            onChangeText={(text) => {
              setNama(text.toUpperCase());
              setIsNamaEmpty(false);
            }}
            autoFocus={true}
            style={styles.inputNama}
          />
          <TouchableOpacity onPress={masukPressed} style={styles.masukButton}>
            <Text style={{ color: "white", fontSize: 16 }}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "center",
  },
  inputNama: {
    padding: 10,
    marginVertical: 7,
  },
  masukButton: {
    backgroundColor: "black",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  containerInput: {
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 40,
  },
});
