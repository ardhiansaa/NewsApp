import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreens from "./Screens/LoginScreens";
import ProfileScreen from "./Screens/ProfileScreens";
import { AuthProvider } from "./Context/AuthContext";
import Navigations from "./Navigation/Navigation";
import RootNavigator from "./Navigation/RootNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
