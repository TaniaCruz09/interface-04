import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

export const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <AntDesign
        style={styles.arrowLeft}
        name="arrowleft"
        size={30}
        color="white"
      />
      <FontAwesome5 style={styles.bell} name="bell" size={28} color="white" />
      <Image
        style={styles.imgHeader}
        source={require("../../images/person1.jpg")}
      />
      <Ionicons name="reorder-three-outline" size={35} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 15,
    marginTop: 18,
    marginBottom: 24,
  },
  bell: {
    marginTop: 5,
  },
  arrowLeft: {
    position: "absolute",
    left: 10,
  },
  imgHeader: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginLeft: 20,
    marginRight: 20,
  },
});
