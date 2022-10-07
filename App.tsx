import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CommentScreen } from "./src/CommentScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#28333F"} barStyle={"light-content"} />
      <CommentScreen />
    </SafeAreaView>
  );
}
