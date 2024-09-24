import {StatusBar} from "expo-status-bar";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {TamaguiProvider, View, createTamagui} from "@tamagui/core";
import {Button} from "tamagui";
import {config} from "@tamagui/config/v3";

const tamaguiConfig = createTamagui(config);

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView className="flex-1 items-center justify-center bg-emerald-800">
        <View className="flex-1 items-center justify-center bg-emerald-800">
          <Text>Welcome to TrekStar</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
