import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreens from "../Screens/LoginScreens";
import ProfileScreen from "../Screens/ProfileScreens";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";
import HomeScreens from "../Screens/HomeScreens";
import AboutScreen from "../Screens/AboutScreens";
import DetailScreen from "../Screens/DetailScreens";
import ExploreScreens from "../Screens/ExploreScreens";
import SearchScreens from "../Screens/SearchScreens";

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <tab.Navigator
      // initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "lightgray",
          marginHorizontal: 16,
          borderRadius: 24,
          height: 64,
          marginBottom: 9,
          shadowOpacity: 0,
          elevation: 1,
        },
        headerShown: false,
      })}
    >
      <tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name={focused ? "ios-newspaper" : "ios-newspaper-outline"}
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
      <tab.Screen
        name="Search"
        component={SearchScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name={focused ? "ios-search-circle" : "ios-search-circle-outline"}
              size={45}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
      <tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              name={focused ? "ios-person" : "ios-person-outline"}
              size={24}
              color={focused ? "black" : "grey"}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
};

const Navigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: true,

        headerStyle: {
          backgroundColor: "transparent",
        },

        headerTitleStyle: {
          fontWeight: "bold",
          color: "black",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "News App",
          headerTitleAlign: "center",

          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.navigate("Profile")}
          //     style={styles.iconContainer}
          //   >
          //     <View style={styles.iconBackground}>
          //       <Icons name="ios-person-outline" size={25} color="black" />
          //     </View>
          //   </TouchableOpacity>
          // ),
        })}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
            >
              <View style={styles.iconBackground}>
                <Icons
                  name="ios-chevron-back-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
            >
              <View style={styles.iconBackground}>
                <Icons
                  name="ios-chevron-back-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewsDetails"
        component={DetailScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
            >
              <View style={styles.iconBackground}>
                <Icons
                  name="ios-chevron-back-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Explore"
        component={ExploreScreens}
        options={({ navigation }) => ({
          // headerTransparent: true,
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContainer}
            >
              <View style={styles.iconBackground}>
                <Icons
                  name="ios-chevron-back-outline"
                  size={25}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingVertical: 10,
  },
  iconBackground: {
    backgroundColor: "rgba(238, 238, 238, 0.7)",
    opacity: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navigations;
