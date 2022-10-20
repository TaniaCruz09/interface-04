import React from "react";
import { StyleSheet, View } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const Footer = () => {
  return (
    <View style={styles.containerFoother}>
      <AntDesign
        style={styles.iconFoother}
        name="home"
        size={30}
        color="white"
      />
      <MaterialCommunityIcons
        style={styles.iconFoother}
        name="card-bulleted-outline"
        size={30}
        color="white"
      />
      <Ionicons
        style={styles.iconFoother}
        name="book"
        size={30}
        color="white"
      />
      <FontAwesome5
        style={styles.iconFoother}
        name="users"
        size={30}
        color="#3399FF"
      />
      <MaterialCommunityIcons
        style={styles.iconFoother}
        name="bookmark-minus"
        size={30}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFoother: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "center",
  },
  iconFoother: {
    marginHorizontal: 26,
  },
});
