import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Button, Image, Text, View } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { green } from "react-native-reanimated/lib/typescript/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{  flex: 1 }}>
      <View
        style={{
          height: 50,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <MaterialIcons name="menu" size={24} color="green" />
        <Text style={{fontSize:20 , color:'green', fontWeight:"700" }}>BYKEA by WK</Text>
        <MaterialIcons name="add-call" size={24} color="green" />
      </View>
      <View>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6vOkcKd3I3LMNPJ_skgtcWEkE1xJMAxMGw&s" }} />
      </View>
    </View>
  );
}
